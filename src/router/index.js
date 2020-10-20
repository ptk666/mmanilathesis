import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Form from '../views/Form.vue'
import Contacts from '../views/Contacts.vue'
import Summary from '../views/Summary.vue'
import Receipt from '../views/Receipt.vue'
import Login from '../views/admin/Login.vue'
import EventManager from '../views/admin/EventManager.vue'
import Registration from '../views/admin/Registration.vue'
import Owner from '../views/admin/Owner.vue'
import OperationSupervisor from '../views/admin/OperationSupervisor.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/form/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/form/contacts/summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/form/contacts/summary/receipt',
    name: 'Receipt',
    component: Receipt
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/eventManager',
    name: 'EventManager',
    component: EventManager
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/owner',
    name: 'Owner',
    component: Owner
  },
  {
    path: '/operationSupervisor',
    name: 'OperationSupervisor',
    component: OperationSupervisor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

