<template>
  <div class="shopcart"  v-if="seller">
    <div class="shopcart-left">
      <div class="shopcart-wrapper" @click="flag=!flag">
        <span class="icon-shopping_cart shopcart-icon shopcart-icon-default" :class="{'shopcart-icon-active':num>0}"></span>
        <div class="shopping-num" v-if="num">{{num}}</div>
      </div>
      <div class="price-default">
        <h3 :class="{'active': money}">¥{{money}}</h3>
      </div>
      <div class="freight-default">另需要配送费¥{{seller.deliveryPrice}}元</div>
    </div>
    <div class="shopcart-right">
      <button class="btn-default" :class="{'enouth':money>=seller.minPrice}">{{styles}}</button>
    </div>
    <div class="mark-cact" v-show="flag">
      <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
        <div class="shopcart-wrappers" v-show="flag">
          <div class="shopcart-head">
            <p>购物车</p>
            <span @click="remove()">清空</span>
          </div>
          <ul class="shopcart-list">
            <li v-for="(v,i) in o">
              <p>{{v.name}}</p>
              <div class="list-right">
                <span class="shopcart-list-price" ><span>¥</span>{{v.price}}</span>
                <v-cartCont :food="v"></v-cartCont>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { bus } from '../../../libs/bus.js'
  import cartCont from "../cartControll/cartControll";
  export default{
    data(){
      return {
        num:0,
        money:0,
        flag:false,
        seller:null,
        o:{}
      }
    },
    props:["res"],
    components:{
        "v-cartCont":cartCont
    },
    computed:{
        styles(){
          let mon=this.seller.minPrice
          let m=mon-this.money
          if(m==mon){
            return "¥"+mon+"元起送"
          }else if(m<mon && m>0){
            return "还差"+m+"元起送"
          }else{
              return "去结算"
          }
        }
    },
    methods:{
      remove(){
        for(var v in this.o){
            this.o[v].nums=0
        }
        this.o={}
        this.num=0
        this.money=0
        this.flag=false
      }
    },
    mounted(){
      this.seller=this.res
      bus.$on("datas",(msg,sta)=>{
        if(sta){
          this.num++
          this.money+=msg.price
          this.o[msg.name]=msg
        }else{
          this.num--
          this.money-=msg.price
          this.o[msg.name]=msg
          if(msg.nums<1){
            delete this.o[msg.name]
          }
          if(this.num<1){
              this.flag=false
          }
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .shopcart{
    width:100%;
    height:96/@rem;
    background:#141d27;
    display: flex;
    position: relative;
    z-index: 10;
    bottom:0;
  }
  //购物车样式
  .shopcart-left{
    display: flex;
    flex:1;
  }
  .shopcart-wrapper{
    position: relative;
    width:112/@rem;
    height:112/@rem;
    background:#141d27;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    left:24/@rem;
    bottom:16/@rem;
  }
  .shopping-num{
    position: absolute;
    width:48/@rem;
    border-radius:12/@rem;
    background:#f01414;
    text-align: center;
    font-size: 14/@rem;
    line-height:32/@rem;
    color:#fff;
    font-weight: 700;
    top:0;
    left:64/@rem;

  }
  .shopcart-icon{
    width:88/@rem;
    border-radius: 50%;
    font-size:48/@rem;
    line-height:88/@rem;
    text-align: center;
  }
  //没有购物
  .shopcart-icon-default{
    color:rgba(255,255,255,0.4);
    background:#2b343c;
  }
  //有购物
  .shopcart-icon-active{
    color:#fff;
    background:#00a0dc;
  }
  //价格
  .price-default{
    line-height:48/@rem;
    padding:24/@rem 0;
    h3{
      font-size:32/@rem;
      padding:0 24/@rem 0 48/@rem;
      border-right:1px solid rgba(255,255,255,.1);
      color:rgba(255,255,255,0.4)
    }
    h3.active{
      color:#fff;
    }
  }
  //运费
  .freight-default{
    line-height: 48/@rem;
    font-size:18/@rem;
    color:rgba(255,255,255,.4);
    font-weight: 700;
    padding: 24/@rem;

  }

  .shopcart-right{
    width:210/@rem;
    height:100%;
  }
  .btn-default{
    width:100%;
    height:100%;
    border: none;
    outline: none;
    text-align: center;
    line-height:96/@rem;
    color:#979a9c;
    background:rgba(255,255,255,0.4);
    font-size:24/@rem;
    font-weight: 600 ;
  }
  .enouth{
    background:#00b43c;
    color:#fff;
  }
  //遮罩层
  .mark-cact{
    position: fixed;
    width:100%;
    height:100%;
    z-index: -1;
    background:rgba(7,17,27,.6);
    overflow:hidden;
    bottom:96/@rem;
    left:0;
  }
  .shopcart-wrappers{
    width:100%;
    max-height:515/@rem;
    background:#fff;
    position: absolute;
    bottom:0;
    left:0;
    z-index: -1;
  }
  .shopcart-head{
    display: flex;
    padding:0 36/@rem;
    height:80/@rem;
    justify-content: space-between;
    align-items: center;
    background:#f3f5f7;
    border-bottom:1px solid #dbdee1;
    border-top:1px solid #dbdee1;
    p{
      font-size: 28/@rem;
      color:rgb(7,17,27);
    }
    span{
      font-size:24/@rem;
      color:rgb(0,160,220);
    }
  }
  .shopcart-list{
    width:100%;
    max-height:435/@rem;
    padding:0 36/@rem;
    overflow-y:scroll;
    li{
      width:100%;

      height:96/@rem;
      border-bottom: 1px solid #e6e7e8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-child{
        border-bottom:none;
      }
      p{
        font-size:28/rem;
        color:rga(7,17,27);
      }
      .list-right{
        display: flex;
      }
    }
    .shopcart-list-price{
      font-size:28/@rem;
      font-weight:700;
      color:rgb(240,20,20);
      margin:0 24/@rem 0 36/@rem;
      span{
        font-size:20/@rem;
        font-weight:normal;
      }
    }
  }
















</style>
