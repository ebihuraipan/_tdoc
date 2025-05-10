import { defineStore } from "pinia";
export const useBoardStore = defineStore("board", {
    state: () => {
        return {
            list: [
                { bid: 1, title: "掲示板トップ" },
                //{ bid: 2, name: "ケニア" },
                //{ bid: 3, name: "インド" },
                //{ bid: 4, name: "ブラジル" },
                //{ bid: 5, name: "タンザニア" },
            ],
        };
    },
    getters: {
        getBoardTitle: (state) => (bid) => {
            const board = state.list.find((a) => a.bid === bid);
            if (!board) return "";
            return board.title;
        },
    },
    //actions: {
    //    length() {
    //        return this.list.length;
    //    },
    //},
});
