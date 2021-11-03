<template>
  <div>

    
      
      <h2 v-if="show == 1" :key="1"><img src="../assets/logo.png" alt="" /></h2>
      <h2 v-if="show == 2" :key="2">hello world!2</h2>
      <h2 v-if="show == 3" :key="3">hello world!3</h2>

    <button>测试1</button>
    <button>测试2</button>
    <button>测试3</button>
    <div class="top">
      <div class="center" @click="Show" :class="{'active':current==1}">
        1
      </div>
      <div class="center" @click="Show2" :class="{'active':current==2}">
        2
      </div>
      <div class="center" @click="Show3" :class="{'active':current==3}">
        3
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data(){
      return { 
        show:1,
        current: 1
      }
    },
    methods:{
      Show(){
        this.current= 1;
      },
      Show2(){
        this.current= 2;
      },
      Show3(){
        this.current= 3;
      }
    }

  }
</script>

<style scoped>
h2{ 
animation-name:flip; 
animation-duration: 5.5s; 
/*animation:turn 1s linear infinite;*/
}
.top{
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center{
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  background: red;
}

</style>