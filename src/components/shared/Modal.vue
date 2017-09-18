<template lang="html">
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Términos y condiciones</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Por favor, lea atentamente:</p>
        <h3>1. Promoción Kit Básico sin costo de instalación</h3>
        <p>Válida hasta el 31 de Julio del 2017, para los pagos con tarjeta de crédito (American Express, Master Card, Visa, Cabal, Diners).</p>
        <p>Pago de abono anual adelantado siendo financiado por tarjeta de crédito.</p>
        <p>El equipo instalado es entregado en comodato hasta la finalización del contrato o ruptura del mismo.</p>
        <p>Kit Básico de alarma Incluye central alarma, teclado, transformador 12v, batería, sirena de interiores, 2 sensores*, filtro telefónico y cartelería disuasiva.</p>
        <p>* 2 sensores, con la opción de ser de apertura o movimiento, a criterio del abonado o determinado por el profesional instalador.</p>
      </section>
      <footer class="modal-card-foot">
        <button type="button" class="button" data-dismiss="modal" @click="toggleModal">Leí y acepto los términos y condiciones</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    toggleModal () {
      this.$emit('toggle', {})
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  margin: auto;
}
.modal-card{
  margin-top: 50px !important;
}
</style>
