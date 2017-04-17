<template>
  <header class="app-header" v-if="store.headerStatus">
    <div class="app-header-back fa" @click="$router.back()" v-show="$route.path!=='/'"></div>
    <div class="center">{{store.currentPageName}}</div>
  </header>
</template>
<script>
export default {
  data(){
    return {
      store : this.$store.state
    }
  }
}
</script>