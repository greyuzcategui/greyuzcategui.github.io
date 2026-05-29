import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExtendedResumeView from '../views/ExtendedResumeView.vue'
import TechnicalSkillsView from '../views/TechnicalSkillsView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/extended-resume',
      name: 'extended-resume',
      component: ExtendedResumeView
    },
    {
      path: '/technical-skills',
      name: 'technical-skills',
      component: TechnicalSkillsView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
