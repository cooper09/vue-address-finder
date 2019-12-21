import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import d3 from 'd3';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  d3,
  render: h => h(App)
}).$mount('#app')
