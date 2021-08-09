<template>
  <div>
      <h2>父组件</h2>
      <h5 v-show="show">看不见我</h5>
      <h3>儿子给我的爱====={{mylove}}</h3>
      <Son :sb='cont' @bs="getlove" @updata="show = $event" :ssb='show'></Son>
      
      <Borther></Borther>
  </div>
</template>

<script>
import Son from './son.vue'
import Borther from './borther.vue'
export default {
    provide(){
        return{
            father:this //向后代传值
        }
    },
    data() {
        return {
            cont: '1',
            mylove: '',
            show: true
        }
    },
    components:{
        Son,
        Borther
    },
    methods:{
        getlove(e){
            console.log(e)
            this.mylove = e
        },
        
    }
}
</script>

<style>

</style>