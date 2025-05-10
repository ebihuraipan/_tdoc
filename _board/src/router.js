// Vue Routerパッケージのインポート
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
];

// 一般的なルートの追加（動的インポート）
//routes.push({
//    path: "/b",
//    name: "board",
//    component: Board,
//});
//routes.push({
//    path: "/b/:bid",
//    name: "thread",
//    component: Thread,
//});
// 存在しないパスは全てTOPへ
//routes.push(
//  {
//    path: '/:catchAll(.*)',
//    redirect: '/'
//  }
//)

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//router.beforeEach((to, from) => {
//  // URL直接入力の場合はTOPへ
//  if (to.path != '/' && from.name == undefined) {
//    return '/'
//  }
//})

export default router;
