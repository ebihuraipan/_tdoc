<template>
  <div class="">
    <h1>{{ttitle}}</h1>
    <div v-for="r of responseStore.getResponseList(tid)">
      <pre class="r_text">
        {{ r.text }}
      </pre>
    </div>
  </div>
</template>

<script setup>
import { ref,watchEffect } from 'vue'
import { useThreadStore } from '../stores/threadList.js'
import { useResponseStore } from '../stores/responseList.js'
import router from '../router.js'	

const threadStore = useThreadStore()
const responseStore = useResponseStore()

let tid = ref(0)
let ttitle = ref("")
watchEffect(()=>{
  let _tid = parseInt(router.currentRoute.value.params.tid)
  tid.value = _tid
  ttitle.value = threadStore.getThreadTitle(_tid)
})

</script>



<style scoped>
.r_text {
  background-color: #888;
}
</style>
