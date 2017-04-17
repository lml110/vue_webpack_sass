<template>
  <div class="app-page">
    我是404
  </div>
</template>

<script>
export default {
  data () {
    return {
      store:this.$store.state
    }
  },
  created(){
   this.store.headerStatus = false;
   console.log('sdf');
  },
  methods: {
    
  }
}
</script>

