<template>
  <div class="app-page">
    <div class="apui_cell">
      <div style="background:red;height:800px;">{{$route.params.userId}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store:this.$store.state,
      data: [{
        url:'/setting',
        name:'个人中心'
      }]
    }
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

