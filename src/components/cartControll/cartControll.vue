<template>
  <div class="cartControll">
    <transition enter-active-class="give" leave-active-class="leave">
      <div class="removeShop icon-remove_circle_outline" v-show="food.nums>0" @click.stop="romoveSockte()"></div>
    </transition>
    <div class="addNum" v-show="food.nums>0">{{food.nums}}</div>
    <div class="addShop icon-add_circle" @click.stop="msgSockte()"></div>
 </div>
</template>
<script type="text/ecmascript-6">
  import { bus } from '../../../libs/bus.js'
  import Vue from 'vue'
  export default{
    data(){
        return {
          num:0,
          foods:null
        }
    },
    props:["food"],
    methods:{
      msgSockte(){
        if(!this.food.nums){
          Vue.set(this.food,"nums",1)
        }else{
          this.food.nums++
        }
        bus.$emit("datas",this.food,1)
      },
      romoveSockte(){
        if(this.food.nums<1){
          return false
        }
        this.food.nums--
        bus.$emit("datas",this.food,0)
      }
    },
    mounted(){
      bus.$emit("all",this.food)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .cartControll{
    display: flex;
    position: relative;
    z-index: 999999;
  }
  .addNum{
    text-align: center;
    width:48/@rem;
    font-size:20/@rem;
    color:rgb(147,153,159);
    line-height:48/@rem;
  }
  .addShop,.removeShop{
    font-size:48/@rem;
    color:rgb(0,160,220);
  }
  .give{
    animation:tomove 0.4s;
  }
  @keyframes tomove{
    0%{
      transform:translate3D(48/@rem,0,0) rotate(0);
      opacity:0;
    }
    100%{
      transform:translate3D(0,0,0) rotate(180deg);
      opacity:1;
    }
  }
  .leave{
    animation:leavemove 1s;
  }
  @keyframes leavemove{
    0%{
      transform:translate3D(-48/@rem,0,0) rotate(180deg);
      opacity:1;
    }
    100%{
      transform:translate3D(48/@rem,0,0) rotate(0);
      opacity:0;
    }
  }

</style>
