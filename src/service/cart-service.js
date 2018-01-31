/*
* @Author: Yanbiao
* @Date:   2018-01-31 19:36:33
* @Last Modified by:   Yanbiao
* @Last Modified time: 2018-01-31 19:48:46
*/

'user strict';

var __mm= require('util/mm.js');

var _cart ={
	getCartCount:function(resolve,reject){
		__mm.request({
			url:__mm.getServerUrl('/cart/get_cart_product_count.do'),
			success:resolve,
			error:reject
		});
	}
}

module.exports = _cart;