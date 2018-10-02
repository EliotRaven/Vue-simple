import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Pages/Home'
import Users from '../components/Pages/Users'
import Posts from '../components/Pages/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
