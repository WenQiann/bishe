<template>
  <div id="setting">
    <div class="tops">
      <h3>
        <i class="el-icon-back" @click="prev()"></i>
        设置
      </h3>
    </div>
    <div class="context">
      <el-collapse accordion>
        <el-collapse-item title="修改密码">
         
          <div style="margin:1rem 1rem 0 1rem">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="请输入旧密码:" prop="age" size="small">
                <el-input
                  type="password"
                  v-model.number="ruleForm.age"
                ></el-input>
              </el-form-item>
              <el-form-item label="请输入新密码:" prop="pass" size="small">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="请确认新密码:" prop="checkPass" size="small">
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                  style="margin: 0 0 0 2rem"
                  >提交</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="新消息提醒">
          <div style="margin:1rem 1rem 0 1rem">
            接受讨论园地消息通知
              <el-switch v-model="ruleForm.delivery1" style="float:right"></el-switch>
          </div>
          <div style="margin:1rem 1rem 0 1rem">
            接受资源共享消息通知
              <el-switch v-model="ruleForm.delivery2" style="float:right"></el-switch>
          </div>
          <div style="margin:1rem 1rem 0 1rem">
            接受系统消息通知
              <el-switch v-model="ruleForm.delivery3" style="float:right"></el-switch>
          </div>
          <div style="margin:1rem 1rem 0 1rem">
            通知显示详情
              <el-switch v-model="ruleForm.delivery4" style="float:right"></el-switch>
          </div>
        </el-collapse-item>
         <el-collapse-item title="勿扰模式">
          <div style="margin:1rem 1rem 0 1rem">
            勿扰模式
              <el-switch v-model="ruleForm.delivery" style="float:right"></el-switch>
              <p class="dont">开启后，在收到新消息时将不会响铃或振动。</p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="使用指南">
          <div style="margin:1rem 1rem 0 1rem">
           <li>在首页可查看活动、作业、课程表、教师评价及各种活动通知。</li>
           <li>在讨论园地可进行交流，全过程匿名。话题请围绕孩子进行讨论交流。管理员可查看。</li>
           <li>在资源共享可查看大家共享的资源，包括老师上传的录课。</li>
           <li>在我的中可查看家长更为关心孩子的德智体美劳各方面情况。</li>
          </div>
        </el-collapse-item>
        <el-collapse-item title="关于我们">
          <div style="margin:1rem 1rem 0 1rem">
           小学教务系统仍在初级阶段，若您在使用过程中，给您带来不便，请及时给我们反馈，我们将及时更改。
           在这里，给大家拜个早年，提前祝大家新年快乐，万事如意！
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<style scoped>
@import url(../assets/css/Setting.css);
</style>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("旧密码不能为空"));
      } else if (value != "000000") {
        callback(new Error("旧密码错误"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
        } else {
          this.$message({
            type: "info",
            message: "无法修改！！",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    prev() {
      this.$router.go(-1);
    },
  },

};
</script>
