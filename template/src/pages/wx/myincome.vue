<template>
  <div class="app-page" >
    <div class="apui_cell" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="(item, idx) in apidata" class="apli_cell bdtb btnactive" :key="idx">{{item.OrderNo}}</div>
    </div>
    <nodata :nostate="nostate"></nodata>
  </div>
</template>

<script>
import nodata from '../common/wx-nodata'
var pageIndex,isLoaded,isLoadedOnce,pageSize = 12,StartTime,EndTime,currentDate,Weekdates,WeekFirstDay,datelist;
export default {
  props: {
    title: {
      type: String,
      default: 'Vue!'
    }
  },
  components: {
    nodata
  },
  data () {
    return {
      store:this.$store.state,
      Totalprc:'',
      sumtxt:'',
      busy:false,
      nostate:'1',
      loadstate:true,
      flag1:false, //是否展示下拉
      sumtxt:'',
      sumprc:'0.0',
      para:{},
      sumtxt_nav:'',//导航下拉文字
      bnlist:[
        {txt:'今日收益',id:"0"},
        {txt:'本周收益',id:"1"},
        {txt:'本月收益',id:"2"},
        {txt:'上月收益',id:"3"},
      ],
      apidata:[]
    }
  },
  beforeCreate(){  
    /*this.unit.showToast({
      title: "加载中",
      icon: "loading"
    });*/
  },
  /*beforeRouteEnter (to, from, next) {
    console.log(to);
  },*/
  created() {
    this.initload();
    //this.$store.state.currentPageName = "接口"
  },
  methods: {
    loadMore(){
      var that = this;
      //that.busy = true;
      that.GetList();
    },
    initload(){
      var that = this,
        slidecur,sumtxt_nav,sumtxt,stime,etime,
        para = {};
      var options = that.$route.query;
      //console.log(that.$route);
      pageIndex = 1;
      isLoaded = false;
      isLoadedOnce = false;
      currentDate = new Date();
      datelist = that.utils.formatTime(currentDate);
      StartTime = '2017-03-01';
      EndTime = '2017-03-31';
    },
    GetList(Fn){
      if (isLoadedOnce || isLoaded) return;
      var that = this,apidata = that.apidata;
      isLoadedOnce = true;
      console.log('加载',pageIndex);
      that.busy = true;
      var url = 'https://api.osmws.com/api/Shipment/GetEarnStatList',
        Openid = that.store.OpenId,
        resdata = {
          OpenID:Openid,
          StartTime:StartTime,
          EndTime:EndTime,
          pageIndex:pageIndex,
          pageSize:pageSize
        };

      that.requestfn(url,resdata,res => {
        isLoadedOnce = false;
        that.busy = false;
        if(res.data.List){
          that.sucessfn(apidata,res.data);
          pageIndex++;
        }else{
          if(apidata.length>0){
            that.noresdata();
          }else{
            that.norecord();
          }
        };
        typeof Fn == "function" && Fn();
      },err => {
        console.log(err);
      });
    },
    sucessfn(apidata,data){
      var that = this;
      var datalist = JSON.parse(data.List);
      datalist.map(function(n,i){
        apidata.push(n);
      });
      that.apidata = apidata;
      console.log(that.apidata);
    },
    //恢复
    recover(){
      var that = this;
      isLoaded = false;
      isLoadedOnce = false;
      pageIndex = 1;
      this.nostate = '0';
      that.apidata = [];
      that.busy = false;
    },
    //近期无记录
    norecord(){
      isLoaded = true;
      this.busy = true;
      this.nostate = '0';
    },
    //加载完成
    noresdata(){
      isLoaded = true;
      this.busy = true;
      this.nostate = '1';
    },
  }
}
</script>
<style scoped>
.hd_box{
    background-color:#ff4e72;
    position: relative;
    color: #fff;
    padding-bottom: 2.857rem;
    font-size: 1rem;
}
.hd_box .sy{
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 2.857rem;
    height: 2.857rem;
}
.hd_box .sy .bg{
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute; 
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.hd_box .sy .bn{
    position: relative;
    font-size: 92%;
    margin-left: 1rem;
    float: left;
}
.hd_box .sy .dd { margin-left: .714rem; font-size: 80%; position: relative; }
.hd_box .sy .prc.fr { margin-right: 1rem; font-size: 90%;position: relative; }
.hd_box .sy .bn .ii { 
    display: inline-block; 
    width: 0; height: 0; 
    border-left: .286rem solid transparent; 
    border-right: .286rem solid transparent; 
    border-bottom: .5rem solid #fff; 
    margin-left: .286rem;
    vertical-align: middle; 
}
.hd_box .sy .bn.cur .ii{-webkit-transform: rotate(180deg); transform: rotate(180deg);}
.hd_box .je { text-align: center; padding: 1.429rem 0 2.143rem; }
.hd_box .je .prc { color: #fff; font-size: 120%; }
.hd_box .je .prc .totalEarn {
    font-size: 200%;
    margin-left: .429rem;
}
.hd_box .je .wz { 
    margin-left: .214rem; 
    font-size: 80%; 
    color: #fff; 
    opacity: 0.5; 
}
.hd_box .sy .bn_list{
    position: absolute;
    overflow: hidden;
    z-index:1;
    width: 35%;
    font-size: .964rem;
    left: 1rem;
    margin-top: -.857rem;
    height: 0;
    opacity: 0;
}
.hd_box .sy .bn_list .ulbox { background-color: #fff; border: 1px solid #ddd; }
.hd_box .sy .bn_list .lis { 
    margin-left: 7.5%;
    color: #666;
    display: block; 
    height: 2.286rem; line-height: 2.286rem; 
}
.hd_box .sy .bn_list .lis.cur{ color: #ff4e72; }
.hd_box .sy .bn_list .lis:last-child:after {display: none; }
.hd_box .sy .bn_list .ii {
    display: block; 
    background-color: #fff; width: .714rem; 
    height: .714rem;
    line-height: .714rem; 
    border-top: 1px solid #c7c7ca; 
    border-left: 1px solid #c7c7ca;
    -webkit-transform: rotate(45deg); 
    transform: rotate(45deg); 
    position: relative; 
    top: .429rem; 
    margin-left: 20%;
}
.fixhd{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 9.357rem;
}
.lb_box{
    background-color: #fff; padding-left: 1rem;
    font-size: .964rem;
    padding-bottom: 1rem;
}
.lb_box .lis{
    display: block;
    padding:1rem 1rem .857rem 0; 
}
.lb_box .lis .p1 .prc{
    color: #ff4e72;
    font-weight: bold;
}
.lb_box .lis .p1 .fr{
    color: #333; font-size: 92%;
}
.lb_box .lis .p2{
    margin-top: .286rem;
    font-size: 92%; color: #999; 
}
.loading{
    text-align: center; padding: .714rem 0;
    font-size: 1rem;
}
.loading .img{
    width: 2.143rem;
    height: 2.143rem;
    vertical-align: -.571rem;
    margin-right: .214rem;
}
.apui_cell{
  padding-bottom: 1rem;
}
</style>

