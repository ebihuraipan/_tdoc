import { defineStore } from "pinia";
export const useThreadStore = defineStore("thread", {
    state: () => {
        return {
            list: [
                { tid: 1, name: "スレッド1" },
                { tid: 2, name: "スレッド2" },
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
        addThread(title) {
            let last = this.list.sort((a, b) => a.tid - b.tid)[
                this.list.length - 1
            ];
            let newId = last.tid + 1;
            this.list.push({ tid: newId, name: title });
            return newId;
        },
    },
});
