<template>
<div>
	<div class="loadNone" v-if="nostate==1">已加载完毕</div>
	<div class="no_record noneData" v-if="nostate==0">
	    <div class="record-imgbox imgbox">
	        <img :src="recordimg" class="recordimg imgbox-img">
	    </div>
	    <div class="recordtxt">近期无记录</div>
	</div>
</div>

</template>
<script>
export default {
  props: ["nostate"],
  data(){
    return {
      store : this.$store.state,
      recordimg:'http://172.16.3.42:8080/img/no_record.jpg'
    }
  },
  created() {
   	//console.log(this.nostate);
  }
}
</script>
<style scoped>
/**近期无记录**/
.no_record{
    text-align: center;
    margin-top: 1.071rem;
}
.record-imgbox{
    border-radius: 100%;
    width: 7.143rem;
    padding-bottom: 7.143rem;
    display: inline-block;
}
.recordtxt{
    font-size: 1.071rem;
    margin-top: .357rem;
}
/* 已加载完毕 */
.loadNone{
    text-align:center;
    padding-bottom: 1.643rem;
    height: 1.786rem;
    line-height: 1.786rem;
    font-size: 1rem;
}
</style>