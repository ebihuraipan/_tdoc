// stores/counter.ts
import { defineStore } from "pinia";
import { zeroFill, getYmdHis } from "../helper.js";
export const useResponseStore = defineStore("response", {
    state: () => {
        return {
            list: [
                {
                    tid: 1,
                    rid: 1,
                    text: "書き込み1",
                    date: "1970/01/01 00:00:00",
                },
                {
                    tid: 1,
                    rid: 2,
                    text: "書き込み2",
                    date: "1970/01/01 00:00:00",
                },
                {
                    tid: 1,
                    rid: 3,
                    text: "書き込み3",
                    date: "1970/01/01 00:00:00",
                },
                {
                    tid: 2,
                    rid: 1,
                    text: "書き込み4",
                    date: "1970/01/01 00:00:00",
                },
                {
                    tid: 2,
                    rid: 2,
                    text: "書き込み5",
                    date: "1970/01/01 00:00:00",
                },
            ],
        };
    },
    getters: {
        getResponseList: (state) => (_tid) => {
            let _list = state.list
                .filter((a) => {
                    if (a.tid == _tid) {
                        return true;
                    }
                    return false;
                })
                .sort((a, b) => {
                    if (a.rid > b.rid) return 1;
                    else -1;
                });
            return _list;
        },
    },
    actions: {
        addResponse(_tid, _text) {
            let _list = this.list
                .filter((a) => {
                    if (a.tid == _tid) {
                        return true;
                    }
                    return false;
                })
                .sort((a, b) => {
                    return a.rid - b.rid;
                });
            let d = new Date().toLocaleString();
            // 既存で存在してない、新規なら1を設定する
            console.log(_list);
            let rid = 0;
            if (_list === undefined) {
                rid = 1;
            } else {
                rid = _list.length + 1;
            }

            this.list.push({
                tid: _tid,
                rid: rid,
                text: _text,
                date: getYmdHis(),
            });
        },
    },
});
