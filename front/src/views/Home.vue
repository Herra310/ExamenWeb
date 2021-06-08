<template>
  <div>
    <div class="contenedor">
      <Card
        v-for="juego in juegos"
        :key="juego.id"
        :titulo="juego.titulo"
        :id="juego.id"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["obtenerJuegos"]),
  },
  created() {
    this.obtenerJuegos();
  },
};
</script>

<style>
.contenedor {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 4rem;
}
</style>
