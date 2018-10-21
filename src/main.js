import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'normalize.css'
import './assets/scss/fonts.scss'
import Purecss from 'purecss'

import VueFire from 'vuefire'
Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Purecss,
  render: h => h(App)
}).$mount('#app')
