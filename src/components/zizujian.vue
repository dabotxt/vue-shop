<template>
  <div>
      <h2>
          子组件
      </h2>
      <h3>{{show}}</h3>
      <button @click="handel">开关</button>
  </div>
</template>

<script>
export default {
 props:['show'],
 methods:{
   handel(){
     this.$emit('updata:show', !this.show)
   }
 }
}
</script>

<style>

</style>