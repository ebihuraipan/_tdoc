import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);

//createApp(App).use(router).app.use(pinia).mount("#app");
app.use(pinia);
app.use(router);
app.mount("#app");
