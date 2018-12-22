import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
  state: {
      form: {
              name: '',
              id: '',
              gender: '',
              major: ''
          }
  },
  mutations: {
    updateMessage (state, message) {
      state.form= message
    }
 }
})