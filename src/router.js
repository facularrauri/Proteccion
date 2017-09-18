import Init from '@/components/main/Init.vue'
import Rservices from '@/components/main/Rservices.vue'

const routes = [
  { path: '/', component: Init, name: 'inicio' },
  { path: '/services', component: Rservices, name: 'services', meta: { scrollToTop: true } }
]

export default routes
