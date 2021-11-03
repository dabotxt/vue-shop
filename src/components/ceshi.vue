<template>
  <div>
      <div class="top">
          <div :class="[{active:activeIndex==0}]" @click="menu" data-index="0">个人用户</div>
          <div :class="[{active:activeIndex==1}]" @click="menu" data-index="1">企业用户</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex: 0,
        }
    },
    methods:{
        menu(e){
            console.log(e.target.dataset)
            const index = e.target.dataset.index - 0;
            this.activeIndex = index
        }
    },
    created() {
        const arr = [1,2,3,4,5,6,7,8,9,0]
        arr.forEach((e,q) => {
           console.log(e,q) 
        });
    }
}
</script>

<style scoped>
.top{
    width: 500px;
    height: 50px;
    display: flex;
    flex-flow: row wrap;
}
.top div{
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active{
    background: red;
}
</style>