import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$hostname =  process.env.VUE_APP_SERVICE_URL


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
