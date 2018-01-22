<template>
  <div class="home">
      <header class="top_tips"><span class="num_tip">{{level}}</span></header>
      <!-- <hr/> -->
      <router-link to="item" class="button_style">开始答题</router-link>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed:mapState([
  	'level','timer'
  	]),
  created(){
    //清除定时
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.home{
  height: 6.67rem;
  background: url('../../assets/xiaoxin12.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
}
.button_style{
        display: block;
        height: 0.35rem;
        width: 0.8rem;
        line-height: 0.35rem;
        border-radius: 0.1rem;
        color: white;
        background-color: #18161C;
        background-size: 100% 100%;
        position: absolute;
        top: 1.65rem;
        left: 16%;
        /*margin-left: -2.4rem;*/
        background-repeat: no-repeat;
        text-align: center;
        font-size: 0.16rem;
  }
  .top_tips{
    position: absolute;
    height: 1.74rem;
    width: 0.78rem;
    top: -0.4rem;
    right: 0.25rem;
    background: url(../../assets/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 10;
  }
  .top_tips .num_tip{
      position: absolute;
      left: 0.12rem;
      bottom: 0.25rem;
      height: 0.16rem;
      width: 0.58rem;
      font-size: 0.14rem;
      font-family: '黑体';
      font-weight: 600;
      color: rgba(0,0,0,.5);
      text-align: center;
    }
</style>
