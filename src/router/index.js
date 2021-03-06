import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
