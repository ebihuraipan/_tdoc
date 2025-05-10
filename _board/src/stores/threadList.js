// stores/counter.ts
import { defineStore } from "pinia";
export const useThreadStore = defineStore("thread", {
    state: () => {
        return {
            list: [
                { tid: 1, bid: 1, name: "seleniumが動かない" },
                { tid: 2, bid: 1, name: "playWrightが動かない" },
                { tid: 3, bid: 1, name: "runnが動かない" },
                { tid: 4, bid: 1, name: "vitestが動かない" },
                { tid: 5, bid: 2, name: "何も動かない" },
            ],
        };
    },
    getters: {
        getThreadList: (state) => (_bid) => {
            let _list = state.list.filter((a) => {
                if (a.bid == _bid) {
                    return true;
                }
                return false;
            });
            return _list;
        },
        getThreadTitle: (state) => (_tid) => {
            const thread = state.list.find((a) => a.tid === _tid);
            if (!thread) return "";
            return thread.name;
        },
    },
});
