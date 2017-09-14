<template>
  <div class="appraise-wrapper" v-if="appraise" ref="area">
    <div>
      <div class="general-appraise">
        <div class="general-left">
          <h3 class="general-num">{{appraise.foodScore}}</h3>
          <p class="general">综合评分</p>
          <span class="general-bottom">高于周边商家{{appraise.rankRate}}%</span>
        </div>
        <div class="general-right">
          <div class="serverTD">
            <h3>服务态度</h3>
            <v-star :starSize="36" :straNum="appraise.score"></v-star>
            <p>{{appraise.score}}</p>
          </div>
          <div class="serverTD">
            <h3>服务态度</h3>
            <v-star :starSize="36" :straNum="appraise.serviceScore"></v-star>
            <p>{{appraise.serviceScore}}</p>
          </div>
          <div class="giveTime">
            <h3>送达时间</h3>
            <time>{{appraise.deliveryTime}}分钟</time>
          </div>
        </div>
      </div>
      <div class="du"></div>
      <!--满意度-->
      <div class="myd-wrapper">
        <div class="myd-top">
          <div class="myd myd1">全部<span>{{appraise.ratingCount}}</span></div>
          <div class="myd myd2">满意<span>23</span></div>
          <div class="myd myd3">不满意<span>1</span></div>
        </div>
        <div class="myd-bottom">
          <span>√</span>
          <h3>只看有内容的评价</h3>
        </div>
      </div>
      <!--评论区-->
      <div class="appraise-area-container">
        <div class="appraise-area-wrapper">
          <dl class="alone-area"v-for="(v,i) in ratings">
            <dt>
              <img :src="v.avatar" alt="">
            </dt>
            <dd class="content-area">
              <div class="content-top">
                <div class="username">{{v.username}}</div>
                <div class="rateTime" ref="a">{{v.rateTime | chinaData}}</div>
              </div>
              <div class="server-score">
                <v-star :starSize="24" :straNum="v.score"></v-star>
                <span v-if="v.deliveryTime">{{v.deliveryTime}}分钟送达</span>
              </div>
              <div class="content-text">
                <p v-if="v.text">{{v.text}}</p>
                <p v-else>用户什么也没有留下</p>
              </div>
              <div class="area-foot">
                <div class="thumb">
                  <span class="icon-thumb_up up" v-if="!v.rateType"></span>
                  <span class="icon-thumb_down down" v-if="v.rateType"></span>
                  <ul class="recommend" v-if="v.recommend">
                    <li v-for="(val,key) in v.recommend">{{val}}</li>
                  </ul>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Stars from "../star/Star.vue"
  import Vue from 'vue'
  import resourse from "vue-resource"
  import BScroll from 'better-scroll';

  export default{
    data(){
        return {
          appraise:null,
          ratings:null
        }
    },
    components:{
      "v-star":Stars
    },
    props:["goodData"],
    methods:{
      _appraiseScroll(){
        new BScroll(this.$refs.area,{
            click:true
        })

      },
      //过滤器
      _date(){
        Vue.filter('chinaData',function(res){
            let date=new Date(res)
            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        })
      }
    },
    mounted(){
      //过滤器
      this.appraise=this.goodData.seller
      this.ratings=this.goodData.ratings
      this._date()
      this.$nextTick(() => {
        this._appraiseScroll()

      });
    },
  }
