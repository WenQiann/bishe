<template>
  <div id="fabu">
    <div class="grid">
      <div>
        <div class="book">
          <div class="book1">
            <h3 style="margin: 1rem 0 0 0">
              <label for="name"
                >姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：
                <el-input
                  style="width: 18rem"
                  placeholder="请输入姓名"
                  id="name"
                  v-model="name"
                ></el-input>
              </label>
            </h3>
            <h3>
              <label for="txt"
                ><span>共享内容：</span>
                <el-input
                  style="width: 18rem"
                  type="textarea"
                  placeholder="请输入共享内容···"
                  v-model="txt"
                >
                </el-input
              ></label>
            </h3>
            <el-button type="success" @click="handle" class="btn"
              >分享</el-button
            >
          </div>
        </div>
      </div>
      <h4>
        <i class="el-icon-chat-dot-square"></i> 当前共享总数为：{{
          this.books.length
        }}条
      </h4>
      <table>
        <thead>
          <tr class="grid_fix">
            <th class="biao1">姓名</th>
            <th class="biao2">共享内容</th>
            <th class="biao3">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in books">
            <td class="ge">{{ item.name }}</td>
            <td class="ge">{{ item.txt }}</td>
            <td class="ge">
              <div @click="like($even)">
                <img
                  :src="isClick==false ? '../../src/assets/img/haoping.png':'../../src/assets/img/haoping_1.png'"
                  alt=""
                  class="zan"
                />
              </div>
              <i
                class="el-icon-delete"
                @click.prevent="deleteBook(item.id)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
@import url(../assets/css/Fabu.css);
</style>
<script>
export default {
  data() {
    return {
      flag: false,
      id: "",
      name: "",
      txt: "",
      books: [],
      isClick: false,
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    like: function () {
      // var index = this.books.findIndex(function (item) {
      //   return item.id == id;
      // });
      if (this.isClick) {
        this.isClick = false;
        // this.clickNum = this.clickNum + 1;
        // console.log(this.clickNum);
      } else {
        this.isClick = true;
        // this.clickNum = this.clickNum - 1;
      }
    },
    getData() {
      var _this = this;
      this.$http
        .get("src/data/books.data")
        .then(function (res) {
          _this.books = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    handle: function () {
      if (!this.name) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "姓名不能为空",
        });
      } else if (!this.txt) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "共享内容不能为空",
        });
      } else {
        // 添加留言
        var book = {};
        book.name = this.name;
        book.txt = this.txt;
        this.books.push(book);
        this.$message({
          type: "success",
          message: "共享成功!",
        });
        // 清空表单
        this.name = "";
        this.txt = "";
      }
      // 清空表单
      this.name = "";
      this.txt = "";
    },
    deleteBook: function (id) {
      // 删除留言
      // 根据id从数组中查找元素的索引
      var index = this.books.findIndex(function (item) {
        // item.id --->books.id
        return item.id == id;
      });
      this.$confirm("此操作将永久删除本条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.books.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    
  },
};
</script>
