<template>
  <div id="luntan">
    <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
      <div class="reply-info">
        <div
          contenteditable="true"
          id="replyInput"
          spellcheck="false"
          placeholder="输入评论..."
          class="reply-input"
          @focus="showReplyBtn"
          @input="onDivInput($event)"
        ></div>
      </div>

      <div class="reply-btn-box">
        <el-button
          class="reply-btn"
          size="medium"
          @click="sendComment"
          type="primary"
          >发送</el-button
        >
      </div>
    </div>
    <div class="box">
      <div
        v-for="(item, i) in comments"
        :key="i"
        class="author-title reply-father"
      >
        <div class="author-info">
          <span class="author-time">{{ item.time }}</span>
        </div>
        <div class="icon-btn">
          <span @click="showReplyInput(i, item.id)">
              <i class="iconfont el-icon-s-comment"></i>
              <i class="el-icon-delete" @click="deleteBook(item.id)"></i>
              <!-- <span @click="deleteBook()">X</span> -->
              <!-- {{ item.commentNum }} -->
            </span>
          <!-- <i class="iconfont el-icon-caret-top"></i>{{ item.like }} -->
        </div>
        <div class="talk-box">
          <p>
            <span class="reply">{{ item.comment }}</span>
          </p>
        </div>
        <div class="reply-box">
          <div v-for="(reply,j) in item.reply" :key="j" class="author-title">
            <div class="author-info">
              <!-- <span class="author-name">{{ reply.from }}</span> -->
              <span class="author-time">{{ reply.time }}</span>
            </div>
            <div class="icon-btn">
              <span @click="showReplyInput(i, reply.from)">
                <i class="iconfont el-icon-s-comment"></i>
                <!-- <i class="el-icon-delete" @click="deleteBooks(reply.fromId)"></i> -->
               </span
              >
              <!-- <i class="iconfont el-icon-caret-top"></i>{{ reply.like }} -->
            </div>
            <div class="talk-box">
              <p class="asker">
                <span>回复:</span>
                <span class="reply">{{ reply.comment }}</span>
              </p>
            </div>
            <div class="reply-box"></div>
          </div>
        </div>
        <div v-show="_inputShow(i)" class="my-reply my-comment-reply">
          <div class="reply-info">
            <div
              tabindex="0"
              contenteditable="true"
              spellcheck="false"
              placeholder="输入评论..."
              @input="onDivInput($event)"
              class="reply-input reply-comment-input"
            ></div>
          </div>
          <div class="reply-btn-box">
            <el-button
              class="reply-btn"
              size="medium"
              @click="sendCommentReply(i)"
              type="primary"
              >发送</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const clickoutside = {
  // 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.vueClickOutside = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener("click", el.vueClickOutside);
    delete el.vueClickOutside;
  },
};
export default {
  name: "ArticleComment",
  data() {
    return {
      btnShow: false,
      index: "0",
      replyComment: "",
      myName: "Lana Del Rey",
      myHeader:
        "https://img1.baidu.com/it/u=1618065806,14298536&fm=26&fmt=auto&gp=0.jpg",
      myId: 19870621,
      to: "",
      toId: -1,
      comments: [
        {
          name: "Lana Del Rey",
          id: 19870621,
          headImg:
            "https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg",
          comment: "今天教育活动举办的很不错啊",
          time: "2021年9月16日 18:43",
          commentNum: 2,
          like: 15,
          inputShow: false,
          reply: [
            {
              from: "Taylor Swift",
              fromId: 19891221,
              fromHeadImg:
                "https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg",
              to: "Lana Del Rey",
              toId: 19870621,
              comment: "如果再能锻炼一下孩子实践就好了",
              time: "2021年9月16日 18:43",
              commentNum: 1,
              like: 15,
              inputShow: false,
            },
            {
              from: "Ariana Grande",
              fromId: 1123,
              fromHeadImg:
                "https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg",
              to: "Lana Del Rey",
              toId: 19870621,
              comment: "嗯呢，我也觉得",
              time: "2021年9月16日 18:43",
              commentNum: 0,
              like: 5,
              inputShow: false,
            },
          ],
        },
        {
          name: "Taylor Swift",
          id: 19891221,
          headImg:
            "https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg",
          comment: "今天孩子还挺开心的",
          time: "2021年9月16日 18:43",
          commentNum: 1,
          like: 5,
          inputShow: false,
          reply: [
            {
              from: "Lana Del Rey",
              fromId: 19870621,
              fromHeadImg:
                "https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg",
              to: "Taylor Swift",
              toId: 19891221,
              comment: "我家孩子也是，说个不停",
              time: "2021年9月16日 18:43",
              commentNum: 25,
              like: 5,
              inputShow: false,
            },
          ],
        },
        {
          name: "Norman Fucking Rockwell",
          id: 20190830,
          headImg:
            "https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg",
          comment: "Plz buy Norman Fucking Rockwell on everywhere",
          time: "2021年9月16日 18:43",
          commentNum: 0,
          like: 5,
          inputShow: false,
          reply: [],
        },
        {
          name: "Norman Fucking Rockwell",
          id: 20190833,
          headImg:
            "https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg",
          comment: "给孩子一个奖励",
          time: "2021年9月16日 18:43",
          commentNum: 0,
          like: 5,
          inputShow: false,
          reply: [
            
            {
              from: "Ariana Grande",
              fromId: 1123,
              fromHeadImg:
                "https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg",
              to: "Lana Del Rey",
              toId: 19870621,
              comment: "我胖揍了他一顿",
              time: "2021年9月16日 18:43",
              commentNum: 0,
              like: 5,
              inputShow: false,
            },
            {
              from: "Taylor Swift",
              fromId: 19891221,
              fromHeadImg:
                "https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg",
              to: "Lana Del Rey",
              toId: 198702341,
              comment: "好好讲讲道理",
              time: "2021年9月16日 18:43",
              commentNum: 1,
              like: 15,
              inputShow: false,
            },
          ],
        },
        
      ],
    };
  },
  directives: { clickoutside },
  methods: {
    deleteBook: function (id) {
      // 删除留言
      // 根据id从数组中查找元素的索引
      var index = this.comments.findIndex(function (item) {
        // item.id --->books.id
        return item.id == id;
      });
      // 根据索引删除数组元素
      //   this.books.splice(index, 1);
      // -------------------------
      // 方法二：通过filter方法进行删除
      // this.comments = this.comments.filter(function(item){
      //   return item.id != id;
      // });

      this.$confirm("此操作将永久删除本条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.comments.splice(index, 1);
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
   
    inputFocus() {
      var replyInput = document.getElementById("replyInput");
    //   replyInput.style.padding = "8px 8px";
      replyInput.style.border = "1px solid yellowgreen";
      replyInput.focus();
    },
    showReplyBtn() {
      this.btnShow = true;
    },
    hideReplyBtn() {
      this.btnShow = true;
      // replyInput.style.padding = "10px";
      // replyInput.style.border ="none"
    },
    showReplyInput(i, name, id) {
      this.comments[this.index].inputShow = false;
      this.index = i;
      this.comments[i].inputShow = true;
      this.to = name;
      this.toId = id;
    },
    _inputShow(i) {
      return this.comments[i].inputShow;
    },
    sendComment() {
      if (!this.replyComment) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "评论不能为空",
        });
      } else {
        let a = {};
        let input = document.getElementById("replyInput");
        let timeNow = new Date().getTime();
        let time = this.dateStr(timeNow);
        a.name = this.myName;
        a.comment = this.replyComment;
        a.headImg = this.myHeader;
        a.time = time;
        a.commentNum = 0;
        a.like = 0;
        this.comments.unshift(a);
        this.replyComment = "";
        input.innerHTML = "";
         this.$message({
          showClose: true,
          type: "success",
          message: "评论发表成功！",
        });
      }
    },
    sendCommentReply(i) {
      if (!this.replyComment) {
        this.$message({
          showClose: true,
          type: "warning",
          message: "评论不能为空",
        });
      } else {
        let a = {};
        let timeNow = new Date().getTime();
        let time = this.dateStr(timeNow);
        a.id=this.id
        a.from = this.myName;
        a.to = this.to;
        a.fromHeadImg = this.myHeader;
        a.comment = this.replyComment;
        a.time = time;
        a.commentNum = 0;
        a.like = 0;
        this.comments[i].reply.push(a);
        this.replyComment = "";
        document.getElementsByClassName("reply-comment-input")[i].innerHTML =
          "";
          this.$message({
          showClose: true,
          type: "success",
          message: "评论发表成功！",
        });
      }
    },
    onDivInput: function (e) {
      this.replyComment = e.target.innerHTML;
    },
    dateStr(date) {
      //获取js 时间戳
      var time = new Date().getTime();
      //去掉 js 时间戳后三位，与php 时间戳保持一致
      time = parseInt((time - date) / 1000);
      //存储转换值
      var s;
      if (time < 60 * 1 ) {
        //十分钟内
        return "刚刚";
      } else if (time < 60 * 60 && time >= 60 * 1) {
        //超过十分钟少于1小时
        s = Math.floor(time / 60);
        return s + "分钟前";
      } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
        //超过1小时少于24小时
        s = Math.floor(time / 60 / 60);
        return s + "小时前";
      } else if (time < 60 * 60 * 24 * 30 && time >= 60 * 60 * 24) {
        //超过1天少于30天内
        s = Math.floor(time / 60 / 60 / 24);
        return s + "天前";
      } else {
        //超过30天ddd
        var date = new Date(parseInt(date));
        return (
          date.getFullYear() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getDate()
        );
      }
    },
  },
};
</script>

<style scoped>
@import url(../assets/css/Luntan.css);
</style>