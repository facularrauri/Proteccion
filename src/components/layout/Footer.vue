<template lang="html">
  <footer class="footer" id="Contact">
    <div class="container">
      <div class="columns">
        <div class="column is-4 has-text-centered">
          <h3>Sistema Satelital</h3>
          <p class="has-text-centered"><a href="http://200.41.239.242/ProMobile/pages/login" target="_blank" class="button is-hovered">Ingreso</a></p>
        </div>
        <div class="column is-4 has-text-centered">
          <h3>Contacto</h3>
	        <p><i class="fa fa-map-marker"></i> Av. Calchaquí 2981, Quilmes, Buenos Aires</p>
	        <p><i class="fa fa-phone"></i> Teléfono: 4365-3700/0800-222-633267</p>
	        <p><i class="fa fa-envelope"></i> Email: <a href="mailto:info@protecciontotalsa.com.ar">info@protecciontotalsa.com.ar</a></p>
        </div>
        <div class="column is-4 has-text-centered">
          <h3>Somos sociales</h3>
          <p>Respondemos tus consultas en las redes sociales, Sumate a la conversación:</p>
          <p>
            <a href="https://www.facebook.com/protecciontotalsa/" target="_blank"><i class="fa fa-facebook"></i>&nbsp;</a>
            <!-- <a href="https://twitter.com/ProtecTotalSA" target="_blank"><i class="fa fa-twitter"></i></a> -->
            <a href="https://www.instagram.com/protecciontotal/" target="_blank"><i class="fa fa-instagram"></i></span></a>
          </p>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-12">
          <PmMap></PmMap>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import PmMap from '@/components/shared/Map.vue'
export default {
  components: {
    PmMap
  }
}
</script>

<style lang="css" scoped>
  .fa {
    font-size: 1.5em;
  }
  .button{
    background-color: #e38f42;
    margin-top: 1.5em;
    color: white;
  }
  .button:focus{
    border-style: none;
  }
</style>
