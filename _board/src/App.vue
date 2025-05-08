<script setup>
//import Board from './components/_01Board.vue'
//import Thread from './components/_02Thread.vue'
</script>

<template>
  <div id="sidebar">
    <div class="col">
      <router-link to="/board" replace>掲示板</router-link>
      <router-link to="/thread" replace>スレッド</router-link>
      <router-link to="/response" replace>レスポンス</router-link>
    </div>
    <div>
      <router-view v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>

    </div>
  </div>
</template>

<style scoped>
#sidebar{
	display: grid;
  grid-template-columns: 200px 400px;
}
.orange{
  background-color: orange;
}

</style>
