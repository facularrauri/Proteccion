<template lang="html">
  <div class="is-fullhd" v-sticky="{zIndex:1}">
      <nav class="navbar is-light">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="https://s3-sa-east-1.amazonaws.com/protecciontotal/img/logo.png">
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
              <div class="navbar-item">
                <a href="https://www.facebook.com/protecciontotalsa/" target="_blank"><span style="color:#3b5998; font-size:1.8em; margin-right:15px;"><i class="fa fa-facebook"></i></span></a>
                <!-- <a href="https://twitter.com/ProtecTotalSA" target="_blank"><span style="color: #55acee; font-size:1.8em; margin-right:15px;"><i class="fa fa-twitter"></i></span></a> -->
                <a href="https://www.instagram.com/protecciontotal/" target="_blank"><span class="instagram"><i class="fa fa-instagram"></i></span></a>
              </div>
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
.navbar-item{
  font-family: 'Montserrat', sans-serif;
}

.instagram {
  color: white;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  font-size: 1.5em;
  padding: 0px 3px;
  border-radius: 5px;
}
</style>
