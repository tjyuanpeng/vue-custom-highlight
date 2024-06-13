import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? '/vue-custom-highlight' : undefined),
  routes,
})

export default router
