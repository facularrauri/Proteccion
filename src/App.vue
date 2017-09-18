<template>
  <div id="app">
    <router-view></router-view>
    <PtFooter></PtFooter>

  </div>
</template>

<script>
import PtNav from '@/components/main/Nav.vue'
import PtFooter from '@/components/layout/Footer.vue'
export default {
  components: {
    PtFooter,
    PtNav
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
