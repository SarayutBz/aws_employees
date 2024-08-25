import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Homepage from "../views/homepage.vue"
import Get from "../views/Get.vue"
import getAll from "../views/GetAll.vue"
import add from "../views/Add.vue"
import Delete from "../views/Delete.vue"
import update from "../views/Update.vue"
import Dashboard from "../views/Dashboard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/get',
      name: 'get',
      component: Get
    },
    {
      path: '/getAll',
      name: 'getAll',
      component: getAll
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
