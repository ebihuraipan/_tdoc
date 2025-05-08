<script setup>
import { ref } from 'vue'
import { defineStore } from 'pinia'


defineProps({
  msg: String,
})

//const count = ref(0)

import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

//counter.count++
//// with autocompletion ✨
//counter.$patch({ count: counter.count + 1 })
//// or using an action instead
counter.increment()
</script>

<template >
    <div class="green">
      <div>Current Count: {{ counter.count }}</div>
    </div>
</template>

<style scoped>
.green {
  background-color: green;
}
</style>
