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


//let aaa = [
//    { bid: 1, name: "マンデリン" },
//    { bid: 2, name: "ケニア" },
//    { bid: 3, name: "インド" },
//    { bid: 4, name: "ブラジル" },
//    { bid: 5, name: "タンザニア" },
//].find((a)=>{
//    return a.bid === 1

//}).name
//console.log(aaa)