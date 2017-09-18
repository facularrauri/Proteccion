<template>
  <div id="">
    <div class="modal" :class="{'is-active':show}">
      <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
          <img :src="img" alt="">
          </p>
        </div>
        <button @click="toogleModal" class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
</template>

<script>
export default {
  props: ['show', 'toogleModal', 'img']
}
</script>
