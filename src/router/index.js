import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue';
import Game from '@/views/Game.vue';

Vue.use(VueRouter)

const routes = [
  // Creating a path to the login page and setting it as the home page the user sees when arriving to the website
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  // Creating another path to the game page when the user has successfully logged in
  {
    path: '/Game',
    name: 'Game',
    component: Game
  }
]

const router = new VueRouter({
  routes
})

export default router
