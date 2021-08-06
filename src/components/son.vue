<template>
  <div>
      <h2>
          子组件的值:{{msg}}
      </h2>
      <input type="text" v-model="msg2" @change="setdata">
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg2: null
        }
    },
    props:['msg'],
    methods:{
        setdata(){
            this.$emit('smsg',this.msg2)
        }
    }
}
</script>

<style>

</style>