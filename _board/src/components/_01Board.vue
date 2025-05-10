<template >
  <div class="col">
    <div>
      <div>
        <b>タイトル➡</b>
        <input id="twrite" type="text" v-model="add_title"/>
      </div>
      <div>
          <textarea class="wform" v-model="add_text"></textarea>
      </div>
      <button @click="addThread" class="btn">スレッド作成</button>
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
// 準備
import { ref } from 'vue';
import { useThreadStore } from '../stores/_02threadList.js'
import { useResponseStore } from '../stores/_03responseList.js'
// 変数
const threadStore = useThreadStore()
const responseStore = useResponseStore()
let add_title = ref("")
let add_text = ref("")
// 関数
function addThread() {
  let new_tid = threadStore.addThread(add_title.value)
  responseStore.addResponse(new_tid, add_text.value)
  add_title.value = ""
  add_text.value = ""
}
</script>


<style scoped>
.green {
  background-color: green;
}
#twrite{
  width:500px;
}
.wform{
    width:100%;
    height:100px;
}
</style>
