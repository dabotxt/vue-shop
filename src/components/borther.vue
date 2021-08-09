<template>
<div>
    <h2>
      兄弟组件
  </h2>
  <h3>
      兄弟想我表达的爱意======{{son}}
  </h3>
</div>
</template>

<script>
export default {
    data(){
        return{
            son:''
        }
    },
    created(){
        this.$bus.$on('ssb',this.getlove)
    },
    methods:{
        getlove(e){
            console.log('兄弟组件',e)
            this.son = e
        }
    }
}
</script>

<style>

</style>