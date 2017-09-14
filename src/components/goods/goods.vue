<template>
  <div class="body">
    <div class="menu" ref="menus">
      <ul class="goods-aside">
        <li v-for="(v,i) in goodsData" class="list" :class="{'aside-active':num==i}" @click="_curRight(i)">
          <span v-if="goodsData.type" :class="" ></span><p>{{v.name}}
        </p></li>
       </ul>
    </div>
    <div class="body-info" ref="foods">
     <div class="scroll-foods">
       <div class="info-wrapper" v-for="(v,i) in goodsData">
         <h3 class="lig-tit">{{v.name}}</h3>
         <dl class="body-right" v-for="(subv,k) in v.foods" @click="send(subv)">
           <dt class="goods-Img" >
             <img :src="subv.image" alt="">
           </dt>
           <dd class="goods-content">
             <h4>{{subv.name}}</h4>
             <p class="description" v-if="subv.description">{{subv.description}}</p>
             <div class="sales">
               <p class="sellCount">月售{{subv.sellCount}}份</p>
               <p class="rating">好评率{{subv.rating}}%</p>
             </div>
             <div class="price">
              <span class="prices"><i>¥</i>{{subv.price}}
              </span><span class="old" v-if="subv.oldPrice"><i>¥</i>{{subv.oldPrice}}</span>
             </div>
             <div class="cartControll-wrap">
               <v-cartControll :food="subv"></v-cartControll>
             </div>
           </dd>
         </dl>
       </div>
     </div>
    </div>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <v-detailPage :bool="flag" v-show="flag"></v-detailPage>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import IScroll from "iscroll"
  import BScroll from 'better-scroll';
  import resourse from "vue-resource";
  import cartControll from "../cartControll/cartControll";
  import detailPage from "../detailPage/detailPage";
  import { bus } from '../../../libs/bus.js'
  Vue.use(resourse)
  export default{
    data(){
      return {
        titleArr:[],
        goodsData:null,
        foodScroll:null,
        num:0,
        flag:true
      }
    },
    components:{
      "v-cartControll":cartControll,
      "v-detailPage":detailPage
    },
    props:["goodData"],
    methods:{
      send(data){
        this.flag=true;
        bus.$emit("detailPage",data,this.flag)
      },
      _scorll(){
        //侧边栏
        this.foodScroll=new BScroll(this.$refs.foods, {
          click: true,
          probeType: 3
        });
        //商品列表
        this.meunScroll = new BScroll(this.$refs.menus, {
          click: true,

        });
        //主题滚动侧边栏样式
        this.foodScroll.on('scroll', (pos) => {
          let scrollY = Math.abs(Math.round(pos.y));
          for(var i=0; i<this.titleArr.length;i++){
            if(scrollY>=this.titleArr[i]){
              this.num=i
            }
          }
        })
        //点击侧边栏
      },
      _curScroll(){
        this.els=document.querySelectorAll(".lig-tit")
        for(var i=0;i<this.els.length;i++){
          this.titleArr.push(this.els[i].offsetTop)
        }

      },
      _curRight(ind){
        this.foodScroll.scrollTo(0,-this.titleArr[ind],1000,"linear")
        setTimeout(function(){
          this.num=ind
        },0)
      }
    },
    mounted(){
      //小样式
      this.goodsData=this.goodData.goods
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$nextTick(() => {
        this._scorll();
        this._curScroll();
      });
      bus.$on("flag",msg=>{
        console.log(msg)
        this.flag=msg
      })

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .body{
    width:100%;
    height:100%;
    display: flex;
    flex:1;

  }
  .body-info{
    flex:1;
    overflow:hidden;
    position: relative;
  }
  .scroll-foods{
    width:100%;
    height:auto;
  }
  .menu{
    width:160/@rem;
    height:100%;
    overflow: hidden;
    position: relative;
  }
  .goods-aside{
    width:100%;
    height:auto;
    background:#f3f5f7;
    li{
      padding:0 24/@rem;
      width:100%;
      height:108/@rem;

      display: flex;
      align-items: center;
      p{
        width:100%;
        display: flex;
        align-items: center;
        font-size:20/@rem;
        color:#696c70;
        line-height:30/@rem;
        text-align: left;
        height:108/@rem;
        border-bottom:1px solid #dbdee1;
      }
    }
  }
  .aside-active{
    width:100%;
    font-size:24/@rem;
    color:#464a4f;
    line-height:28/@rem;
    background:#fff;
    p{

      border-bottom: none!important;
    }
    /*span{*/
      /*&.decrease{*/
        /*bg-image('decrease_3')*/
      /*}*/
      /*&.discount*/
      /*bg-image('discount_3')*/
      /*&.guarantee*/
      /*bg-image('guarantee_3')*/
      /*&.invoice*/
      /*bg-image('invoice_3')*/
      /*&.special*/
      /*bg-image('special_3')*/
      /*}*/
  }
  .info-wrapper{
    width:100%;
    height:auto;

  }
  .lig-tit{
    background:#f3f5f7;
    font-size:24/@rem;
    color:rgb(147,153,159);
    line-height:52/@rem;
    padding-left:28/@rem;
    border-left:1px solid #d9dde1;
  }
  .body-right{
    width:100%;
    padding:36/@rem;
    background:#fff;
    display: flex;
    position: relative;
    border-bottom: 1px solid rgba(7,17,27,.1);
  }
  .goods-Img{
    width:114/@rem;
    height:114/@rem;
    img{
      width:100%;
      height:100%;
      border-radius: 2px;
    }
  }
  .goods-content{
    padding-left:20/@rem;
    flex:1;
    position: relative;
    h4{
      margin:4/@rem 0 10/@rem 0;
      font-size:28/@rem;
      color:rgb(7,17,27);

    }
  }
  .cartControll-wrap{
    position: absolute;
    right:0;
    bottom:0;
  }
  .description{
    font-size: 20/@rem;
    color:rgb(147,153,159);

    display: inline-block;
    margin-bottom:10/@rem;
  }
  .sales{
    width:100%;
    margin-bottom:16/@rem;
    p{
      font-size: 20/@rem!important;
      color:rgb(147,153,159);
      display: inline-block;
    }
  }
  .old{
    text-decoration: line-through;
    color:rgb(147,153,159);
  }
  .prices{
    font-size:28/@rem;
    color:#f01414;
    font-weight:700;
    display: inline-block;
    i{
      font-size:20/@rem;
      font-style: normal;
      font-weight:normal;
    }
  }
</style>
