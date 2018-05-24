import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import StreamHome from '../components/Streams/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/streams',
    component: StreamHome,
    children: [{
      path: '/streams/:id',
      props: true
    }]
  }, {
    path: '*',
    component: NotFound
  }]
})
