import Vue from 'vue';
import Vuex from 'vuex';
import Home from './modules/home'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 1000,

  },
  mutations: {

  },
  actions: {


  },
  getters: {},
  modules: {
    Home,
  }
})

export default store;
