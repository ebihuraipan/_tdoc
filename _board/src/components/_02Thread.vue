<template>
    <div class="col">
        <div class="col">
            <div>
                <textarea id="addTextTop" v-model="addText"></textarea>
            </div>
            <div class="rowr">
                <button @click="addResponse" class="btn">書き込み</button>
            </div>
        </div>
        <hr>
        <div class="">
            <h1>{{addTitle}}</h1>
            <div class="col line" v-for="r of responseStore.getResponseList(tid)">
                <div class="between">
                    <b>{{ r.rid }}:</b>
                    <span>{{ r.date }}</span>
                </div>
                
                <pre style="margin:0px;padding:0px;">{{ r.text }}</pre>
            </div>
        </div>
        <hr>
        <div class="col">
            <div>
                <textarea id="addTextBottom" v-model="addText"></textarea>
            </div>
            <div class="rowr">
                <button @click="addResponse" class="btn">書き込み</button>
            </div>
        </div>
        <div style="height:200px;"></div>
    </div>
</template>

<script setup>
// 準備
import { ref,watchEffect } from 'vue'
import { useThreadStore } from '../stores/_02threadList.js'
import { useResponseStore } from '../stores/_03responseList.js'
import router from '../router.js'	
// 変数
const threadStore = useThreadStore()
const responseStore = useResponseStore()
let tid = ref(0)
let addTitle = ref("")
let addText = ref("")
// 関数
watchEffect(()=>{
    let _tid = parseInt(router.currentRoute.value.params.tid)
    tid.value = _tid
    addTitle.value = threadStore.getThreadTitle(_tid)
})
function addResponse(){
    responseStore.addResponse(tid.value, addText.value)
}
</script>

<style scoped>
.line {
    padding:10px;
    background-color: lightsalmon;
    margin-top: 0px;
    margin-bottom: 5px;
}
#addTextTop{
    width:100%;
    height:100px;
}
#addTextBottom{
    width:100%;
    height:100px;
}

</style>
