/*
* @Author: Yanbiao
* @Date:   2018-01-31 19:14:06
* @Last Modified by:   Yanbiao
* @Last Modified time: 2018-01-31 19:33:29
*/

'user strict';

var __mm= require('util/mm.js');

var _user ={
	checkLogin:function(resolve,reject){
		__mm.request({
			url:__mm.getServerUrl('/user/get_user_info.do'),
			method:"POST",
			success:resolve,
			error:reject
		});
	},
	logout:function(resolve,reject){
		__mm.request({
			url:__mm.getServerUrl('/user/logout.do'),
			method:"POST",
			success:resolve,
			error:reject
		});
	}
}

module.exports = _user;