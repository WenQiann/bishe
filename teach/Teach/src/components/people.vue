<template>
  <div id="people">
    <div class="topz">
      <h3>
        <i class="el-icon-back" @click="prev()"></i>
        个人信息
      </h3>
    </div>
    <div class="body">
        <el-table
          :data="people"
          style="width: 100%"
          stripe
        >
          <el-table-column prop="name" label="学生基本信息表" width="190">
          </el-table-column>
          <el-table-column prop="props" label="" width="190">
          </el-table-column>
        </el-table>
    </div>
    <p class="zhu">注：如以上展示信息有误，请及时联系本班班主任进行修改</p>
  </div>
</template>
<style scoped>
@import url(../assets/css/People.css);
</style>
<script>
export default {
  data() {
    return {
      fileList: {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
      people:[]
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    prev(){
          this.$router.go(-1)
      },
    getData() {
      var _this = this;
      this.$http
        .get("src/data/people.data")
        .then(function (res) {
          _this.people = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>