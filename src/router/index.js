import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Form from '@/views/Form.vue'
import Contacts from '@/views/Contacts.vue'
import Summary from '@/views/Summary.vue'
import Receipt from '@/views/Receipt.vue'
import Login from '@/views/admin/Login.vue'
import EventManager from '@/views/admin/EventManager.vue'
import Registration from '@/views/admin/Registration.vue'
import Owner from '@/views/admin/Owner.vue'
import OperationSupervisor from '@/views/admin/OperationSupervisor.vue'


Vue.use(VueRouter)

let currentUser = window.localStorage.getItem('user_type');
let hasToken    = window.localStorage.getItem('token')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      name: 'form',
      component: Form
    },
    {
      path: '/form/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/form/contacts/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: '/form/contacts/summary/receipt',
      name: 'receipt',
      component: Receipt
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/eventManager',
      name: 'eventManager',
      component: EventManager,
    },
    {
      path: '/owner',
      name: 'owner',
      component: Owner,
      beforeEnter(to, from, next) {
        if(currentUser == 1) {
          if(hasToken) {
            next();
          }
          else {
            next(false)
          }
          
        }
        else {
          next(false)
        }
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      beforeEnter(to, from, next) {
        if(currentUser == 1) {
          if(hasToken) {
            next();
          }
          else {
            next(false)
          }
          
        }
        else {
          next(false)
        }
      }
    },  
    {
      path: '/operationSupervisor',
      name: 'operationSupervisor',
      component: OperationSupervisor,
      beforeEnter(to, from, next) {
        if(currentUser == 3){
          if(hasToken) {
            next();
          }
          else {
            next(false)
          }
        }
        else {
          next(false)
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})


export default router

