/*
* @Author: Yanbiao
* @Date:   2018-01-31 20:12:16
* @Last Modified by:   Yanbiao
* @Last Modified time: 2018-01-31 20:46:45
*/
'use strict';
require('./index.css');
var _mm=require('util/mm.js');

var header = {
	init:function(){
		this.bindEvent();
	},
	onload:function(){
		var keyword = _mm.getUrlParam('keyword');
		if(keyword){
			$('#search-input').val(keyword);
		};
	},
	bindEvent:function(){
		var _this = this;
		$('#search-btn').click(function(){
			_this.searchSubmit();
		});

		$('#search-input').keyup(function(e){
			if(e.keyCode===13){
				_this.searchSubmit();
			}
		});
	},
	searchSubmit:function(){
		var keyword=$.trim($('#search-input').val());
		if(keyword){
			window.location.href='./list.html?keyword='+keyword;
		}else{
			_mm.goHome();
		}
	}
};

header.init();