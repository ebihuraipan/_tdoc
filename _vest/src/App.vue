<script setup>
import Message from './components/Message.vue'
import SomeForm from './components/SomeForm.vue'

</script>

<template>

  <Message msg="メッセージ" />
  <hr>
  <SomeForm />
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>

  
  
  
  

  <!--<div>
    <router-link :to="{ path: '/home'}">HOME</router-link>,
    <router-link :to="{ path: '/home2'}">About</router-link>
  </div>
  <router-view/>-->

  <!--<HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
