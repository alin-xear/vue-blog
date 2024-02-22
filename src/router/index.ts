import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetails from '../views/PostDetails.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
import RealTime from '../views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: PostDetails,
    props: true
  }, 
  {
    path: '/create',
    name: 'Create',
    component: Create
  }, 
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  }, 
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime
  },
  {
    path: '/:pathMatch(.*)*', //will match everything and put it under `$route.params.pathMatch`
    name: 'PathNotFound',
    component: () => import('../views/PathNotFound.vue')
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
