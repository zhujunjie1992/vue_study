import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入 Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入 elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import "@/assets/css/tailwind.css"

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
