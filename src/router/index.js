import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Oficina01 from '../views/oficinas/Oficina_01.vue'
import Inmueble01 from '../views/inmuebles/Inmueble_01.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/oficina_01',
    name: 'oficina01',
    component: Oficina01
  },
  {
    path: '/inmueble_01',
    name: 'inmueble01',
    component: Inmueble01
  }
]

const router = new VueRouter({
  routes
})

export default router
