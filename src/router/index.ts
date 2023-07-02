import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SmileView from '../views/SmileView.vue'
import UnderwaterView from '../views/UnderwaterView.vue'
import HiddenStoriesView from '../views/HiddenStoriesView.vue'
import SoilView from '../views/SoilView.vue'
import BedView from '../views/BedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/smile',
      name: 'smile',
      component: SmileView
    },
    {
      path: '/underwater',
      name: 'underwater',
      component: UnderwaterView
    },
    {
      path: '/hidden',
      name: 'hidden',
      component: HiddenStoriesView
    },
    {
      path: '/soil',
      name: 'soil',
      component: SoilView
    },
    {
      path: '/bed',
      name: 'bed',
      component: BedView
    },

  ]
})

export default router
