<template>
  <div id="footer">
    <div class="fooall">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="yellowgreen"
        text-color="#fff"
        active-text-color="#333"
      >
        <el-menu-item index="1"
          ><router-link to="/Home" class="page">首页</router-link></el-menu-item
        >
        <el-menu-item index="2"
          ><router-link to="luntan" class="page"
            >讨论园地</router-link
          ></el-menu-item
        >
        <el-menu-item index="3"
          ><router-link to="fabu" class="page"
            >资源共享</router-link
          ></el-menu-item
        >
        <el-menu-item index="4"
          ><router-link to="me" class="page">我的</router-link></el-menu-item
        >
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.fooall {
  width: 100%;
  height: 4rem;
  background: yellowgreen;
  color: white;
  position: fixed;
  top: 42rem;
  z-index: 10;
}
.fooall li {
  float: left;
  list-style-type: none;
  width: 25%;
  text-align: center;
  line-height: 4rem;
  color: #333;
}
.page {
  text-decoration: none;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
