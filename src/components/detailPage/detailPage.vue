<template>
  <div class="detailPage-wrap" v-if="detail">
    <div class="detailPage-wrap-scroll">
      <div class="banner">
        <img :src="detail.image" alt="">
        <div class="back" @click="back()"> < </div>
      </div>
      <div class="scroll-wrapper">
        <div class="s">
          <div class="detail-content">
            <h3>{{detail.name}}</h3>
            <div class="detail-sells">
              <span>月销{{detail.sellCount}}</span>
              <span >好评率{{detail.rating}}%</span>
            </div>
            <div class="detail-price">
              <div class="detail-left">
          <span class="detail-prices"><span>¥</span>{{detail.price}}
              </span>
                <span class="detail-old" v-if="detail.oldPrice"><span>¥</span>{{detail.oldPrice}}</span>
              </div>
              <div class="detail-right">
                <v-cartC :food="foods" v-if="foods.nums"></v-cartC>
                <button @click="addCart()">加入购物车</button>
              </div>
            </div>
          </div>
          <div class="du"></div>
          <div class="shopjs">
            <h3 class="title">商品介绍</h3>
            <p class="content">一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from "vue"
  import cartC from "../cartControll/cartControll";
  import BScroll from 'better-scroll';
  import { bus } from '../../../libs/bus.js'
  export default{
    data(){
        return {
          detail:null,
          flag:"",
          foods:null
        }
    },
    components:{
      "v-cartC":cartC,
    },
    props:["bool"],
    methods:{
      back(){
        this.flag=false
        bus.$emit("flag",this.flag)
      },
      addCart(){
        if(!this.foods.nums){
          Vue.set(this.foods,"nums",1)
        }else{
          this.foods.nums++
        }
        bus.$emit("datas",this.foods,1)
      }
    },
    mounted(){
      var _this=this

      bus.$on("detailPage",(msg,bool)=>{
        this.flag=this.bool
        this.detail=msg
        this.foods=msg
      })

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .detailPage-wrap{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    padding-bottom:96/@rem;
    overflow: hidden!important;
    display: flex;
    flex-direction: column;
  }
  .detailPage-wrap-scroll{
    width:100%;
    height:auto;
    overflow-y:auto;
  }
  .scroll-wrapper{
    flex:1;
    overflow: hidden;
  }
  .banner{
    width:100%;
    height:750/@rem;
    position:relative;
    img{
      width:100%;
      height:100%;
    }
  }
  .detail-content{
    background:#fff;
    padding:36/@rem;
    h3{
      font-size:28/@rem;
      color:#07111b;
      line-height:28/@rem;
      margin-bottom:16/@rem;
    }
  }
  .detail-sells{
    margin-bottom:36/@rem;
    span{
      display: inline-block;
      mrin-right:24/@rem;
      font-size:20/@rem;
      color:#c3c6c9;
    }
  }
  .detail-price{
    display:flex;
    justify-content: space-between;
    align-content: center;
  }
  .detail-prices{
    font-size:36/@rem;
    font-weight: 700;
    color:#f01414;
    margin-right:12/@rem;
  }
  .detail-old{
    font-size: 20/@rem;
    font-weight: normal;
    color:#93999f;
    line-height:48/@rem;
    text-decoration: line-through;
  }
  .detail-right{
    display: inline-block;
    display: flex;
    button{
      box-sizing: content-box;
      padding:0 24/@rem;
      height:48/@rem;
      color:#fff;
      line-height:48/@rem;
      font-size:18/@rem;
      text-align: center;
      background:rgb(0,160,220);
      border:none;
      border-radius:24/@rem;
      outline: none;
      margin-left:18/@rem;
    }
  }
  .du{
    width:100%;
    height:32/@rem;
    background:#f3f5f7;
    border-top:1px solid #e6e7e8;
    border-bottom:1px solid #e6e7e8;
  }
  .shopjs{
    width:100%;
    height:auto;
    padding:36/@rem;
    background:#fff;
    .title{
      font-size:28/@rem;
    }
    .content{
      padding:0 16/@rem;
      font-size:24/@rem;
      color:#6e747a;
      line-height:48/@rem;
    }
  }
  .back{
    font-size:48/@rem;
    color:#fff;
    font-weight: 600;
    position: absolute;
    left:36/@rem;
    top:36/@rem;
  }
</style>
