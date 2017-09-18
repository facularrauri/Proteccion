<template lang="html">
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <div class="delimitador">
        <div class="contenedor">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9Z6MxTrmx-E?rel=0&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

.delimitador{
width:100%;
margin:auto;
}
/* El contenedor con el padding-top crea el tamaño del vídeo */
.contenedor{
height:0px;
width:100%;
max-width:100%; /* Así establecemos el ancho máximo (si lo queremos) */
padding-top:56.25%; /* Relación: 16/9 = 56.25% */
position:relative;
}
/* El iframe se adapta al tamaño del contenedor */
iframe{
position:absolute;
height:100%;
width:100%;
top:0px;
left:0px;
}

</style>
