<template>
  <div id="app" class="app" v-if="sells">
    <v-head :res="sells"></v-head>
    <v-tab :datas="datas"></v-tab>
    <v-shopcart :res="sells"></v-shopcart>
  </div>
</template>

<script>

  import d from "../data.json"
  import Head from "./components/header/header"
  import Tab from "./components/tab/tab"
  import Shopcart from "./components/shopcart/Shopcart"
  export default {
    name: 'app',
    data(){
        return {
          goodsData:null,
          sells:null,
          ratings:null,
          datas:null
        }
    },
    components:{
      "v-head":Head,
      "v-tab":Tab,
      "v-shopcart":Shopcart
    },
    mounted(){
      this.$http.get('/static/data.json').then( obj=>{
        this.goodsData=obj.body.goods;
        this.sells=obj.body.seller;
        this.ratings=obj.body.ratings;
        this.datas=obj.body
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .app{
    width:100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    overflow:hidden;
  }

</style>
