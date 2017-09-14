<template>
  <div id="star" :class="starType">
    <span v-for="(starClass,i) in items" :class="starClass" class="star-items"></span>
  </div>
</template>
<script type="text/ecmascript-6">
  const step=5;
  const cls_on="on";
  const cls_off="off";
  const cls_half="half";
  export default{
    name: "star",
    props:{
      starSize:{
        type:Number
      },
      straNum:{
        type:Number
      }
    },
    computed:{
      starType(){
        console.log()
          return "stra-"+this.starSize

      },
      items(){
        let resArr=[];
        let yellowStar=Math.floor(this.straNum*2)/2
        let flags=yellowStar%1 !== 0;

        for(var i=0;i<Math.floor(yellowStar);i++){
          resArr.push("on")
        }
        if(flags){
          resArr.push("half")
        }
        while(resArr.length!=5){
          resArr.push("off")
        }
        return resArr
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @rem:46.875rem;
  .stra-48 {
    display: inline-block;
    height:auto!important;
    .star-items{
      display: inline-block;
      width: 40/@rem;
      height: 38/@rem;
      margin-right: 44/@rem;
      &:last-child{
        margin-right:0!important;
      }
    }
    .on{
      background:url(img/star48_on@2x.png);
      background-size: 40/@rem 38/@rem;
    }
    .off{
      background:url(img/star48_off@2x.png);
      background-size: 40/@rem 38/@rem;
    }
    .half{
      background:url(img/star48_half@2x.png);
      background-size: 40/@rem 38/@rem;
    }
  }


  .stra-36{
    display: inline-block;
    height:auto!important;
    .star-items{
      display: inline-block;
      width: 30/@rem;
      height: 29/@rem;
      margin-right: 12/@rem;
      &:last-child{
        margin-right:0!important;
      }
    }
    .on{
      background:url(img/star36_on@2x.png);
      background-size: 30/@rem 29/@rem;
    }
    .off{
      background:url(img/star36_off@2x.png);
      background-size: 30/@rem 29/@rem;
    }
    .half{
      background:url(img/star36_half@2x.png);
      background-size: 30/@rem 29/@rem;
    }
  }
  .stra-24{
    display: inline-block;
    height:auto!important;
    .star-items{
      display: inline-block;
      width: 20/@rem;
      height: 19/@rem;
      margin-right: 6/@rem;
      &:last-child{
        margin-right:0!important;
      }
    }
    .on{
      background:url(img/star24_on@2x.png);
      background-size: 20/@rem 19/@rem;
    }
    .off{
      background:url(img/star24_off@2x.png);
      background-size: 20/@rem 19/@rem;
    }
    .half{
      background:url(img/star24_half@2x.png);
      background-size: 20/@rem 19/@rem;
    }
  }

</style>
