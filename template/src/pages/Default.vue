<template>
  <div class="app-page">
    <div class="apui_cell">
      <!-- <a href="#" v-for="(item, idx) in data" v-link="{path:item.url}">{{item.name}}</a> -->
      <router-link :to="{path:item.url}" v-for="(item, idx) in data" class="apli_cell bdtb btnactive" :key="idx">{{item.tit}}<span class="jtr-ico fa"></span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store:this.$store.state,
      data: [{
        url:'/customer/setting',
        tit:'个人中心'
      },{
        url:'/myincome/myincome',
        tit:'列表分页加载'
      }]
    }
  },
  created() {
    //this.$store.state.currentPageName = "接口"
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

