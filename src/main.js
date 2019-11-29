// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './assets/css/base.css' // 公共样式
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    // 替换标题
    document.title = to.meta.title
  }
  // if(to.meta.requireAuth){
  //     if(store.state.token){
  //         next()
  //     }else{
  //         next({
  //             path: '/login',
  //             query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //         });
  //     }
  // }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
