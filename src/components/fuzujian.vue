<template>
  <div class="watch">
      <h2>父组件</h2>
      <h3 v-show="show">显示</h3>
      <Zizujian :show='show' v-on:updata='updata'></Zizujian>
      <h3>{{p1}}</h3>
      <input type="text" v-model="p1">
      <input type="text" v-model="type.ball">
  </div>
</template>

<script>
import Zizujian from '../components/zizujian.vue'
export default {
    data(){
        return{
            show: true,
            p1: '我是p1',
            type:{
                ball: '篮球'
            }
        }
    },
    components:{
        Zizujian
    },
    methods:{
        updata(e) {
            this.show = e
        },
    },
    watch:{
        p1(newarry,oldarry){
            console.log(newarry,oldarry)
        },
        type:{
            handler: function (newarry,oldarry) {
                console.log(newarry,oldarry)
            }
        },
        //深度监听
        deep: true
    }
}
</script>

<style>

</style>