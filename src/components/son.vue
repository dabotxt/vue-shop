<template>
  <div>
      <h2>
          子组件的值:{{msg}}
      </h2>
      <input type="text" v-model="msg" @change="setdata">
  </div>
</template>

<script>
export default {
    props:['msg'],
    methods:{
        setdata(){
            this.$emit('smsg',this.msg)
        }
    }
}
</script>

<style>

</style>