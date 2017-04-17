import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 统一管理接口域名 
let apiPublicDomain = '//vrapi.snail.com/'
const utssils = {
	lml:'fdd'
}
const state = {
    apiUrl: {
        demo: apiPublicDomain + ""
    },
    imghost:'http://172.16.3.42:8080/img/',
    currentPageName: "魔魂",
    OpenId: 'o0SMBs_T7uP-YgJkXcB8OrQIYZu8',
    headerStatus:true,	//头部隐藏
    tabBar:{
    	color:'#666',
    	listcur:0,
    	selectedColor:"#ff4e72",
    	"backgroundColor":"#F7F7FA",
	    "borderShow":true,
	    isShow:true,
	    "list": [{
	      "pagePath": "/",
	      "iconPath": "tabBar/tabBar1.png",
	      "selectedIconPath": "tabBar/tabBarred1.png",  
	      "text": "页面"
	    }, {
	      "pagePath": "/unit",
	      "iconPath": "tabBar/tabBar2.png",
	      "selectedIconPath": "tabBar/tabBarred2.png",
	      "text": "组件"
	    }]
    }
}
export default new Vuex.Store({
    state
})