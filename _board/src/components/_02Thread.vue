<script setup>

import { watchEffect,ref, computed } from 'vue';
import { storeToRefs } from "pinia";
import router from '../router.js'	
import { useBoardStore } from '../stores/boardList.js'
import { useThreadStore } from '../stores/threadList.js'

const boardStore = useBoardStore()
const thread = useThreadStore()

let bid = ref(0)
let btitle = ref("")

watchEffect(()=>{
  //console.log(boardStore.board)
  let _bid = parseInt(router.currentRoute.value.params.bid)
  bid.value = _bid
  btitle.btitle = boardStore.getBoardTitle(_bid)
})

</script>

<template >
  <div class="">
    <h1>{{btitle}}</h1>
    <h3>スレッド一覧{{ bid }}</h3>
      <router-link
        v-for="t of thread.getThreadList(bid)"
        :to="'/b/' + bid + '/' + t.tid"
        >
        {{ t.name }}<br>
      </router-link>
  </div>
</template>

<style scoped>

</style>
