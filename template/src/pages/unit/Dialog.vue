<template>
  <div class="app-page">
    <div class="page__hd">
        <h1 class="page__title">Dialog</h1>
        <p class="page__desc">对话框</p>
    </div>
    <div class="page__bd page__bd_spacing">
        <a href="javascript:;" class="weui-btn weui-btn_default" id="showIOSDialog1" @click="kkfn1()">iOS Dialog样式一</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" id="showIOSDialog2" @click="kkfn2()">iOS Dialog样式二</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" id="showAndroidDialog1" @click="kkfn3()">Android Dialog样式一</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" id="showAndroidDialog2" @click="kkfn4()">Android Dialog样式二</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store:this.$store.state,
    }
  },
  created() {
  },
  methods: {
    kkfn1() {
      var that = this;
      that.unit.showModal({
        title:'标题',
        content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        surebtn:'确认',
        cancelbtn:'取消',
        sureFn(){
          console.log('sdf');
        },
        cancelFn(){
          console.log('kk');
        }
      })
    },
    kkfn2(){
      var that = this;
      that.unit.showModal({
        content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        surebtn:'知道了',
        sureFn(){
          console.log('sdf');
        }
      })
    },
    kkfn3() {
      var that = this;
      that.unit.showModal({
        title:'标题',
        content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        surebtn:'确认',
        cancelbtn:'取消',
        state:2
      })
    },
    kkfn4() {
      var that = this;
      that.unit.showModal({
        content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
        surebtn:'确认',
        cancelbtn:'取消',
        state:2
      })
    }
  }
}
</script>
<style scoped>
  @import "../../assets/css/example.css";
  .app-page{
    background-color: #fff;
  }
</style>

