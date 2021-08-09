<template>
  <div>
      <h2>孙子组件</h2>
      <h3>爷爷组件穿的值：================={{count}}</h3>
      <input type="text">
  </div>
</template>

<script>
export default {
    inject:['father'],
    data(){
        return{
            count: this.father.cont
        }
    },
    created(){
        console.log('组件创建了')
    },
    destroyed(){
        console.log('组件销毁了')
    }
}
</script>

<style>

</style>