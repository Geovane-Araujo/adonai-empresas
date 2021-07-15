import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Sidebar from './components/SideBar/Sidebar.vue'
import VueApexCharts from 'vue-apexcharts'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/app.scss'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueApexCharts)
Vue.component('sidebar', Sidebar)
Vue.component('apexchart', VueApexCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
