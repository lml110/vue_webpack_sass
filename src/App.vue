<template>
  <div id="app" >
    <!--通用头部-->
    <header class="app-header _effect" v-if="store.headerStatus">
      <transition name="fade" mode="out-in">
        <div class="app-header-center" @click="lml" v-text="title"></div>
      </transition>
      <div class="app-header-back fa" @click="$router.back()" v-if="$route.path!=='/'&&isback"></div>
    </header>
    <section class="app-content _effect" :class="{'header-hide':!store.headerStatus,'footer-hide':!store.isShow}">
      <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
        <router-view name="default" keep-alive></router-view>
      </transition>
    </section>
    <footer class="tabBarfoot _effect" :class="{'bdt':tabbars.borderShow}" :style="{background:tabbars.backgroundColor}" v-if="tabbars.isShow">
      <a href="javascript:void(0)" v-for="(item, idx) in tabbars.list" class="lista" :key="idx" @click="tabbarfn(idx)" :style="{color: (tabbars.listcur==idx)?tabbars.selectedColor:tabbars.color}">
        <img :src="(tabbars.listcur==idx)?store.imghost+item.selectedIconPath:store.imghost+item.iconPath" alt="" class="lista-img">
        <span class="case" v-text="item.text"></span>
      </a>
    </footer>
  </div>
</template>
<script>
  //import WxHeader from './pages/common/wx-header'
  export default {
    components: {
      //WxHeader
    },
    data(){
      return {
        store : this.$store.state,
        //title:this.$route.matched[0].props.default?this.$route.matched[0].props.default.title:this.$store.state.currentPageName
        title:this.$route.matched[0].props.default?this.$route.matched[0].props.default.title:this.$store.state.currentPageName,
        tabbars:this.$store.state.tabBar,
        fromtit:'',
        isback:false,
        hdrouter:true,
        enterAnimate: "", 
        leaveAnimate: "" 
      }
    },
    created() {
      var that = this;
      that.tabbars.listcur = that.utils.filtefn1(that.$store.state.tabBar.list,function(el,ix){
        if(el.pagePath==that.$route.path) return ix;
      })[0];
      if(that.tabbars.listcur==undefined) that.$store.state.tabBar.isShow = false;
      //this.$store.state.currentPageName = "接口"
      
    },
    methods:{
      lml() {
        console.log(this.utils.$alert);
      },
      tabbarfn(idx) {
        var that = this,tabbars = that.$store.state.tabBar,router = that.$router;
        that.tabbars.listcur = idx;
        console.log(router.history);
        router.push({ path: tabbars.list[idx].pagePath });
      }
    },
    watch:{
      "$route" (to, from) {
        var that = this;
        that.tabbars.isShow = false;
        this.store.headerStatus = true;
        that.utils.filtefn1(that.$store.state.tabBar.list,function(el,ix){
          if(el.pagePath==that.$route.path) that.tabbars.isShow = true;
        })
        that.hdrouter = !that.hdrouter;
        that.title = to.matched[0].props.default?to.matched[0].props.default.title:this.$store.state.currentPageName;
        that.fromtit = from.matched[0].props.default?from.matched[0].props.default.title:this.$store.state.currentPageName;
        
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        
        if (toDepth === fromDepth) {
          that.enterAnimate = "";
          that.leaveAnimate = "";
          that.isback = false;
          return false;
        };
        that.isback = (toDepth==2)?false:true;
        console.log(toDepth,fromDepth);
        that.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft30"
        that.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft30" : "animated fadeOutRight"
        //console.log(that.leaveAnimate,that.enterAnimate);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "assets/css/common/weui.min.css";
  @import "assets/css/common/common.css";
  @import "assets/css/common/animate.css";
  @import "assets/css/common/animate.css";
  @import "scss/lml.scss";
</style>
