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
        url:'/common/popup',
        name:'弹窗'
      }]
    }
  },
  created: function () {
    console.log(this.$store.state.currentPageName);
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

