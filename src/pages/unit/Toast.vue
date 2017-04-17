<template>
  <div class="app-page">
    <div class="page__hd">
        <h1 class="page__title">Toast</h1>
        <p class="page__desc">弹出式提示</p>
    </div>
    <div class="page__bd page__bd_spacing">
        <a href="javascript:;" class="weui-btn weui-btn_default" id="showToast" @click="kkfn1()">成功提示</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" id="showLoadingToast" @click="kkfn2()">加载中提示</a>
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
      this.unit.showToast({
        icon:"sucess",
        title:'加载成功'
      })
      setTimeout(() =>{
        that.unit.hideToast()
      },2000)
    },
    kkfn2() {
      var that = this;
      this.unit.showToast({
        icon:"loading",
        title:'加载中'
      })
      setTimeout(() =>{
        that.unit.hideToast()
      },2000)
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

