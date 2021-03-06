// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Resource from 'vue-resource'
import App from './App'
import router from './router'





Vue.config.productionTip = false
import animation from "../libs/animate.css"
import icons from "./common/stylus/icon.styl"
import fonts from "../libs/font.js"
import styles from "../static/css/reset.css"


Vue.use(Resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
