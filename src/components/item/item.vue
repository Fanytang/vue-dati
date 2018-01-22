<template>
  <div class="item">
      <header class="top_tips"><span class="num_tip">题目{{itemNum}}</span></header>
      <div class="timeCost">答题时间：<span>{{totalTime}}</span>s</div>
      <div class="item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">	
          <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
        	<ul>
        		<li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index,item.topic_answer_id)" class="item_list" >
          		<span  :class="{'hasChoosed':choosedNum==index}">{{options(index)}}</span>
          		<span>{{item.answer_name}}</span>
        		</li>
          </ul>
        </div>
      </div>
   <div class="next_item" @click="nextQuestion" v-if="itemNum<itemDetail.length">下一题</div>
   <div class="submit_item" v-else @click="submitAnswer">提交答案</div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
    	choosedNum:null,
    	choosedId:null,
    }
  },
  computed:mapState([
  	'itemNum',
  	'itemDetail',
  	'topic_answer',
  	'topic_name',
  	'answerid',
  	'totalTime',
  	'timer',
  ]),
  methods:{
  	...mapActions ([
  	'addNum','initializeData','startTimer',
  ]),
  	// 记录所选答案id
  	choosed(type,id){
  		this.choosedNum=type;
  		this.choosedId=id;
  	},
  	// 输出选项 ABCD
  	options:type=>{
		switch(type){
	  		case 0:return 'A';
	  		case 1:return 'B';
	  		case 2:return 'C';
	  		case 3:return 'D';
  		}
  	},
  	//点击下一题
  	nextQuestion(){
  		if (this.choosedNum!==null) {
  			this.choosedNum=null;
  			this.addNum(this.choosedId);
  		}
  		else {alert("你还没选哦！")}
  	},
  	//点击提交答案
  	submitAnswer(){
  		if (this.choosedNum!==null) {
  			this.choosedNum=null;
  			this.addNum(this.choosedId);
  			this.$router.push('score');
  			clearInterval(this.timer);
  		}
  		else{alert("您还没选哦！")}
  	},
  },
  created(){
		//初始化信息，防止通过导航栏访问出错
		this.initializeData();
		this.startTimer();
	}
}
</script>

<style scoped>
.item{
  background: url('../../assets/xiaoxin03.jpg') no-repeat;
  background-size: 100% 6.67rem ;
  height: 6.67rem;
  width: 100%;
}
/*答案选项*/
.item_list{
  font-size: 0.15rem;
  margin-top: 0.08rem;
}
.hasChoosed{
  color: red;
}
/*第几题*/
.item_title{
  font-size: .16rem;
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
  /*用时*/
.timeCost{
    position: absolute;
    width: 2rem;
    height: 0.5rem;
    font-size: 0.18rem;
    line-height: 0.5rem;
    top: 0.14rem;
    left: 0.1rem;
    font-weight: 800;
}
.item_container_style{
  height: 2.72rem;
  width: 3.08rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 0.96rem;
  left: 0.23rem;
} 
.item_list_container{
    position: absolute;
    height: 1.64rem;
    width: 1.87rem;
    top: 0.4rem;
    left: 0.2rem;
  -webkit-font-smoothing: antialiased;
}
/*点击下一题*/
.next_item{
      font-size: .16rem;
      display: block;
      height: 0.35rem;
      width: 0.8rem;
      line-height: 0.35rem;
      border-radius: 0.1rem;
      color: white;
      background-color: #18161C;
      background-size: 100% 100%;
      position: absolute;
      top: 3.1rem;
      left: 11%;
      background-repeat: no-repeat;
      text-align: center;
}
/*提交答案*/
.submit_item{
      font-size: .16rem;
      display: block;
      height: 0.35rem;
      width: 0.8rem;
      line-height: 0.35rem;
      border-radius: 0.1rem;
      color: white;
      background-color: #18161C;
      background-size: 100% 100%;
      position: absolute;
      top: 3.1rem;
      left: 11%;
      background-repeat: no-repeat;
      text-align: center;
}
</style>
