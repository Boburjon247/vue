import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LoginView, RegisrotView, ArticleView, CreatArticleView } from '../views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisrotView
    },
    {
      path: '/article/:slug',
      name: 'article-details',
      component: ArticleView
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: CreatArticleView
    },
  ]
})

export default router
