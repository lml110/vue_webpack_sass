<template>
  <div class="app-page">
    <div class="apui_cell">
      <!-- <a href="#" v-for="(item, idx) in data" v-link="{path:item.url}">{{item.name}}</a> -->
      <router-link :to="{path:item.url}" v-for="(item, idx) in data" class="apli_cell bdtb btnactive" :key="idx">{{item.name}}<span class="jtr-ico fa"></span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store:this.$store.state,
      data: [{
        url:'/unit/Toast',
        name:'提示框 (Toast)'
      },{
        url:'/unit/Dialog',
        name:'对话框 (Dialog)'
      },{
        url:'/unit/selectPicker',
        name:'选择器 (selectPicker)'
      },{
        url:'/unit/addressPicker',
        name:'地址选择器 (addressPicker)'
      },{
        url:'/unit/datetime',
        name:'时间选择器 (datetime)'
      },{
        url:'/unit/swiper',
        name:'滑块轮播 (swiper)'
      },{
        url:'/unit/switch',
        name:'开关 (switch)'
      },{
        url:'/unit/button',
        name:'按钮 (button)'
      }]
    }
  },
  ready(){
    console.log('ff');
  },
  created(){
    //console.log(this.$store.state.currentPageName);
  },
  methods: {
    kkfn:function (argument) {
      var that = this;
      console.log(that.$store);
      that.opo = "我是谁"
    }
  }
}
</script>
<style>
  .apui_cell{
    padding-bottom: 3rem
  }
</style>
