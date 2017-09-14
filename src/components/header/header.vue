
<template>
  <header class="head" id="head" v-if="res">
    <div class="head-top">
      <div class="assets">
        <img :src='res["avatar"]' alt="">
      </div>
      <div class="connect">
        <div class="connect-top">
          <div class="brand"></div>
          <div class="brand-right">{{res.name}}</div>
        </div>
        <div class="connect-mid">
          {{res.description}}/{{res.deliveryTime}}分钟送达
        </div>
        <div class="connect-foot">
          <div class="brand-jian"></div>
          <div class="barnd-jian-right">
            {{res.supports[0].description}}
          </div>
        </div>
      </div>
      <div class="num" @click="flag=!flag">
        <p>5个</p>
        <span>></span>
      </div>
    </div>
    <div class="head-footer">
      <div class="head-foot-brand"></div>
      <div class="head-foot-tit">{{res.bulletin}}</div>
      <a href="javascript:;" @click="flag=!flag"> > </a>
    </div>
    <div class="head-mark">
      <img :src='res["avatar"]' alt="">
    </div>
    <div class="goods-describe" v-show="flag">
      <div class="scroll">
        <div class="goods-title">{{res.name}}</div>
        <div class="star-waper">
          <v-star :starSize="48" :straNum="res.score"></v-star>
        </div>
        <div class="goods-info-title">
          <div class="goods-border"></div>
          <h3>优惠信息</h3>
          <div class="goods-border"></div>
        </div>
        <ul class="info">
          <li class="iteam" v-for="(v,i) in res.supports">
            <span :class="createName[res.supports[i].type]"></span>
            <p>{{res.supports[i].description}}</p>
          </li>
        </ul>
        <div class="goods-info-title">
          <div class="goods-border"></div>
          <h3>商家公告</h3>
          <div class="goods-border"></div>
        </div>
        <div class="goods-connect-info">
          <p>{{res.bulletin}}</p>
        </div>
      </div>
      <div class="close">
        <span @click="flag=!flag">×</span>
      </div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  import Stars from "../star/Star.vue"
  import Vue from 'vue'
  import resourse from "vue-resource"
  Vue.use(resourse)
  export default{
    name:"head",
    data(){
        return {
          flag:false,
        }
    },
    props:["res"],
    components:{
      "v-star":Stars
    },
    computed:{
      createName(){
          return ["oneImg","twoImg","threeImg","fourImg","fiveImg"]
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .head{
    background:rgba(7,17,27,0.5);
    position: relative;
  }

  .head-mark{
    position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:-1;
    filter:blur(10px);
    img{
      display: inline-block;
      width:100%;
      height:100%;
    }
  }

  .head-top{
    width:100%;
    height:auto;
    padding:48/@rem 24/@rem 0 48/@rem;
    display: flex;
    position: relative;
  }
  .assets img{
    width:128/@rem;
    height:128/@rem;
  }
  .connect{
    padding-left:32/@rem;
  }
  .brand{
  width:60/@rem;
  height:36/@rem;
  background:url("img/brand@2x.png");
  background-size:60/@rem 36/@rem;
  margin:4/@rem 12/@rem 16/@rem 0;
}
  .connect-top{
    display: flex;
  }
  .brand-right{
    font-size:32/@rem;

    color:#fff;
    font-weight:bold;
    line-height:36/@rem;
  }
  .connect-mid{
    font-size:24/@rem;
    color:#fff;
    font-weight:200;
    line-height:24/@rem;
  }
  .connect-foot{
    display: flex;
    margin-top:20/@rem;
  }
  .num{
    position: absolute;
    width:86/@rem;
    height:48/@rem;
    background:rgba(0,0,0,.2);
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:20/@rem;
    right:24/@rem;
    bottom:0;
    p{
      font-size:20/@rem;
      color:#fff;
      padding-right:6/@rem;
    }
    span{
      font-size:11/@rem;
      display: inline-block;
      color:#fff;
    }
  }
  .brand-jian{
    width:24/@rem;
    height:24/@rem;
    background: url(img/decrease_1@2x.png);
    background-size:24/@rem;
  }
  .barnd-jian-right{
    margin-left:8/@rem;
    font-size:20/@rem;
    color:#fff;
    font-weight:200;
    line-height:24/@rem;
  }
  .head-footer{
    width:100%;
    height:56/@rem;
    box-sizing: border-box;
    padding:0 24/@rem;
    margin-top:36/@rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:rgba(0,0,0,.2);
    a{
      color:#fff;
      font-size:11/@rem;
    }
  }
  .head-foot-brand{
    width:44/@rem;
    height:24/@rem;
    background: #fff;
    background-image:url(img/bulletin@2x.png);
    background-size:44/@rem 24/@rem;
    display: inline-block;
  }
  .head-foot-tit{
    padding:0 8/@rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    flex:1;
    font-size:20/@rem;
    color:#fff;
    font-weight:200;

  }


  .goods-describe{
    position: fixed;
    width:100%;
    height:100%;
    background:rgba(7,17,27,0.8);
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    z-index: 99999999;

  }
  .scroll{
    flex:1;
    overflow-y:scroll;
  }
  .goods-title{
    margin-top:128/@rem;
    font-size:32/@rem;
    font-weight:700;
    color:#fff;
    line-height:32/@rem;
    text-align: center;
  }
  .star-waper{
    width:100%;
    display:flex;
    justify-content: center;
    margin-top:32/@rem;
  }
  .goods-info-title{
    width:100%;
    display: flex;
    align-items: center;
    padding:0 72/@rem;
    justify-content:space-between;
    margin:56/@rem 0 48/@rem 0;
    h3{
      font-size:28/@rem;
      color:#fff;
    }
  }
  .goods-border{
    width:224/@rem;
    height:1px;
    background:rgba(255,255,255,.2);
  }
  .info{
    width:100%;
    height:auto;
    padding:0 96/@rem;
    li{
      display: flex;
      margin-bottom:24/@rem;
      align-items: center;
      &:last-child{
        margin-bottom:0;
      }
      p{
        font-size:24/@rem;
        color:#fff;
        line-height:24/@rem;
        padding-left:12/@rem;
      }
      .oneImg{
        width:32/@rem;
        height:32/@rem;
        background:url(img/decrease_2@2x.png);
        background-size:32/@rem 32/@rem;
      }
      span{
        width:32/@rem;
        height:32/@rem;
        display: inline-block;
      }
      .twoImg{
        background:url(img/discount_2@2x.png);
        background-size:32/@rem 32/@rem;
      }
      .oneImg{
        background:url(img/decrease_2@2x.png);
        background-size:32/@rem 32/@rem;
      }
      .threeImg{
        background:url(img/decrease_2@2x.png);
        background-size:32/@rem 32/@rem;
      }
      .fourImg{
        background:url(img/special_2@2x.png);
        background-size:32/@rem 32/@rem;
      }
      .fiveImg{
        background:url(img/special_2@2x.png);
        background-size:32/@rem 32/@rem;
      }
    }
  }
  .goods-connect-info{
    width:100%;
    height:auto;
    padding:0 96/@rem;
    font-size:24/@rem;
    color:#fff;
    line-height:48/@rem;
  }
  .close{
    margin-bottom: 64/@rem;
    width:100%;
    text-align: center;
    span{
      font-size:64/@rem;
      color:rgba(255,255,255,.5);
    }
  }
</style>


















