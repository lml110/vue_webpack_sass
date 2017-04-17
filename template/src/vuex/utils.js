import Vue from 'vue';
import $ from 'webpack-zepto';
import axios from 'axios'
const utils = {};
/**
 * 验证表单函数
 */
 utils.getCheck = {
    checkEmail(val) {
        var filter = /^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    checkPhone(val) {
        var filter = /^1\d{10}$/;

        if (filter.test(val)) {
            return true;
        } else {
            return false;
        }
    }
};

 utils.fmtDate = (date, fmt) => { // author: meizz
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};
//fmtDate(new Date(time), 'yyyy-MM-dd hh:mm');


/**
 * 配置节流函数
 * @param  {[Function]}  fn     [要执行的函数]
 * @param  {[Number]}  delay    [延迟执行的毫秒数]
 * @param  {[Number]}  mustRun  [至少多久执行一次]
 * @return {[Function]}         [节流函数]
 */
 utils.throttle = (fn, wait, mustRun) => {
    let timeout;
    let startTime = new Date();
    return function() {
        let context = this;
        let args = arguments;
        let curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
            fn.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(fn, wait);
        }
    };
};
utils.$alert = (msg) => {
    let $alert = $('<div class="week-alert" id="alertWeek"></div>');
    $alert.html(msg);
    $alert.addClass('alert-show');
    console.log($alert);
    //$('body').prepend($alert)
    clearTimeout(timer);
};
utils.lmlpop = (msg) => {
    console.log(msg,'$lmlpop');
};
//筛选数据==是否满足条件
utils.filterfn = (data,lmlfn,type) => {
    var dds = [],tempstats;
    data.map(function(el, ix) {
        tempstats = lmlfn(el,ix);
        if(type){
            if(tempstats) dds.push(el[type])
        }else{
            if(tempstats) dds.push(el)
        };
    });
    return dds;
};
//筛选数据==是否满足条件1
utils.filtefn1 = (data,lmlfn) => {
    var dds = [],tempstats;
    data.map(function(el, ix) {
        tempstats = lmlfn(el,ix);
        if(tempstats!==undefined) dds.push(tempstats)
    });
    return dds;
};
utils.formatTime = (date) => {
    var year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds(),
      obj = {
        'year':year,
        'month':month,
        'day':day,
        'hour':hour,
        'minute':minute,
        'second':second
      };
  for(let p in obj){  
      obj[p] = utils.formatNumber(obj[p])
  };
  return obj;
}
utils.getDayOfTheMonth = (month) => {
    if (month == 2) return 28;
    if (month > 7) {
        if (month % 2 == 1){
          return 30;
        }else{
          return 31;
        } 
    }else {
        if (month % 2 == 1){
          return 31;
        }else{
          return 30;
        } 
    }
}
utils.formatNumber = (n) => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
const unit = {};
unit.showToast = (obj) => {
    let $toast = $('#wxToast'),icon;
    if(obj.icon=='loading'){
        icon = "weui-loading";
    }else if(obj.icon=='sucess'){
        icon = "weui-icon-success-no-circle";
    };
    let html = '<div class="weui-toast">'+
        '<i class="'+icon+' weui-icon_toast"></i>'+
        '<p class="weui-toast__content">'+obj.title+'</p>'+
        '</div>';
    console.log($('#wxToast'));
    $toast.html(html).show();
};
unit.hideToast = () =>{
    $('#wxToast').hide();
}
unit.showModal = (obj) => {
    let $Dialog = $('#wxDialogs');
    let dlogclas = (obj.state==2)?'weui-skin_android':'';
    let html = '<div class="weui-mask"></div>';
        html += '<div class="weui-dialog '+dlogclas+'">';
        if(obj.title) html += '<div class="weui-dialog__hd"><strong class="weui-dialog__title">'+obj.title+'</strong></div>';
        html += '<div class="weui-dialog__bd">'+obj.content+'</div><div class="weui-dialog__ft">';
    //if(typeof obj.sureFn == "function") {
    
    if(obj.cancelbtn) html += '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">'+obj.cancelbtn+'</a>';
    if(obj.surebtn) html += '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">'+obj.surebtn+'</a>';
    html += '</div></div>';
    //if(typeof obj.cancelFn == "function") {
    $Dialog.html(html).show();
    $('.weui-dialog__btn_default',$Dialog).click(function () {
        $Dialog.html('').hide();
        typeof obj.cancelFn == "function" && obj.cancelFn();
    });
    
    $('.weui-dialog__btn_primary',$Dialog).click(function () {
        $Dialog.html('').hide();
        typeof obj.sureFn == "function" && obj.sureFn();
    });
};
/**
 * 全局注册弱提示
 */
export default {
    install() {
        let timer = null;
        Vue.prototype.utils = utils;
        Vue.prototype.unit = unit;
        Vue.prototype.requestfn = (url,requedata,sucessfn,errorfn) => {
            //console.log($http);
            if(errorfn){
                axios({
                  method: 'post',
                  url: url,
                  params: requedata
                }).then(res => {
                  sucessfn(res);
                }).catch(error => {
                    errorfn(error);
                });
            }else{
                axios({
                  method: 'post',
                  url: url,
                  params: requedata
                }).then(res => {
                  sucessfn(res);
                })
            };
        };
        Vue.prototype.successLoadImg = (event) => {
            console.log(event,event.target);
            if (event.target.complete == true) {
                event.target.classList.remove("default-image");;
                //var imgParentNode = event.target.parentNode; //父元素
                /*if(imgParentNode.classList.contains('show-img')==true){
                    console.log(imgParentNode.classList);
                    imgParentNode.style.background = "#000";
                }*/
            }
        };
        Vue.prototype.errorLoadImg = function(event) {
            event.target.classList.add("default-image");;
        };
    }
};
/*export default (Vue) => {
    Object.keys(utils).forEach(key => {
        Vue.filter(key, utils[key])
    })
}*/
/*export default utils*/