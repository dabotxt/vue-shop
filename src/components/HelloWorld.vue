<template>
  <div class="hello">
    <h2>父组件的值:{{fathermsg}}</h2>
    <input type="text" v-model="fathermsg">
    <Son :msg="fathermsg" v-on:smsg="smsgs"></Son>
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  
  data () {
    return {
      fathermsg:0
    }
  },
  components:{
    Son
  },
  methods:{
    smsgs(e){
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
