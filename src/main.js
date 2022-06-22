import Vue from 'vue'
import App from './App.vue'

// Importa tutto il JS di BS
import "bootstrap";

// Importa tutti i css
import './assets/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
