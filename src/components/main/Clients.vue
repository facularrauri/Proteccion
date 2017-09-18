<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2>Nuestros Clientes</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <swiper :options="swiperOption">
          <swiper-slide v-for="img in images" :key="img.key">
              <img :src="img.image">
          </swiper-slide>
        </swiper>
        <div class="columns">
          <div class="column is-4">
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>

      </div>

    </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      },
      images: [
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/unqui.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/altos1.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/alumax.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/antina.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/autotag.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/blaa.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/cattorini.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/champion.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/elsol.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/extragas.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/fanelli.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/fate.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/gategourmet.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/grandbell.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/jardin.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/kalop.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/kartonsec.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/mcdonalds.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/nine.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/persano.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/plascar.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/remis.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/royalcanin.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/saintgobain.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/sanjuan.png' },
        { image: 'https://s3-sa-east-1.amazonaws.com/protecciontotal/img/clientes/tarjetashopping.png' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.swiper-pagination{
  left: 0;
  right: 0;
  bottom: 1px;
}
.image.is-16by9 img {
  height: auto!important;
}
.custom {
  background-color: white !important;
  border-style: none;
  border-style: solid;

}
img {
  margin-top: 55px;
}
.columns {
  margin-bottom: 20px !important
}
</style>
