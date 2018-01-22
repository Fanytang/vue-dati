<template>
	<div class="score">
    <div class="your_scores_container">
		   <header >
        <span class="yourchengji">您的成绩</span>
				<div class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分！</span></div>
        <div class="timeCost">答题时间：<span>{{totalTime}}</span>s</div>
		   </header>
		   <div class="result_comment">{{comment}}</div>
		</div>
		<div class="clickShare" @click="showCover">点击分享</div>
		<br/>
		<span class="gohome" @click="goHome()">返回首页</span>
		<div class="isShow" v-show="showOrhidden" @click="showCover"><span class="thxShare">感谢分享！</span></div>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
    	score:0,
    	showOrhidden:false,
		rightAnswer:[2,7,12,13,18],
		comment:'',
		commentArr:["真是个答题鬼才！","你可真是个睿智！","你可真是个小机灵鬼！","这也太秀了吧！","真是个答题天才，捡到宝了！"]
    }
  },
  computed:mapState(['answerid','totalTime']),
  created(){
  	// 评分
  	this.scoring();
  	// 评论
  	this.scoreComment();
  },
  methods:{
  	...mapActions([
  		'initializeData'
  		]),
  	goHome(){
  	this.$router.push('home');
  },
  scoring(){
  		this.answerid.forEach((item,index)=>{
  			if (item==this.rightAnswer[index]) {
  				this.score+=20;
  			}
  		})
  },
  scoreComment(){
  		if (this.score<=20) {
  			this.comment=this.commentArr[0];
  			return;
  		}if (this.score<=40) {
  			this.comment=this.commentArr[1];
  			return;
  		}if (this.score<=60) {
  			this.comment=this.commentArr[2];
  			return;
  		}if (this.score<=80) {
  			this.comment=this.commentArr[3];
  			return;
  		}if (this.score<=100) {
  			this.comment=this.commentArr[4];
  		}
  },
  showCover(){
  	this.showOrhidden=!this.showOrhidden;
  },
}
}
</script>

<style scoped>
.score{
  height: 6.67rem; 
  background: url('../../assets/xiaoxin08.jpg') no-repeat;
  background-size: 100%;
  width: 100%;
  padding-top: 0.2rem;
}
/*得分*/
.your_scores_container{
  position: relative;
  width: 2.27rem;
  height: 1.5rem;
  border-radius: 0.1rem;
  margin: 0 auto;
  text-align: center;
  background-color: white;
}
.your_scores{
  width: 100%;
  font-size: 0.3rem;
  font-weight: 900;
  text-indent: 0.2rem;
  position: absolute;
  top: 0.38rem;
}
.score_num{
  font-family: Tahoma,Helvetica,Arial;
  color: #A51D31;
}
.fenshu{
  color: #A51D31;
}
.yourchengji{
  display: block;
  font-size: 0.2rem;
  font-weight: 800;
  padding-top: 0.1rem;
}
.result_comment{
  margin-top: 0.08rem;
  padding: 0 0.06rem;
  font-size: 0.15rem;
  font-weight: 800;
}
/*用时*/
.timeCost{
  margin-top: 0.5rem;
  font-weight: 800;
  font-size: .16rem;
}
/*分享*/
.isShow{
  height: 6.67rem;
  width: 100%;
  background: url('../../assets/xiaoxin07.jpg');
  background-size: 100% 100%;
  opacity: .9;
  position: absolute;
  top: 0;
  left: 0;
  
}
.thxShare{
  font-size: 0.3rem;
  display: block;
  color: white;
  /*text-align: center;*/
  margin-top: 1.5rem;
  width: 1.6rem;
  height: 0.44rem;
  background-color: #DF3D42;
  border-radius: 0.2rem;
  float: right;
  padding-left: 0.1rem;
}
/*回到主页*/
.gohome{
  font-size: .16rem;
  display: block;
  height: 0.35rem;
  width: 0.8rem;
  line-height: 0.35rem;
  border-radius: 0.1rem;
  color: white;
  background-color: skyblue;
  background-size: 100% 100%;
  position: absolute;
  top: 3.3rem;
  left: 20%;
  background-repeat: no-repeat;
  text-align: center;
}
/*点击分享*/
.clickShare{
  font-size: .16rem;
  display: block;
  height: 0.35rem;
  width: 0.8rem;
  line-height: 0.35rem;
  border-radius: 0.1rem;
  color: white;
  background-color: skyblue;
  background-size: 100% 100%;
  position: absolute;
  top: 3.6rem;
  left: 72%;
  background-repeat: no-repeat;
  text-align: center;
}

</style>
