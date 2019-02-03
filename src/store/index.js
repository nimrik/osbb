import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isAuth: false
  },
  getters: {
    isRegistered (state) {
      return state.isAuth
    }
  },
  mutations: {
    isRegistered (state, payload) {
      return state.isAuth = payload
    }
  },
  actions: {

  }
});
