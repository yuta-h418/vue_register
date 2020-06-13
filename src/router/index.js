import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import firebase from 'firebase'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
  
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if(requiresAuth){
    if(!currentUser) {
      next({
        path: '/sighnin',
        query: { redirect: to.fullPath }
      })
    }else{
      next()
    }
  }else {
    next()
  }
})



export default router
