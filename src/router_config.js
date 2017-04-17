import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/pages/Default'
import unit from '@/pages/unit'
import setting from '@/pages/customer/setting'
import Toast from '@/pages/unit/Toast'
import wmain from '@/pages/wx/wmain'
import NotFoundComponent from '@/pages/NotFound'
import Dialog from '@/pages/unit/Dialog'
import selectPicker from '@/pages/unit/selectPicker'
import addressPicker from '@/pages/unit/addressPicker'
import datetime from '@/pages/unit/datetime'
import swiper from '@/pages/unit/swiper'
import switchs from '@/pages/unit/switch'
import button from '@/pages/unit/button'

import myincome from '@/pages/wx/myincome'

Vue.use(Router)
const routes = [{
		name:'app',
		path: '/',
		component: Default
	},{
		name:'switch',
		path: '/unit/switch',
		props:{
			title:'开关',
		},
		component: switchs
	},{
		name:'button',
		path: '/unit/button',
		props:{
			title:'按钮',
		},
		component: button
	},{
		name:'setting',
		//path: '/customer',
		path: '/customer/:userId',
		props:{
			title:'个人中心',
		},
		component: setting
	},{
		name:'Toast',
		path: '/unit/Toast',
		//path: '/customer/:userId',
		props:{
			title:'提示框',
		},
		component: Toast
	},{
		name:'unit',
		path: '/unit',
		component: unit
	},{
		name:'Dialog',
		path: '/unit/Dialog',
		props:{
			title:'对话框',
		},
		component: Dialog
	},{
		name:'selectPicker',
		path: '/unit/selectPicker',
		props:{
			title:'选择器',
		},
		component: selectPicker
	},{
		name:'swiper',
		path: '/unit/swiper',
		props:{
			title:'滑块轮播',
		},
		component: swiper
	},{
		name:'addressPicker',
		path: '/unit/addressPicker',
		props:{
			title:'地址选择器',
		},
		component: addressPicker
	},{
		name:'myincome',
		path: '/myincome/myincome',
		component: myincome,
		props:{
			title: '我的收益'
		}
	},{
		name:'datetime',
		path: '/unit/datetime',
		props:{
			title:'时间选择器',
		},
		component: datetime
	},{
		name:'wmain',
		path: '/wmain',
		component: wmain
	},{ path: '*', component: NotFoundComponent }]
export default new Router({
    base: "/",
    routes,
    //waitForData: true
})
