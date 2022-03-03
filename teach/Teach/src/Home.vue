<template>
  <div id="home">
    <div class="block">
      <el-carousel trigger="click" height="200px">
        <el-carousel-item v-for="item in lunbo" :key="item.code">
          <router-link to="xiangqing">
          <img :src="item.src" alt="" />
          </router-link>
          <p class="title">{{ item.title }}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="study">
      <div class="line">
        <i class="el-icon-notebook-1"></i>今日作业
        <span @click="openFullScreen2"
          ><i class="el-icon-refresh"></i>更新</span
        >
      </div>
      <div
        class="work"
        v-loading="loading"
        element-loading-text="小的这就更新···"
        element-loading-spinner="el-icon-loading"
      >
        <li v-for="item in homeWork" :key="item.id">{{ item.connext }}</li>
      </div>
    </div>
    <div class="study">
      <div class="line">
        <i class="el-icon-notebook-1"></i>课程表<span @click="openFullScreen21"
          ><i class="el-icon-refresh"></i>更新</span
        >
      </div>
      <div
        v-loading="loading1"
        element-loading-text="小的这就更新···"
        element-loading-spinner="el-icon-loading"
      >
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="date" label="" width="90"> </el-table-column>
          <el-table-column prop="mon" label="星期一" width="60">
          </el-table-column>
          <el-table-column prop="tur" label="星期二" width="60">
          </el-table-column>
          <el-table-column prop="wed" label="星期三" width="60">
          </el-table-column>
          <el-table-column prop="thr" label="星期四" width="60">
          </el-table-column>
          <el-table-column prop="fin" label="星期五" width="60">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="study">
      <div class="line">
        <i class="el-icon-notebook-1"></i>教师评价<span
          @click="openFullScreen22"
          ><i class="el-icon-refresh"></i>更新</span
        >
      </div>
      <div
        v-loading="loading2"
        element-loading-text="小的这就更新···"
        element-loading-spinner="el-icon-loading"
      >
        未到评价开放时间，暂不能评价，请耐心等待，感谢您的配合！
      </div>
    </div>
    <div class="study">
      <div class="line">
        <i class="el-icon-notebook-1"></i>通知公告<span
          @click="openFullScreen23"
          ><i class="el-icon-refresh"></i>更新</span
        >
      </div>
      <div
        v-loading="loading3"
        element-loading-text="小兵正在拼命加载中···"
        element-loading-spinner="el-icon-loading"
      >
        <li>预计9月末准备国庆演讲比赛</li>
        <li>今日课间活动需自行准备运动器材</li>
        <li>阳光少年活动将在本周五下午进行</li>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(./assets/css/Home.css);
</style>
<script type="text/javascript">
import Haohuo from "../../../../20210603/Book/Book/src/components/haohuo.vue";
export default {
  data() {
    return {
      tableData: [],
      lunbo: [],
      homeWork: [],
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false,
      value: null,
    };
  },
  components: { Haohuo },
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var _this = this;
      this.$http
        .get("src/data/tableData.data")
        .then(function (res) {
          _this.tableData = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$http
        .get("src/data/lunbo.data")
        .then(function (res) {
          _this.lunbo = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$http
        .get("src/data/homeWork.data")
        .then(function (res) {
          _this.homeWork = res.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    openFullScreen2() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    openFullScreen21() {
      this.loading1 = true;
      setTimeout(() => {
        this.loading1 = false;
      }, 1000);
    },
    openFullScreen22() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 1000);
    },
    openFullScreen23() {
      this.loading3 = true;
      setTimeout(() => {
        this.loading3 = false;
      }, 1000);
    },
  },
};
</script>