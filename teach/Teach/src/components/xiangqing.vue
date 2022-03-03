<template>
  <div id="xiangqing">
    <div class="topss">
      <h3>
        <i class="el-icon-back" @click="prev()"></i>
        校园活动
      </h3>
    </div>
    <div class="center">
      <img
        src="https://img0.baidu.com/it/u=477038491,2334700658&fm=26&fmt=auto&gp=0.jpg"
        alt=""
        class="cen_i"
      />
      <p>活动名称：我健康！我快乐！我成长！</p>
      <p>活动类型：全校大型运动会</p>
      <p>活动主体：全体学生及教职工</p>
      <p>活动日期：2008年5月30日-2008年6月1日</p>
      <p>
        活动内容：
        <span>
            男生跑步50米、100米、200米<br />
            女生跑步50米、100米、200米<br />
            男生4x50米、4x100米接力<br/>
            女生4x50米、4x100米接力<br/>
            男生跳远、跳高、单人跳绳、双人跳绳<br/>
            女生跳远、跳高、单人跳绳、双人跳绳<br/>
            男生铅球<br/>
            女生铅球<br/>
            各班级拔河比赛<br/>
            教职工4x100米接力<br/>
            教职工拔河比赛
        </span>
      </p>
      <p>注意事项：
          <span>
              1.各班级同学在保证身体允许的情况下积极参与。<br/>
              2.活动前不可食用葡萄糖等药物。<br/>
              3.友谊第一，比赛第二。<br/>
              4.望各位同学互相帮助，团结就是力量。
          </span>
          </p>
    </div>
  </div>
</template>
<style scoped>
@import url(../assets/css/Xiangqing.css);
</style>

<script>
export default {
  methods: {
    prev() {
      this.$router.go(-1);
    },
  },
};
</script>
