import Vue from 'vue';
import $ from 'webpack-zepto';
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
/**
 * 全局注册弱提示
 */
export default {
    install() {
        let timer = null;
        Vue.prototype.utils = utils;
    }
};
/*export default (Vue) => {
    Object.keys(utils).forEach(key => {
        Vue.filter(key, utils[key])
    })
}*/
/*export default utils*/