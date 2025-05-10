<script setup>
//import { ref } from 'vue'
//import { defineStore } from 'pinia'
import { useBoardStore } from '../stores/boardList.js'

const board = useBoardStore()

</script>

<template >
    <div class="">
      <h1>板一覧</h1>
        <span v-for="b of board.list">
          <router-link  :to="'/b/' + b.bid" replace>{{ b.title }}</router-link>
          <br>
        </span>
    </div>
</template>u


<style scoped>
.green {
  background-color: green;
}
</style>
