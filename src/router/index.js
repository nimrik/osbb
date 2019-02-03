import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store/index'
import Registration from '@/components/Auth/Registration'
import InProgress from '@/components/InProgress'
import FormDetails from '@/components/Auth/FormDetails'
import Moderation from '@/components/Auth/Moderation'
import TenantsIntegration from '@/components/Auth/TenantsIntegration'
import Dashboard from '@/components/Dashboard'

Vue.use(Router);

const state = store.state.isAuth;


export default new Router({
  mode: "history",
  base: '/dashboard',
  routes: [
    {path: '/', name: 'Dashboard', component: Dashboard},
    {path: '/InProgress', name: 'InProgress', component: InProgress},
    {path: '/Registration',
      name: 'Registration',
      component: Registration,
      beforeEnter(to, from, next) {
        state ? next(false) : next()
      }
    },
    {path: '/FormDetails',
      name: 'Details',
      component: FormDetails,
      beforeEnter(to, from, next) { state ? next(false) : next()}
    },
    {path: '/Moderation',
      name: 'Moderation',
      component: Moderation,
      beforeEnter(to, from, next) { state ? next(false) : next() }
    },
    {path: '/TenantsIntegration',
      name: 'TenantsIntegration',
      component: TenantsIntegration,
      beforeEnter(to, from, next) { state ? next(false) : next() }
    }
  ]
})
