<template >
  <div class="col">
    <div>
      <div>
        <b>タイトル➡</b>
        <input id="createTitle" type="text" v-model="createTitle"/>
      </div>
      <div>
          <textarea id="createText" v-model="createText"></textarea>
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
import { zeroFill,getYmdHis } from '../helper.js'	
// 変数
const threadStore = useThreadStore()
const responseStore = useResponseStore()
let createTitle = ref("")
let createText = ref("")
// 関数
function addThread() {
  let newTid = threadStore.addThread(createTitle.value)
  responseStore.addResponse(newTid, createText.value)
  createTitle.value = ""
  createText.value = ""
}
</script>


<style scoped>
#createTitle{
  width:500px;
}
#createText{
  width:100%;
  height:100px;
}
</style>
