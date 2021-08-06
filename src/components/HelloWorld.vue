<template>
  <div class="hello"> 
    <h2>父组件的值:{{fathermsg}}</h2> 
    <input type="text" v-model="fathermsg">
    <Son :msg="fathermsg" v-on:smsg="smsgs"></Son>
    <Bor></Bor>
  </div> 
</template>  

<script>
import Son from './son.vue'
import Bor from './borther.vue'
export default {
  
  data () {
    return {
      fathermsg:0
    }
  },
  components:{
    Son,
    Bor
  },
  methods:{
    smsgs(e){
      this.fathermsg == e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
