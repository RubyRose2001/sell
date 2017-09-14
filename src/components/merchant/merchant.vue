<template>
  <div class="merchant-container" v-if="merchant">
    <div class="merchant-wrapper">
      <div class="merchant-top">
        <div class="merchant-info">
          <div class="info-left">
            <h3>{{merchant.name}}</h3>
            <div class="maerchant-star">
              <div class="star-warp">
                <v-star :starSize="36" :straNum="merchant.score"></v-star>
              </div>
              <span class="Ino">(66)</span><span>月售{{merchant.sellCount}}单</span>
            </div>
          </div>
          <div class="info-right">
            <span class="icon-favorite xin"></span>
            <small>已收藏</small>
          </div>
        </div>
        <div class="timePrice">
          <ul class="timePrice-wrap">
            <li>
              <span>起送价</span>
              <p>{{merchant.minPrice}}<small>元</small> <p/>
            </li>
            <li>
              <span>商家配送</span>
              <p>{{merchant.deliveryPrice}}<small>元</small> <p/>
            </li>
            <li>
              <span>平均配送时间</span>
              <p>{{merchant.deliveryTime}}<small>分钟</small> <p/>
            </li>
          </ul>
        </div>
      </div>
      <div class="du"></div>
      <div class="notice-wrap">
        <div class="notice">
          <h3>公告与活动</h3>
          <p>{{merchant.bulletin}}</p>
        </div>
        <div class="activity">
          <ul class="activity-info">
            <li class="iteam" v-for="(v,i) in merchant.supports">
              <span :class="createName[merchant.supports[i].type]"></span>
              <p>{{merchant.supports[i].description}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="du"></div>
      <div class="merchant-banner">
        <h3>商家实景</h3>
        <div class="scroll-img">
          <ul  class="merchant-banner-img">
            <li v-for="(v,i) in merchant.pics">
              <img :src="v" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="business-info">
        <h3>商家信息</h3>
        <ul class="business-list">
          <li v-for="(v,i) in merchant.infos">{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Start from "../star/Star"
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        merchant:null
      }
    },
    components:{
      "v-star":Start
    },
    props:["goodData"],
    mounted(){
      this.merchant=this.goodData.seller
      this.$nextTick(() => {
        new BScroll(".merchant-container",{
            click:true
        })
        new BScroll(".scroll-img",{
          scrollX:true,
          click:true
        })
      });
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
  .merchant-container{
    width:100%;
    flex:1;
    overflow: hidden;
  }
  .merchant-wrapper{
    width:100%;
    height:auto;
  }
  .merchant-top{
    padding:0 36/@rem;
  }
  .merchant-info{
    width:100%;
    height:auto;
    display: flex;
    padding:36/@rem 0;
    border-bottom:1px solid #e6e7e8;
  }
  .info-left{
    flex:1;
    h3{
      font-size:28/@rem;
      color:rgb(7,17,27);
      margin-bottom:16/@rem;
    }
  }
  .maerchant-star{
    width:100%;
    display: flex;
    span{
      font-size:20/@rem;
      color:#4d555d;
      &.Ino{
        margin:0 24/@rem 0 16/@rem;
      }
    }
  }
  .info-right{
    display: flex;
    flex-direction: column;
    align-items: center;
    small{
      font-size:20/@rem;
    }
  }
  .xin{
    font-size:48/@rem;
    color:#f01414;
  }
  .timePrice{
    width:100%;
    height:auto;
  }
  .timePrice-wrap{
    width:100%;
    padding:36/@rem 0;
    display: flex;
    li{
      flex:1;
      border-right:1px solid #e6e7e8;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &:last-child{
        border-right:none;
      }
      span{
        display: inline-block;
        font-size: 20/@rem;
        color:#93999f;
        margin-bottom:8/@rem;
      }
      p{
        font-size:48/@rem;
        color:rgb(7,17,27);
        small{
          font-size:20/@rem;
        }
      }
    }
  }
  .du{
    width:100%;
    height:36/@rem;
    background:#f3f5f7;
    border-bottom:1px solid #e6e7e8;
    border-top:1px solid #e6e7e8;

  }
  .notice-wrap{
    width:100%;
    height:auto;
    padding:36/@rem 36/@rem 0 36/@rem;
  }
  .notice{
    width:100%;
    height:auto;
    h3{
      font-size:28/@rem;
      margin-bottom:12/@rem;
    }
    p{
      padding:0 24/@rem;
      font-size:24/@rem;
      color:#f13434;
      line-height:48/@rem;
    }
  }
  .activity{
    width:100%;
    margin-top:32/@rem;
  }
  .activity-info{
    width:100%;
    height:auto;
    li{
      display: flex;
      padding:32/@rem 24/@rem;
      align-items: center;
      border-top:1px solid #e6e7e8;
      p{
        font-size:24/@rem;
        color:#07111b;
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
  .scroll-img{
    width:100%;
    overflow: hidden;
  }
  .merchant-banner{
    width:100%;
    height:auto;
    overflow: hidden;
    padding:36/@rem;
    h3{
      font-size:28/@rem;
      margin-bottom:24/@rem;
    }
  }
  .merchant-banner-img{
    display: flex;
    width: 240/@rem*4+12/@rem*3;
    li{
      flex-shrink: 0;
      width:240/@rem;
      height:180/@rem;
      margin-right:12/@rem;
      &:last-child{
        margin-right:0;
      }
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .business-info{
    width:100%;
    height:auto;
    padding:36/@rem 36/@rem 0 36/@rem;
    h3{
      font-size:28/@rem;
      margin-bottom:24/@rem;
    }
  }
  .business-list{
    width:100%;
    height:auto;
    li{
      border-top:1px solid #e6e7e8;
      padding:32/@rem 24/@rem;
      font-size:24/@rem;
      color:rgb(7,17,27);
    }
  }

</style>
