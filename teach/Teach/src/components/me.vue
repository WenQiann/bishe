<template>
  <div id="me">
    <div class="meall">
      <div class="top">
        <div class="head">
          <el-avatar :size="80">
            <img
              src="https://img1.baidu.com/it/u=3588024408,259056118&fm=26&fmt=auto"
              alt=""
            />
          </el-avatar>
        </div>
        <div class="right">
          <h3>李雯倩</h3>
          <router-link to="/people" class="page">
            <span>
              学号：201807102025&nbsp;&nbsp;&nbsp;&nbsp;<i
                class="el-icon-arrow-right"
              ></i>
            </span>
          </router-link>
        </div>
      </div>
      <div class="studys">
        <p>综合评价统计图</p>
        <div id="charts" style="width:'100%',height:'20.4rem'">
          <div id="main" :style="{ width: '100%', height: '20.4rem' }"></div>
        </div>
      </div>
      <div class="mass">
        <el-collapse accordion>
          <el-collapse-item title="德育评价查询">
            <div class="kuai" v-for="item in deyu" :key="item.id">
              {{ item.text }}
              <p class="time">{{ item.time }}</p>
            </div>
            <div
              class="more"
              v-loading="loading"
              @click="more"
              element-loading-text="小的这就更新···"
              element-loading-spinner="el-icon-loading"
            >
              查看更多>>
            </div>
          </el-collapse-item>
          <el-collapse-item title="考试成绩查询">
            <div>
              <el-table
                :data="result"
                style="width: 100%"
                stripe
                :summary-method="getSummaries"
                show-summary
              >
                <el-table-column prop="name" label="科目" width="135">
                </el-table-column>
                <el-table-column prop="props" label="成绩(分)" width="135">
                </el-table-column>
                <el-table-column prop="num" label="名次" width="135">
                </el-table-column>
              </el-table>
            </div>
            <div
              class="more"
              v-loading="loading"
              @click="more"
              element-loading-text="小的这就更新···"
              element-loading-spinner="el-icon-loading"
            >
              往次成绩查询 >>
            </div>
          </el-collapse-item>
          <el-collapse-item title="活动表现查询">
            <div class="kuai" v-for="item in huodong" :key="item.code">
              <div class="titleq">
                活动名称：{{ item.name
                }}<span>活动表现：{{ item.result }}</span>
              </div>
              <div>{{ item.text }}</div>
              <p class="time">{{ item.time }}</p>
            </div>
            <div
              class="more"
              v-loading="loading"
              @click="more"
              element-loading-text="小的这就更新···"
              element-loading-spinner="el-icon-loading"
            >
              查看更多活动表现>>
            </div>
          </el-collapse-item>
          <el-collapse-item title="帮助与反馈">
            <div style="margin:1rem 0 0 0">
              <el-input
                style="width: 26rem"
                type="textarea"
                placeholder="请输入您宝贵的意见···"
                v-model="txt"
              >
              </el-input>
              <el-button type="primary" @click="handles" class="btnk"
                >反馈</el-button
              >
            </div>
          </el-collapse-item>
          <router-link to="/setting" class="link">
            <el-collapse-item title="设置"> </el-collapse-item>
          </router-link>
        </el-collapse>
      </div>
      <div class="exit">
        <router-link to="/Road">
          <el-button type="primary">
            退出当前账号
            <i class="el-icon-switch-button"></i>
          </el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      result: [],
      loading: false,
      deyu: [],
      huodong: [],
      txt: "",
    };
  },
  mounted() {
    this.getData();
    /*ECharts图表*/
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      series: [
        {
          name: "访问来源",
          txt: "已获学分情况统计",
          type: "pie",
          radius: "55%",
          itemStyle: {
            normal: {
              // 阴影的大小
              shadowBlur: 0,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          data: [
            { value: 380, name: "德育评价" },
            { value: 270, name: "活动表现" },
            { value: 310, name: "考试成绩" },
          ],
        },
      ],
    });
  },
  methods: {
    handles() {
      if (!this.txt) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "反馈不能为空",
        });
      } else {
        this.$message({
          showClose: true,
          type: "success",
          message: "反馈成功",
        });
        this.txt=''
      }
    },
    more() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$message({
          showClose: true,
          type: "success",
          message: "暂无更多内容",
        });
      }, 2000);
    },
    getData() {
      var _this = this;
      this.$http.get("src/data/result.data").then(function (res) {
        _this.result = res.data;
      });
      this.$http.get("src/data/deyu.data").then(function (res) {
        _this.deyu = res.data;
      });
      this.$http.get("src/data/huodong.data").then(function (res) {
        _this.huodong = res.data;
      });
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总分:";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 分";
        } else {
          sums[index] = "第3名";
        }
      });

      return sums;
    },
  },
};
</script>
<style scoped>
@import url(../assets/css/Me.css);
</style>