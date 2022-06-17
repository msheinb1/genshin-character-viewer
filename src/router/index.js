import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'

  // /jobs/123 etc where 123 is the id of the job that we want to see
  // shows this in the JobDetailsView.vue
  //when a name is used MOST OF THE TIME it is the same as the component name
  //path: '/jobs/:id
  //need to set props to true
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'details',
    component: DetailsView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
