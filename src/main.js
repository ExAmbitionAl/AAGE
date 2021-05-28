import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import 'typeface-roboto/index.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
