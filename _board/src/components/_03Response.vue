<script setup>
import { ref,watchEffect } from 'vue'
import { useThreadStore } from '../stores/threadList.js'
import { useResponseStore } from '../stores/responseList.js'
import router from '../router.js'	

const threadStore = useThreadStore()
const responseStore = useResponseStore()

let bid = ref(0)
let tid = ref(0)
let ttitle = ref("")
watchEffect(()=>{
  //console.log(boardStore.board)
  let _bid = parseInt(router.currentRoute.value.params.bid)
  let _tid = parseInt(router.currentRoute.value.params.tid)
  bid.value = _bid
  tid.value = _tid
  ttitle.value = threadStore.getThreadTitle(_tid)
})

</script>

<template >
  <div class="">
    <h1>{{ttitle}}</h1>
    <div v-for="r of responseStore.getResponseList(bid,tid)">
      <pre class="r_text">
        {{ r.text }}
      </pre>
    </div>
  </div>
</template>

<style scoped>
.r_text {
  background-color: #888;
}
</style>
