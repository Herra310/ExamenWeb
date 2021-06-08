import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos:[],
    juego:{},
  },
  mutations: {
    SET_JUEGOS(state, juegos) {
      state.juegos = juegos;
  },
  SET_JUEGO(state, juego){
      state.juego = juego;
  },
  },
  actions: {
    obtenerJuegos({ commit }) {
      axios.get('http://localhost:3000/')
        .then(res => {
          commit('SET_JUEGOS', res.data);
        })
    },
    obtenerUnJuego({ commit }, id) {
      axios.get(`http://localhost:3000/${id}`)
        .then(res => {
          commit('SET_JUEGO', res.data)})

        .catch(err => console.log(err))
    },
    eliminarJuego({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/${id}`)
        .then(onComplete)
        .catch(onError)
    }

  },
  modules: {
  }
})
