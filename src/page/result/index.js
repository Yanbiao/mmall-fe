/*
* @Author: Yanbiao
* @Date:   2018-02-01 00:23:12
* @Last Modified by:   Yanbiao
* @Last Modified time: 2018-02-01 00:57:50
*/

'use strict'
require('./index.css');
require('page/common/nav-simple/index.js')
var _mm=require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default';
	var $element=$('.'+type+'-success');
	$element.show();
})