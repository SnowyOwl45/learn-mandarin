import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import NotFound from '../views/NotFound.vue'
import Training from '../views/Training.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/training',
    name: 'Training',
    component: Training
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router