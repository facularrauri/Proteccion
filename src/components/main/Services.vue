<template lang="html">
  <section class="background-image" id="Services">
    <div class="about-us-container section-container section-container-image-bg">
      <div class="container">
          <div class="columns">
              <div class="column is-12 about-us section-description wow fadeIn">
                  <h2>¿Por qué elegirnos?</h2>
                  <p class="medium-paragraph">Protección Total S.A. a lo largo de su trayectoria ha  desarrollado un sistema de seguridad integral que complementa con seguridad física, satelital y electrónica. La ventaja competitiva radica en la atención personalizada al cliente las 24.00 hrs, la inmediata asistencia y la pronta respuesta ante cualquier contingencia.</p>
              </div>
          </div>
          <div class="columns">
              <div class="column is-4 about-us-box wow fadeInUp">
                <div class="about-us-photo">
                  <img src="https://s3-sa-east-1.amazonaws.com/protecciontotal/img/about/4.jpg" alt="john-doe" data-at2x="../../assets/img/about/4.jpg">
                  <div class="about-us-role">24/7</div>
                </div>
                  <h3>Asistencia las 24hs.</h3>
              </div>
              <div class="column is-4 about-us-box wow fadeInDown">
                <div class="about-us-photo">
                  <img src="https://s3-sa-east-1.amazonaws.com/protecciontotal/img/about/5.jpg" alt="tim-brown" data-at2x="../../assets/img/about/5.jpg">
                  <div class="about-us-role">30+</div>
                </div>
                  <h3>Móviles propios</h3>
              </div>
              <div class="column is-4 about-us-box wow fadeInUp">
                <div class="about-us-photo">
                  <img src="https://s3-sa-east-1.amazonaws.com/protecciontotal/img/about/6.jpg" alt="sarah-red" data-at2x="../../assets/img/about/6.jpg">
                  <div class="about-us-role">IRAM</div>
                </div>
                  <h3>Certificación IRAM</h3>
              </div>
          </div>
          <div class="columns">
              <div class="column is-3 features-box wow animated fadeInUp">
                <div class="features-box-icon"><router-link :to="{name:'services'}"><i class="fa fa-wifi bounce1"></i></router-link></div>
                  <h3>Disparo de alarma</h3>
                  <p>El sistema de alarma nos envía la señal a nuestra central de monitoreo 24/7.</p>
                </div>
                <div class="column is-3 features-box wow animated fadeInDown">
                <div class="features-box-icon"><router-link :to="{name:'services'}"><i class="fa fa-home bounce1"></i></router-link></div>
                  <h3>Central de monitoreo</h3>
                  <p>Nuestros operadores recepcionan la señal y ejecutan el protocolo específico.</p>
                </div>
                <div class="column is-3 features-box wow animated fadeInUp">
                <div class="features-box-icon"><router-link :to="{name:'services'}"><i class="fa fa-car bounce1"></i></router-link></div>
                  <h3>Protocolo de seguridad</h3>
                  <p>Envío de móvil y comunicación con fuerzas de seguridad.</p>
                </div>
                <div class="column is-3 features-box wow animated fadeInDown">
                <div class="features-box-icon"><router-link :to="{name:'services'}"><i class="fa fa-check bounce1"></i></router-link></div>
                  <h3>Resolución de evento</h3>
                  <p>Realizado el protocolo de seguridad y en permanente comunicación con el cliente, se brinda una solución eficaz.</p>
                </div>
          </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>

@keyframes bounce1 {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
}

.bounce1 {
  animation-name: bounce1;
  transform-origin: center bottom;
}

.bounce1:hover, .bounce1:focus, .bounce1:active {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}



@media screen and ( max-width:768px ) {
  .background-image {
    background-size: cover !important;
  }
}

.background-image{
  background-image: url(https://s3-sa-east-1.amazonaws.com/protecciontotal/img/backgrounds/bg-landing.jpg);
  background-repeat: no-repeat;
  background-position: center;
}
.about-us-container {
  padding-bottom: 65px;
}

.about-us-box { padding-top: 30px; padding-bottom: 15px; }

.about-us-box .about-us-photo { position: relative; width: 160px; margin: 0 auto; }
.about-us-box .about-us-photo img { -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; }

.about-us-box .about-us-photo .about-us-role {
	position: absolute; bottom: 10px; right: 0; padding: 3px 8px; background: #e38f42;
	font-size: 13px; color: #fff; line-height: 15px; text-transform: uppercase;
	-moz-border-radius: 14px; -webkit-border-radius: 14px; border-radius: 14px;
}

.about-us-box p { opacity: 0.8; }

.about-us-box .about-us-social { margin-top: 5px; font-size: 28px; line-height: 36px; }
.about-us-box .about-us-social a { margin: 0 7px; color: #fff; color: rgba(255, 255, 255, 0.8); }
.about-us-box .about-us-social a:hover, .about-us-box .about-us-social a:focus { color: #e38f42; }

.columns {
  margin-top: 50px !important;
}
.features { padding-bottom: 30px; }

.features-box {
	padding-top: 15px; padding-bottom: 15px;
	-o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
}
/*.features-box:hover { background: #f8f8f8; }*/

.features-box .features-box-icon {
	width: 120px; height: 120px; margin: 0 auto; font-size: 64px; color: #e38f42; line-height: 120px;
	//background: #f8f8f8; border: 1px solid #fff;
	-moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;
	-o-transition: all .6s; -moz-transition: all .6s; -webkit-transition: all .6s; -ms-transition: all .6s; transition: all .6s;
}
/*.features-box:hover .features-box-icon { border-color: #e38f42; }*/

.features-box h3 { margin-top: 15px; }

.fa{
font-size: inherit;
vertical-align: inherit;
}
</style>
