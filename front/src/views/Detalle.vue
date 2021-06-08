<template>
  <div>
    <CardDetail
      class="carta"
      :titulo="juego.data[0].titulo"
      :id="juego.data[0].id"
      :desarrollador="juego.data[0].desarrollador"
      :genero="juego.data[0].genero"
      :lanzamiento="juego.data[0].lanzamiento"
    />
    <b-button class="m-3 btn btn-warning" to="/">Atras</b-button>
  </div>
</template>

<script>
import CardDetail from "../components/CardDetails";
import { mapState, mapActions } from "vuex";

export default {
  name: "Detalle",
  components: {
    CardDetail,
  },
  computed: {
    ...mapState(["juego"]),
  },
  methods: {
    ...mapActions(["obtenerUnJuego"]),
  },
  created() {
    console.log(this.$route.params.id);
    this.obtenerUnJuego(this.$route.params.id);
  },
};
</script>

<style scoped>
.carta {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
