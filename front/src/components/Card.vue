<template>
  <div>
    <b-card
      :title="titulo"
      :header="id + ''"
      style="width: 25rem; heigth: 30rem"
      class="mb-2 text-center"
    >
      <b-button class="mx-2" :to="`/detalle/${id}`">Detalle</b-button>
      <b-button class="mx-2 btn btn-danger" @click="onEliminar(id)"
        >Eliminar</b-button
      >
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    titulo: String,
    id: Number,
  },
  computed: {},
  methods: {
    ...mapActions(["eliminarJuego"]),
    onEliminar(item) {
      this.$bvModal
        .msgBoxConfirm(
          "¿Seguro que quieres eliminar este juego de la lista?.",
          {
            title: "Eliminar el videojuego",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Aceptar",
            cancelTitle: "Cancelar",
            footerClass: "p-2",
            centered: true,
          }
        )
        .then((value) => {
          if (value) {
            this.eliminarJuego({
              id: item,
              onComplete: (response) => {
                this.$notify({
                  type: "success",
                  title: response.data.mensaje,
                });
              },
            });
          }
          
        })
        .catch((err) => {
          // eslint-disable-line no-unused-vars
          // An error occurred
        });
    },
  },
};
</script>

<style>
</style>