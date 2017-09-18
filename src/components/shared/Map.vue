<template>
  <div class="google-maps">
    <gmap-map :center="center" :zoom="11" class="custom3">
    <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lat: -34.752507, lng: -58.284554},
      markers: [{
        position: {lat: -34.752507, lng: -58.284554}
      }]
    }
  }
}
</script>

<style lang="css" scoped>
.custom3{
  width: 100%;
  max-width: 100%;
  height: 400px;
  margin-top: 20px;
}

.google-maps gmap-map {
    position: absolute;
    width: 100% !important;
}
</style>
