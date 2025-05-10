<script setup>
import { ref,watchEffect } from 'vue'
import { useThreadStore } from '../stores/_02threadList.js'
import { useResponseStore } from '../stores/_03responseList.js'
import router from '../router.js'	
import {zeroFill} from '../helper.js'	

const threadStore = useThreadStore()
const responseStore = useResponseStore()

let bid = ref(0)
let tid = ref(0)
let ttitle = ref("")
watchEffect(()=>{
  let _bid = parseInt(router.currentRoute.value.params.bid)
  let _tid = parseInt(router.currentRoute.value.params.tid)
  bid.value = _bid
  tid.value = _tid
  ttitle.value = threadStore.getThreadTitle(_tid)
})

</script>

<template>
  <div class="">
    {{ zeroFill(2,2) }}
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
