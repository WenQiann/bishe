<template>
  <div id="app">
    <Header class="header" v-show="$route.meta.tis"></Header>
    <router-view class="home"></router-view>
    <Footer class="foooo" v-show="$route.meta.dis"></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue"
import Home from "./Home.vue"
import Footer from "./Footer.vue"
// import Road from "./Road.vue"
export default {
  name: 'app',
  components:{
    // Road,
    Header,
    Home,
    Footer,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
.el-message-box{
  width: 320px !important;
}
.el-button--primary.is-active, .el-button--primary:active {
    background: yellowgreen;
    border-color: yellowgreen;
    color: #FFF;
}
.el-button--primary:focus, .el-button--primary:hover {
    background: yellowgreen;
    border-color: yellowgreen;
    color: #FFF;
}
</style>
