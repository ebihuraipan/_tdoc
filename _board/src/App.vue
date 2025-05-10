<script setup>
//import Board from './components/_01Board.vue'
//import Thread from './components/_02Thread.vue'
</script>

<template>
  <div id="center">
    <div id="widthPage">
      <div>
      <router-link to="/b" replace>
        <h1>掲示板</h1>
      </router-link>
    </div>
    <div>
      <router-view v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
    </div>
  </div>
</template>

<style scoped>
#center{
	display: flex;
  flex-direction: row;
  justify-content: center;

}
#widthPage{
	display: flex;
  flex-direction: column;
  width: 700px;
  height: 100vh;
}
.orange{
  background-color: orange;
}
</style>
