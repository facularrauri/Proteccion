import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '@/router'
import carousel from 'vue-carousel-3d'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueScrollReveal from '@/directives/scrollreveal'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.use(VueScrollReveal)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDOglsHj2FA3olk8qK0P5LqD4gWp6IZGoM',
    libraries: 'places'
  }
})
Vue.use(carousel)
Vue.use(VueRouter)
Vue.use(routes)

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return { selector: to.hash }
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
