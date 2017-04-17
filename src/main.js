// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router_config'
import FastClick from 'fastclick'
import VueAxios from 'vue-axios'
import store from './vuex/store'
import utils from './vuex/utils'
import infiniteScroll from 'vue-infinite-scroll'
/*import './vuex/rem'*/
import './scss/index.scss'

Vue.use(VueAxios,Vuex)
Vue.use(utils);
Vue.use(infiniteScroll);

Vue.config.productionTip = false
FastClick.attach(document.body)
//document.body.addEventListener('touchstart', function () {});  
/*window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);*/
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

