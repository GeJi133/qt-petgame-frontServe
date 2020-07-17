import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import pet from '@/components/pet'
import friendPet from '@/components/friendPet'
import login from '@/components/login'
import home1 from '@/components/home1'
import home from '@/components/home'
import adopt from '@/components/adopt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: main
    },
    {
      path: '/pet',
      name: 'pet',
      component: pet
    },
    {
      path: '/friendPet',
      name: 'friendPet',
      component: friendPet
    },
    {
      path: '/pet',
      name: 'pet',
      component: pet
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home1',
      name: 'home',
      component: home1
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: adopt
    },
  ]
})
