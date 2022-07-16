import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout/1'
  },
  {
    path: '/checkout/1',
    name: 'checkout-address',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
  // {
  //   path: '/checkout/:step',
  //   name: 'checkout-step',
  //   component: () => import('../views/Checkout.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
