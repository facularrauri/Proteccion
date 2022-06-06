<template lang="html">
  <form @submit.prevent="send" id="formp">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-7">
          <div class="topForm">
            <h3>FINANCIA TU ALARMA</h3>
          </div>
              <div class="bottomForm">
              <strong><p v-show="val" class="error has-text-centered">{{ validation }}</p></strong>
              <strong><p v-show="notification" class="has-text-centered success">{{ sendNotification }}</p></strong>
              <div class="field">
                <label class="label"></label>
                <div class="control">
                  <input class="input" type="text" name="nombre" placeholder="Nombre..." v-model="nombre" required>
                </div>
              </div>
              <div class="field">
                <label class="label"></label>
                <div class="control">
                  <input class="input" type="email" name="email" placeholder="Email..." v-model="email" required>
                </div>
              </div>
              <div class="field">
                <label class="label"></label>
                <div class="control">
                  <input class="input" name="telefono" placeholder="Fijo o celular..." v-model="telefono" required>
                </div>
              </div>
              <div class="field">
                <label class="label"></label>
                <div class="control">
                  <input class="input" type="text" name="calle" placeholder="Calle altura, Localidad..." v-model="calle" required>
                </div>
              </div>
              <div class="field">
                <button class="btnn" name="button" @click="send">Enviar</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </form>
</template>

<script>
import Modal from '@/components/Shared/Modal.vue'
/* globals emailjs */
(function () {
  emailjs.init('user_4HGlerV20GQ3uEhe9Jy6B')
})()
export default {
  components: {
    Modal
  },
  data () {
    return {
      show: false,
      nombre: '',
      email: '',
      telefono: '',
      calle: '',
      val: false,
      notification: false
    }
  },
  methods: {
    toggleModal () {
      this.show = !this.show
    },
    send (e) {
      if (this.nombre === '' || this.email === '' || this.telefono === '' || this.calle === '') {
        this.val = true
      } else {
        emailjs.sendForm('default_service', 'proteccion', 'formp')
        this.notification = true
        this.nombre = ''
        this.email = ''
        this.telefono = ''
        this.calle = ''
        this.val = false
      }
    }
  },
  computed: {
    validation () {
      if (this.nombre === '' || this.email === '' || this.telefono === '' || this.calle === '') {
        return 'Todos los campos son obligatorios'
      }
    },
    sendNotification () {
      return 'Gracias, nos contactaremos con usted'
    }
  },
  watch: {
    notification () {
      if (this.notification) {
        setTimeout(() => {
          this.notification = false
        }, 5000)
      }
    },
    val () {
      if (this.val) {
        setTimeout(() => {
          this.val = false
        }, 5000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.success{
  color: hsl(141, 71%, 48%);
}
.error {
  color: hsl(348, 100%, 61%);
}
.topForm {
overflow: hidden;
padding-top: 20px;
padding-left: 20px;
background: #444;
background: rgba(0, 0, 0, 0.65);
text-align: left;
-moz-border-radius: 4px 4px 0 0;
-webkit-border-radius: 4px 4px 0 0;
border-radius: 4px 4px 0 0;
}
.topForm h3 {font-family: Roboto; margin-top: 0; color: #fff; }
.topForm p { font-family: Roboto; opacity: 0.8; color: #fff; }

.bottomForm {
padding-left: 20px;
padding-bottom: 20px;
padding-right: 40px;
padding-top: 1px;
background: #444;
background: rgba(0, 0, 0, 0.5);
text-align: left;
-moz-border-radius: 0 0 4px 4px;
-webkit-border-radius: 0 0 4px 4px;
border-radius: 0 0 4px 4px;
}
.bottomForm .terms { margin: 15px 0 0 0; opacity: 0.8; color: #fff; text-align: center; }
.bottomForm .terms a:hover,
.bottomForm .terms a:focus { outline: 0; border-bottom: 1px dotted #e38f42; }

.bottomForm input[type="text"]:focus,
.bottomForm input:focus,
.bottomForm input.input:focus {
	outline: 0; background: #fff; border: 3px solid #e38f42;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
}

.bottomForm input[type="text"]::-moz-placeholder,
.bottomForm input::-moz-placeholder,
.bottomForm input.input::-moz-placeholder { color: #888; }

.bottomForm input[type="text"]:-ms-input-placeholder,
.bottomForm input:-ms-input-placeholder,
.bottomForm input.input:-ms-input-placeholder { color: #888; }

.bottomForm input[type="text"]::-webkit-input-placeholder,
.bottomForm input::-webkit-input-placeholder,
.bottomForm input.input::-webkit-input-placeholder { color: #888; }

.btnn {
    width: 100%;
    height: 35px;
    vertical-align: middle;
    background: #e38f42;
    border: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    padding-right: 12.5px;
    font-weight: 400;
    color: #fff;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    text-shadow: none;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
}

.btnn:hover { opacity: 0.6; color: #fff; }
.btnn:active { outline: 0; opacity: 0.6; color: #fff; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; }
.btnn:focus { outline: 0; opacity: 0.6; background: #e38f42; color: #fff; }
.btnn:active:focus, .btn.active:focus { outline: 0; opacity: 0.6; background: #e38f42; color: #fff; }

</style>
