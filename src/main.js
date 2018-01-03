import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import lodash from 'lodash'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "ie-quiz-dragdrop/src/ie-quiz-dragdrop.vue"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
