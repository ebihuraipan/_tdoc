import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";  // 追記
import Home2 from "../components/Home2.vue";  // 追記

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/home2",
        name: "Home2",
        component: Home2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;