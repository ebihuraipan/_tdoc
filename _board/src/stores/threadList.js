// stores/counter.ts
import { defineStore } from "pinia";
export const useThreadStore = defineStore("thread", {
    state: () => {
        return {
            list: [
                { tid: 1, name: "seleniumが動かない" },
                { tid: 2, name: "playWrightが動かない" },
                { tid: 3, name: "runnが動かない" },
                { tid: 4, name: "vitestが動かない" },
                { tid: 5, name: "何も動かない" },
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
    actions: {
        addThread (title) {
            let last = this.list.sort((a, b) => a.tid - b.tid)[this.list.length-1]
            this.list.push( { tid: last.tid + 1, name: title });
        },
    },
});
