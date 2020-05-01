import Vue from 'vue'
import VueRouter from 'vue-router'
import FormBirthday from '../views/FormBirthday.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'FormBirthday',
    component: FormBirthday
  }
]

const router = new VueRouter({
  routes
})

export default router
