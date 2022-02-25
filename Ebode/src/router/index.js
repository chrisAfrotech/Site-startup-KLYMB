import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

/* const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
*/
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: About
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
// {
//   path: '/navbar1',
//   name: 'navbar1',
//   component: Navbar1
// }
]
/* const router = createRouter({
  history: createWebHistory(),
  routes
}) */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
