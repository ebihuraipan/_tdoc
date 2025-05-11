<script setup>
// 準備
import { ref,watchEffect } from 'vue'
import router from '../router.js'	
import {zeroFill} from '../helper.js'	

const props = defineProps({
  id: String,
  date: String,
  text: String,
})
</script>

<template>
<div class="line">
  <div class="between">
      <b>{{ props.id }}:</b>
      <span>{{ props.date }}</span>
  </div>
  <pre style="margin:0px;padding:0px;">{{ props.text }}</pre>
</div>
</template>

<style scoped>
.line {
    padding:10px;
    background-color: lightsalmon;
    margin-top: 0px;
    margin-bottom: 5px;
}
</style>
