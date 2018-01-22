// 引入第三方包开始
import Vue from 'vue'
// 引入router
import VueRouter from 'vue-router'
// VueRouter:安装插件
Vue.use(VueRouter)

// 引入第三方包结束

// 引入自己的Vue文件
import App from './App.vue'
import store from './store/'
import Home from './components/home/home.vue'
import Item from './components/item/item.vue'
import Score from './components/score/score.vue'
import './style/common.css'
import './config/rem.js'

// VueRouter:创建对象并配置路由规则
const router = new VueRouter({
		routes:[
			//VueRouter:路由配置规则
			{path:'/',redirect:({name:'home'})},
			{name:'home',path:'/home',component:Home},
			{name:'item',path:'/item',component:Item},
			{name:'score',path:'/score',component:Score},
		]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
