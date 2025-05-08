// Vue Routerパッケージのインポート
import { createRouter, createWebHistory } from "vue-router";
import Board from "./components/_01Board.vue";
import Thread from "./components/_02Thread.vue";
const routes = [];

// 一般的なルートの追加（動的インポート）
routes.push({
    path: "/board",
    name: "board",
    component: Board,
});
routes.push({
    path: "/thread",
    name: "thread",
    component: Thread,
});
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
