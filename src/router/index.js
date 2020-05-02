import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormBirthday from '../views/FormBirthday.vue'

Vue.use(VueRouter)
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/form-birthday/:date',
      name: 'FormBirthday',
      component: FormBirthday,
      props: true
    }
  ]

const router = new VueRouter({
  routes
})

export default router
