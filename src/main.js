import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'


Vue.use(ElementUI);
Vue.use(Mint);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
