<template lang="html">
  <div class="">
    <PtNav></PtNav>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[0].url" @click="showImage(img[0].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">CCTV (Circuito Cerrado de Televisión)</p>
                  </div>
                </div>
                <div class="content">
                Protección Total S.A instala a requerimiento del cliente, cámaras en distintos puntos clave, que permiten monitorear imágenes en tiempo real, a través de una transmisión recepcionada en nuestra central de monitoreo. El sistema cuenta con un sistema de captura de imágenes a través de diferentes tecnologías.
                El usuario puede acceder al control de las cámaras desde cualquier punto del mundo mediante internet, utilizando la autenticación previamente otorgada, por nuestra empresa.
                El sistema conforma una base de datos propia, con la capacidad de almacenar la información, al fin de ser utilizada por el cliente y ayudar a las fuerzas públicas competentes según corresponda. De esta manera se logra el objetivo de establecer una red de seguridad que permita monitorear la zona de manera efectiva y evaluar los riesgos según el análisis de las imágenes capturadas. De esta manera lograremos el resultado buscado que es la disminución de ilícitos, la asistencia inmediata ante cualquier siniestro y el control de patrimonio y recursos humanos.
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[1].url" @click="showImage(img[1].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">GPS ( Sistema de Posicionamiento Global)</p>
                  </div>
                </div>
                <div class="content">
                  Protección Total ha desarrollado el servicio de Seguimiento Satelital de vehículos y localización, con el motivo de poder visualizar con exactitud la ubicación de flotas móviles y brindarle así una herramienta indispensable en lo que refiere a logística, permitiéndole optimizar su servicio.
                  Este producto fue diseñado para brindar información en forma ágil a los usuarios del sistema adecuándose a los requerimientos y necesidades de su empresa.
                  Este módulo permite que nuestro cliente ingrese desde cualquier PC al sistema, y validándose con usuario y contraseña, pueda visualizar en un mapa digital, la última posición de los vehículos de su flota, y los eventos que éstos generen, como aperturas de puertas de cabina o carga, desenganche de remolque, igniciones, desconexión de batería y posibilidad de efectuar remotamente la detención de la unidad, permitiendo así cumplir con las exigencias de las compañías de seguro.
                  Toda esta información se puede consultar online, desde su Pc, notebook, celulares smartphone, solicitando información de los recorridos históricos.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[2].url" @click="showImage(img[2].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Monitoreo de Alarmas</p>
                  </div>
                </div>
                <div class="content">
                Esta tecnología de última generación brinda un sistema de seguridad dinámico siendo un sistema del tipo modular, que permite agregarle una gran variedad de dispositivos, los cuales nos permiten conformar un servicio a la medida de las necesidades de cada cliente.
                El circuito tecnológico-operativo de Protección Total, reúne las más altas condiciones profesionales, para otorgarle una red inteligente de seguridad integral, permanentemente monitoreado.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[3].url" @click="showImage(img[3].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Controles de acceso</p>
                  </div>
                </div>
                <div class="content">
                Los controles de accesos no solo le permiten proteger la infraestructura, sino también controlar y registrar el movimiento de personas. Permitiendo o invalidando entradas, controlando horarios de entrada-salida, nos permite checkear el presentismo y ausentismo del personal facilitando de esta manera el control de las horas laborales.
                También lo podemos aplicar mediante un dispositivo en oficinas o sectores con restricciones.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[4].url" @click="showImage(img[4].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Backup ante corte de línea telefónica</p>
                  </div>
                </div>
                <div class="content">
                Los sistemas tradicionales de alarmas tienen como medio de transmisión  una línea telefónica donde se enlaza el sistema; con el riesgo que esto implica si la misma dejare de funcionar por causas técnicas o por la acción de terceros con fines ilícitos.
                Protección Total S.A cuenta con tecnología de última generación para estas situaciones, ofreciendo sistemas secundarios e inalámbricos para transmitir, aunque la línea sufra un desperfecto y/o sabotaje.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[5].url" @click="showImage(img[5].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Incendios</p>
                  </div>
                </div>
                <div class="content">
                  Las nuevas exigencias del mercado, compañías de seguro, seguridad civil, etc. nos llevaron a la implementación de circuitos de detección. Dicho sistema apunta directamente a un alerta temprano ante un incendio.
                  La tecnología se centra en una placa maestra que administra sensores de humo, de gas, de cambios bruscos de temperatura, barreras de humo, avisadores manuales de incendio, luces estroboscópicas, sirenas y sistemas de audio-evacuación.
                  Esta propuesta se divide en dos secciones importantes, sistemas analógicos y sistemas inteligentes.
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[6].url" @click="showImage(img[6].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Seguridad perimetral</p>
                  </div>
                </div>
                <div class="content">
                  Este desarrollo fue concebido como una solución para conformar anillos de seguridad, en los objetivos que vigilamos. Una norma básica en nuestro rubro es detectar cualquier situación anormal lo antes posible y lo más lejano del lugar que protejemos. Es por ello que el perímetro es uno de los puntos clave para desarrollar un sistema de seguridad electrónica.
                  También podemos incorporar a este servicio los dispositivos de detección a través de barreras infrarrojas, las cuales forman una línea virtual a través de haces de luz.
                  La gran variedad de dispositivos nos permite crear una solución acorde a la arquitectura del lugar.
                  <br>
                  Cable sensor
                  <br>
                  Barrera infrarroja
                  <br>
                  Barrera microondas
                  <br>
                  Cerco eléctrico
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[7].url" @click="showImage(img[7].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Central de monitoreo</p>
                  </div>
                </div>
                <div class="content">
                  Nuestra central de monitoreo cuenta con la más alta calidad en tecnología y recursos humanos, los cuales son entrenados continuamente para la reacción y contención en situaciones de emergencia.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[8].url" @click="showImage(img[8].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Asistencia de móviles</p>
                  </div>
                </div>
                <div class="content">
                Protección Total S.A cuenta con una flota automotriz de innovación permanente y
                personal altamente capacitado para el abordaje en la prevención y
                actuación ante situaciones de riesgo.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="img[9].url" @click="showImage(img[9].url)" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">Intrusión</p>
                  </div>
                </div>
                <div class="content">
                  Nuestro sistema ha sido concebido para ser aplicado en la protección electrónica de domicilios, comercios, industrias y empresas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PtZoom :show="show" :toogleModal="toogleModal" :img="selectedimg"></PtZoom>
  </div>
</template>

<script>
import PtZoom from '@/components/shared/Zoom.vue'
import PtNav from '@/components/main/Nav.vue'
export default {
  data () {
    return {
      show: false,
      img: [
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/cctv.jpg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/gps.jpg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/monitoreo.jpeg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/controldeacceso.jpeg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/WhatsApp+Image+2017-09-12+at+11.44.57.jpeg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/WhatsApp+Image+2017-09-12+at+13.07.54.jpeg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/seguridadperimetral.jpeg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/centraldemonitoreo.jpg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/asistenciamoviles.jpeg'},
        {url: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/services/intrusion.jpg'}
      ],
      selectedimg: ''
    }
  },
  methods: {
    toogleModal () {
      this.show = !this.show
    },
    showImage (i) {
      this.selectedimg = i
      this.toogleModal()
    }
  },
  components: {
    PtNav,
    PtZoom
  }
}
</script>

<style lang="css" scoped>
.content{
  text-align: justify;
}
img:hover {
  opacity: 0.7;
}
</style>
