import Vue from 'vue'
import App from './App.vue'

import Router from "vue-router"
import RouterConfig from "./router.config.js"

// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
import axios from "axios"
//发送请求
axios.interceptors.request.use(function(config){
  return config
},function(error){
  return Promise.reject(error)


})
//配置请求返回的信息
axios.interceptors.request.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})
//挂载到实例上，没方法，挂在原型上
Vue.prototype.$http = axios



import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)

Vue.use(Router)
const router = new Router(RouterConfig)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
