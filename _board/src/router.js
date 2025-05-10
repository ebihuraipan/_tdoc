import { createRouter, createWebHistory } from "vue-router";
import Board from "./components/_01Board.vue";
import Thread from "./components/_02Thread.vue";
import Response from "./components/_03Response.vue";
const routes = [
    {
        path: "/b",
        name: "board",
        component: Board,
    },
    {
        path: "/b/:tid",
        name: "thread",
        component: Thread,
    },
    {
        path: "/b/:bid/:tid",
        name: "response",
        component: Response,
    },
    {
        // 存在しないパスは全てTOPへ
        path: "/:catchAll(.*)",
        redirect: "/b",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
