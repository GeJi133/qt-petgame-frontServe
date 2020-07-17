/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './model/user'
import pet from './model/pet'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username:"",
    test:""
  },

  mutations: {
    // 修改token，并将token存入localStorage
    CHANGE (state) {
      state.test = "1";
    },
    CHANGEUSERNAME (state,username) {
      state.username = username;
      console.log("username",username);
      localStorage.setItem('username',username);
    },

  },
  modules: {
    user,
    pet,
  }
})

