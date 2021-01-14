import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form.js'
import admin from './modules/admin.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  
  },
  actions: {
  
  },
  modules: {
    form,
    admin
  }
})
