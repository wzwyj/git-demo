import { login } from '../../api/sites.js'

const state = {
	token: "",
	username: ""
}

const mutations = {
	UPDATEUSERINFO: function (state, payload) {
		state.token = payload.access_token;
		state.username = payload.username;
	}
}

const getters = {
	getToken: function (state) {
		return state.token;
	},
	getUserName: function (state) {
		return state.username;
	}
}

const actions = {
	logins: function (context, payload) {
		console.log(payload);
		// var jsonStr = JSON.stringify(payload);
		// console.log(typeof payload);
		// var obj={"username":"test2024",password:"1234567"};
		// alert(jsonStr);
		return new Promise((resolve) => {
			login(payload).then(res => {
				console.log(res);
				resolve(res)
				context.commit("UPDATEUSERINFO", res.data.data)
			})
		})

	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}