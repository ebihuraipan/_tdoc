// stores/counter.ts
import { defineStore } from "pinia";
export const useResponseStore = defineStore("response", {
    state: () => {
        return {
            list: [
                { bid: 1, tid: 1, rid: 1, text: "書き込み1" },
                { bid: 1, tid: 1, rid: 2, text: "書き込み2" },
                { bid: 1, tid: 1, rid: 3, text: "書き込み3" },
                { bid: 1, tid: 1, rid: 4, text: "書き込み4" },
                { bid: 1, tid: 1, rid: 5, text: "書き込み5" },
            ],
        };
    },
    getters: {
        getResponseList: (state) => (_bid, _tid) => {
            let _list = state.list
                .filter((a) => {
                    if (a.bid == _bid && a.tid == _tid) {
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
});
