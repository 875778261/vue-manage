import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import 'font-awesome/css/font-awesome.min.css'
//import axios from 'axios'
import router from './router'
import service from './service'
import echarts from 'echarts'
Vue.prototype.service = service
//Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
router.beforeEach((to,from,next)=>{
  if (!localStorage.getItem('username')) {
    if (to.path!=='/login') {
      next('/login')
    }else next()
  }
  next()
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
