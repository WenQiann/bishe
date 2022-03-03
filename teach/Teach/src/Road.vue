<template>
  <div id="road">
    <div class="roading">
      <div class="center">
        <div class="small">
          <span class="deng"> 用户登录 </span>
          <div class="use">
            <i class="el-icon-user"></i>
            <input type="text" placeholder="用户名" v-model="user" />
          </div>
          <div class="pwd">
            <i class="el-icon-lock"></i>
            <input type="password" placeholder="密码" v-model="passwd" />
          </div>
          <div class="more">
            <el-radio disabled v-model="radio" label="禁用">教师</el-radio>
            <el-radio v-model="radio" label="3">学生</el-radio>
          </div>
          <router-link :to="type">
            <el-button type="primary" class="btn" @click="load()"
              >登录</el-button
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "3",
      type: "",
      user: "",
      passwd: "",
    };
  },
  methods: {
    load() {
      if (this.user == "" || this.passwd == "") {
        this.type = "";
        this.$alert("用户名或密码不能为空呦！", "哈喽，小可爱", {
        confirmButtonText: "确定",
      
      });
      } else if (this.user == "admin" && this.passwd == "000000") {
        this.type = "/Home";
       this.$alert("恭喜您，登录成功啦！", "哈喽，小可爱", {
        confirmButtonText: "确定",
      });
      } else {
        this.type = "";
        this.user == "";
        this.passwd == "";
        this.$alert("请仔细核对用户名或密码哟！", "哈喽，小可爱", {
        confirmButtonText: "确定",
      });
      }
    },
   
  },
};
</script>

<style scoped>
@import url(./assets/css/Road.css);
</style>