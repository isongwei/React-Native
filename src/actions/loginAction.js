'use strict'
import * as types from '../constants/loginType'

//模拟用户信息

let user = {
	name: 'zhangsan',
	age: 24
}

//访问登陆接口  根据返回结果来划分action属于哪个type
//然后返回对象  给reducer 处理


export function login() {

	console.log('登陆方法')
	return dispatch => {
		dispatch(isLogining())
		let result = fetch('https://www.baidu.com')
			.then((res) => {
				dispatch(loginSuccess(true, user))
			}).catch((e) => {
				dispatch(loginError(false))
			})
	}
}

function isLogining() {
	return {
		type: types.LOGIN_IN_DOING
	}

}

function loginSuccess(isSuccess, user) {
	console.log('success')
	return {
		type: LOGIN_IN_DONE,
		user: user
	}

}

function loginError() {
	console.log('error')
	return {
		type: LOGIN_IN_ERROR
	}
}