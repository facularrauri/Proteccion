<template lang="html">
  <div id="init">
    <div class="container1">
        <swiper :options="swiperOption">
          <swiperSlide>
            <img src="https://s3-sa-east-1.amazonaws.com/protecciontotal/static/slider/sliderlogo.png" class="custom">
            <div class="welcome">
              <h1 class="animated fadeInLeft" style="color:black;font-size:45px;font-family:Montserrat">BIENVENIDOS A <span style="color:#e38f42">PROTECCION TOTAL</span></h1>
            </div>
          </swiperSlide>
          <swiper-slide>
            <img class="custom2" src="https://protecciontotal.s3-sa-east-1.amazonaws.com/img/backgrounds/bg-landing-2.png">
              <div class="form-contact">
                <PtTopContent></PtTopContent>
              </div>
          </swiper-slide>
          <div class="img-overlay">
            <a href="#About" class="btn" v-smooth-scroll><i class="fa fa-angle-down animated1 bounce" aria-hidden="true"></i></a>
          </div>
          </swiper>
      </div>
    <PtNav></PtNav>
    <PtAbout v-scrollreveal.reset></PtAbout>
    <PtVideo></PtVideo>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <hr>
      </div>
    </div>
    <PtClients v-scrollreveal.reset></PtClients>
    <PtServices v-scrollreveal.reset></PtServices>
  </div>
</template>

<script>
import PtVideo from '@/components/shared/Video.vue'
import PtNav from '@/components/main/Nav.vue'
import PtAbout from '@/components/main/About.vue'
import PtClients from '@/components/main/Clients.vue'
import PtServices from '@/components/main/Services.vue'
import PtTopContent from '@/components/main/TopContent.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide,
    PtVideo,
    PtTopContent,
    PtNav,
    PtAbout,
    PtClients,
    PtServices
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        virtualTranslate: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        autoplayStopOnLast: true,
        effect: 'fade',
        speed: 3000
      }
    }
  }
}
</script>

<style lang="css" scoped>
/* ----------- Screens ----------- */
@media screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 1) {
    .swiper-container {
    height: 100vh !important;
  }
}
@media screen
  and (min-device-width: 1601px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) {
    .swiper-container {
    height: 100vh !important;
  }
}
/* ----------- Retina Screens ----------- */
@media screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) {
    .swiper-container {
    height: 100vh !important;
  }
}
/* ----------- iPhone 4 and 4S ----------- */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .swiper-container {
      height:100vh;
  }
}
@media only screen
      and (min-device-width: 320px)
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape) {
        .swiper-container {
          height:100vh;
    }
  }
/* ----------- iPhone 5 and 5S ----------- */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .swiper-container {
      height:100vh ;
  }
}
@media only screen
    and (min-device-width: 320px)
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
      .swiper-container {
        height:100vh;
  }
  }
/* ----------- iPhone 6 ----------- */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .swiper-container {
      height:100vh;
      }
}
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    .swiper-container {
      height:100vh;
      }
}
/* ----------- iPhone 6+ ----------- */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {
    .swiper-container {
      height:100vh ;
      }
}
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
    .swiper-container {
      height:100vh;
      }
}
/* ----------- Ipad ----------- */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {
    .swiper-container {
      height:100vh;
      }
}
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {
    .swiper-container {
      height:100vh;
      }
}
/* ----------- Galaxy S4 ----------- */
@media screen
    and (device-width: 320px)
    and (device-height: 640px)
    and (-webkit-device-pixel-ratio: 3)
    and (orientation: portrait) {
      .swiper-container {
        height:100vh;
        }
  }
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {
    .swiper-container {
      height:100vh;
      }
}
/* ----------- Asus ----------- */
@media only screen
      and (min-device-width: 412px)
      and (max-device-height: 732px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait) {
        .swiper-container {
          height:100vh;
          }
      }
@media only screen
      and (min-device-width: 412px)
      and (max-device-height: 732px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: landscape) {
        .swiper-container {
          height:100vh;
          }
}

.container1{
  width: 100%
}
.img-overlay{
  bottom: 1vh;
}

.custom2{
  width: 100%;
  height: 100%;
}
.form-contact{
  position: absolute;
  left: 0px;
  right: 0px;
}
.animated{
  animation-duration: 3s
}
.animated1{
 animation-duration: 2s;
 animation-iteration-count: infinite;
 animation-timing-function: linear;
}
.fa{
font-size: 50px;
color: #e38f42
}
.btn{
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  background-color: transparent;
  border: none;
}
//.btn:hover {
    background-color: white;
    color: black;
}
.welcome{
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
.img-overlay {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
