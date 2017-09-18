<template lang="html">
  <div class="is-fullhd" v-sticky="{zIndex:1}">
      <nav class="navbar is-light">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="https://s3-sa-east-1.amazonaws.com/protecciontotal/img/logo.png">
            </a>
            <a class="navbar-item is-hidden-desktop" href="https://twitter.com/ProtecTotalSA" target="_blank">
              <span class="icon" style="color: #55acee;">
                <i class="fa fa-lg fa-twitter"></i>
              </span>
            </a>

            <div class="button is-light navbar-burger" @click="toogleNav" :class="{ 'is-active': showNav }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="navbar-menu" id="navMenu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">
              <div class="navbar-item">
                <a href="http://200.41.239.242/ProMobile/pages/login">Acceso Clientes</a>
              </div>
            </div>
            <div class="navbar-end">
              <div class="navbar-item" @click="toogleNav">
                <i class="fa fa-home" aria-hidden="true"></i><router-link to="/#init"><a href="#init" v-smooth-scroll>&nbsp;Inicio</a></router-link>
              </div>
              <div class="navbar-item" @click="toogleNav">
                <i class="fa fa-users" aria-hidden="true"></i><router-link to="/#About"><a href="#About" v-smooth-scroll>&nbsp;Nosotros</a></router-link>
              </div>
              <div class="navbar-item" @click="toogleNav">
                <i class="fa fa-folder-open" aria-hidden="true"></i><router-link to="/#Services"><a href="#Services" v-smooth-scroll>&nbsp;Servicios</a></router-link>
              </div>
              <div class="navbar-item" @click="toogleNav">
                <i class="fa fa-phone" aria-hidden="true"></i><router-link to="/#Contact"><a href="#Contact" v-smooth-scroll>&nbsp;Contacto</a></router-link>
              </div>
            </div>
          </div>
        </nav>
  </div>
</template>

<script>
import VueSticky from 'vue-sticky'
export default {
  data () {
    return {
      showNav: false
    }
  },
  directives: {
    'sticky': VueSticky
  },
  methods: {
    toogleNav () {
      this.showNav = !this.showNav
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
    }
  }
}
</script>

<style lang="css" scoped>
.navbar {
    width: 100%!important;
    z-index: 99999!important;
    left: 0!important;
    right: 0!important;
    margin: 0!important;
}
.navbar-end{
  margin-right: 40px;
}
.navbar-item{
  font-family: 'Montserrat', sans-serif;
}
</style>
