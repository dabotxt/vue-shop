<template>
  <div> 
      子组件
    <h2>父亲组件传过来的值 ===== {{sb}}{{ssb}}</h2>
    <button @click="saylove">表达爱意</button>
    <button @click="speaklove">说爱</button>
    <Ground-son></Ground-son>
  </div>
</template>

<script>
import GroundSon from './grandson.vue'
export default {
    props:['sb','ssb'],
    methods:{
        saylove(){
            this.$emit('bs','I love YOU father')
            
            this.$bus.$emit('ssb','I love YOU borther')
        },
        speaklove(){
            this.$emit('updata', !this.ssb)
        }
    },
    components:{
        GroundSon
    }
}
</script>

<style>

</style>