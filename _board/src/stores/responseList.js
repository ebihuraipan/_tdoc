// stores/counter.ts
import { defineStore } from "pinia";
export const useResponseStore = defineStore("response", {
    state: () => {
        return {
            list: [
                { tid: 1, rid: 1, text: "書き込み1" },
                { tid: 1, rid: 2, text: "書き込み2" },
                { tid: 1, rid: 3, text: "書き込み3" },
                { tid: 1, rid: 4, text: "書き込み4" },
                { tid: 1, rid: 5, text: "書き込み5" },
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
});