</script>
<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .scroll{
    width:100%;
    height:auto;
  }
  .appraise-wrapper{
    width:100%;
    height:auto;
    overflow: hidden;
    flex:1;
  }
  .general-appraise{
    width:100%;
    height:auto;
    padding:36/@rem 0;
    border-bottom:1px solid #e6e7e8;
    display:flex;
    height:215/@rem;
  }
  .general-left{
    width:275/@rem;
    height:auto;
    background:#fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right:1px solid #e6e7e8;
  }
  .general-num{
    font-size:48/@rem;
    color:rgb(255,153,0);
    line-height:56/@rem;
    margin-bottom:12/@rem;
  }
  .general{
    font-size:24/@rem;
    color:#07111b;
    margin-bottom:16/@rem;
    font-weight: 600;
  }
  .general-bottom{
    font-size:20/@rem;
    color:#93999f;
    margin-bottom:12/@rem;
    font-weight: 700;
  }
  .general-right{
    flex:1;
    padding:0 48/@rem;
    padding-top:7/@rem;
    h3{
      font-size:24/@rem;
      color:#6e7174;
      line-height:36/@rem;
      padding-right:20/@rem;
    }
  }
  .serverTD{
    display: flex;
    margin-bottom:16/@rem;
    p{
      padding-left:20/@rem;
      font-size:28/@rem;
      color:#ffb058;
      line-height:36/@rem;
    }
  }
  .giveTime{
    display: flex;
    time{
      font-size:24/@rem;
      line-height:36/@rem;
      color:#b4b8bb;
      font-weight: 600;
    }
  }
  .du{
    width:100%;
    height:32/@rem;
    background:#f3f5f7;
    border-bottom:1px solid #e6e7e8;
  }
  .myd-wrapper{
    width:100%;
    height:234/@rem;
    background:#fff;
    padding:0 36/@rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e6e7e8;
  }
  .myd-top{
    width:100%;
    padding:36/@rem 0;
    border-bottom:1px solid #eee;
    display: flex;
    box-sizing: content-box;
  }
  .myd{
    height:64/@rem;
    font-size:24/@rem;
    font-weight: 600;
    padding:0 24/@rem;
    margin-right:16/@rem;
    line-height:64/@rem;
    border-radius: 2px;
    span{
      margin-left:8/@rem;
    }
  }
  .myd1{
    color:#fff;
    background:#00a0dc;
  }
  .myd2{
    color:#4d555d;
    background:#ccecf8;
  }
  .myd3{
    color:#4d555d;
    background:#e9ebec;
  }
  .myd-bottom{
    width:100%;
    flex:1;
    display: flex;
    align-items: center;
    span{
      display: inline-block;
      width:40/@rem;
      height:40/@rem;
      border-radius:50%;
      text-align: center;
      line-height:40/@rem;
      color:#fff;
      background:#b7bbbf;
      margin-right:20/@rem;
    }
    h3{
      color:#a4a9ae;
      font-size:24/@rem;
    }
  }
  .appraise-area-container{
    width:100%;
    height:100%;
    background:#fff;

  }
  .appraise-area-wrapper{
    width:100%;
    height:auto;
    padding:0 36/@rem;

  }
  .alone-area{
    width:100%;
    padding:36/@rem 0;
    border-bottom:1px solid #e6e7e8;
    display: flex;
    dt{
      width:58/@rem;
      height:58/@rem;
      img{
        width:100%;
        height:100%;
        border-radius:50%;
      }
    }
  }
  .content-area{
    flex:1;
    padding-left:24/@rem;
  }
  .content-top{
    width:100%;
    height:auto;
    display: flex;
    justify-content: space-between;
    margin-bottom:8/@rem;
  }
  .username{
    font-size:20/@rem;
    color:#464a4f;
    line-height:24/@rem;
  }
  .rateTime{
    font-size:20/@rem;
    font-weight:200;
    color:rgb(147,153,159);
    line-height:24/@rem;
  }
  .server-score{
    width:100%;
    height:auto;
    margin-bottom:12/@rem;
    .star{
      margin-right:12/@rem;
      font-size:20/@rem;
      color:rgb(147,153,159);
      line-height:24/@rem;
    }
    span{
      display: inline-block;
    }
  }
  .content-text{
    width:100%;
    height:auto;
    margin-bottom:16/@rem;
    p{
      font-size:24/@rem;
      line-height:36/@rem;
      color:#07111b;
    }
  }
  .thumb{
    width:100%;
    display: flex;
    span{
      display: inline-block;
      font-size:22/@rem;
    }
  }
  .icon-thumb_up{
    color:#00a0dc;
  }
  .icon-thumb_down{
    color:#b7bbbf;
  }
  .recommend{
    flex:1;
    background:#fff;
    display: flex;
    flex-wrap:wrap;
    li{
      width:126/@rem;
      margin-bottom:8/@rem;
      padding:0 12/@rem;
      border:1px solid #e6e7e8;
      font-size:18/@rem;
      color:#93999f;
      line-height:32/@rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-left:12/@rem;
      text-align: center;
    }
  }
</style>
