<template>
  <div class="tab" id="tab" v-if="data">
    <div class="router">
      <router-link to="/goods" class="goodsStyle" exact>商品</router-link>
      <router-link to="/appraise" class="appraiseStyle" exact>评价</router-link>
      <router-link to="/merchant" class="merchantStyle" >商家</router-link>
      <!--<router-link to="/a ">1</router-link>-->
    </div>
    <router-view :goodData="data"></router-view>
  </div>



</template>

<script type="text/ecmascript-6">
  //引用路由
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  //加载路由
  Vue.use(VueRouter)
  //引入路由模板
  import GoodsRouter from "../goods/goods"
  import appraiseRouter from "../appraise/appraise"
  import merchantRouter from "../merchant/merchant"
  var a={
      template:"<div>1</div>"
  }
  //配置组建
  const routes=[
    {path:"/goods", component:GoodsRouter},
    {path:"/appraise", component:appraiseRouter},
    {path:"/merchant", component:merchantRouter},
//    {path:"/a", component:a},
    {path:"/",redirect:"/goods"}
  ]
  //实例组建
  const router =new VueRouter({
    routes  // （缩写）相当于 routes: routes
  })
  //挂在组建
  export default{
    name:"tab",
    router:router,
    props:["datas"],
    data(){
        return {
            data:null
        }
    },
    mounted(){
      this.data=this.datas
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .tab{
    flex:1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .router{
    width:100%;
    height:80/@rem;
    background:#fff;
    display:flex;
    border-bottom:1px solid #e5e5e5;
    a{
      flex:1;
      height:100%;
      text-align:center;
      line-height:80/@rem;
      display: inline-block;
      font-size:28/@rem;
      color:rgb(77,85,93);
    }
  }
  .router-link-active{
    color:rgb(240,20,20)!important;
  }
</style>
