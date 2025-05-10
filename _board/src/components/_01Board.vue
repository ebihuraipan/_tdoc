<template >
  <div class="col">
    <div>
      <input type="text" v-model="add_title"/>
      <button @click="addThread">スレッド作成</button>
    </div>
    <div class="">
      <h3>スレッド一覧</h3>
        <router-link
          v-for="t of threadStore.list"
          :to="'/b/' + t.tid"
          >
          {{ t.name }}<br>
        </router-link>
    </div>
  </div>
</template>


<script setup>
// 前提
import { ref } from 'vue';
import { useThreadStore } from '../stores/threadList.js'
// 変数
const threadStore = useThreadStore()
let add_title = ref("")
//関数
function addThread() {
  threadStore.addThread(add_title.value)
}
</script>


<style scoped>
.green {
  background-color: green;
}
</style>
