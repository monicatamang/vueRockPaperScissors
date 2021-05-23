import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue';
import Game from '@/views/Game.vue';
import Rules from '@/views/Rules.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Game',
    name: 'Game',
    component: Game
  },

  {
    path: '/Rules',
    name: 'Rules',
    component: Rules
  }
]

const router = new VueRouter({
  routes
})

export default router
