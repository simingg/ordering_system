// Import the components you want to define routes for.
import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'

export default [
  { path: '/', component: PageContent },
  { path: '/orders', component: Orders },
  { path: '/modify', name: 'Modify', component: Modify , props: true }
]