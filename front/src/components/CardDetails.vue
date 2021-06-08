<template>
  <div>
    <b-card
      :title="titulo"
      style="width: 25rem; heigth: 30rem"
      class="mb-2"
    >
      <span> {{ id }} </span>
      <p> {{ desarrollador }}</p>
      <p> {{ genero }}</p>
      <p> Lanzamiento: {{ lanzamiento }}</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    titulo: String,
    id: Number,
    desarrollador: String,
    genero: String,
    lanzamiento: String,
  },
};
</script>

<style scoped>
span{
  font-size: 12px;
}
</style>