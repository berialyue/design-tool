import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/grab'
    }, {
      path: '/grab',
      name: 'Grab',
      component: () => import('../components/grab.vue')
    }, {
      path: '/kill',
      name: 'Kill',
      component: () => import('../components/kill.vue')
    }, {
      path: '/new',
      name: 'New',
      component: () => import('../components/new.vue')
    }, {
      path: '/manager',
      name: 'Manager',
      component: () => import('../components/manager.vue')
    }, {
      path: '/together',
      name: 'Together',
      component: () => import('../components/together.vue')
    }, {
      path: '/black',
      name: 'Black',
      component: () => import('../components/black.vue')
    }
  ]
})