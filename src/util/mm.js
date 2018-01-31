/*
* @Author: SamYan
* @Date:   2018-01-31 15:22:20
* @Last Modified by:   SamYan
* @Last Modified time: 2018-01-31 16:39:18
*/

'use strict';

var Hogan = require('hogan');

var conf = {
	serverHost: ''
};

var _mm={
	request:function(param){
		var _this = this;
		$.ajax({
			type 	:param.method || 'get',
			url  	:param.url || '',
			dataType:param.type ||'json',
			data 	:param.data || '',
			success	:function(res){
				if(res.status===0){
					typeof param.success ==='function' && param.success(res.data,res.msg)
				}else if(res.status === 10){
					_this.doLogin();
				}else if(res.status===1){
					typeof param.error==='function' && param.error(res.msg);
				}
			},
			error 	:function(err){
				typeof param.error==='function' && param.error(err.statusText);
			}
		});
	},
	getServerUrl: function(path){
		return conf.serverHost+path;
	},
	getUrlParam: function(name){
		var reg=new RegExp('(^|&)'+name +'=([^&]*)(&|$)');
		var result=window.location.search.substr(1).match(reg);
		return result?decodeURIComponent(result[2]):null;
	},
	renderHtml : function(htmlTemplate,data){
		var template =Hogan.compile(htmlTemplate);
		var result = template.render(data);
		return result;
	},
	successTips : function(msg){
		alert(msg || '操作成功!');
	},
	errorTips : function(msg){
		alert(msg || '哪里不对了~');
	},
	validate : function(value,type){
		var value = $.trim(value);
		//非空
		if(type==='require'){
			return !!value;
		}
		//phone
		if('phone' ===type){
			return /^1\d{10}$/.test(value);
		}

		//mail
		if(type==='email'){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}
	},
	doLogin: function(){
		window.location.href='./login.html?redirect=' + encodeURIComponent(window.location.href);
	},
	goHome:function(){
		window.location.href='./index.html';
	}
};

module.exports=_mm;