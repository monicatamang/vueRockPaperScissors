import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winPoints: 0,
    lossPoints: 0,
    tiePoints: 0,
    userButtonSelection: [
      "Rock",
      "Paper",
      "Scissors"
    ],
    userSelectionImage: {
      link: "",
      alt: ""
    },
    computerSelectionImage: {
      link: "",
      alt: ""
    },
  },

  mutations: {
    updateWinPoints: function(state) {
      state.winPoints++;
    },

    updateLossPoints: function(state) {
      state.lossPoints++;
    },

    updateTiePoints: function(state) {
      state.tiePoints++;
    },

    updateUserImageLink: function(state, data) {
      state.userSelectionImage.link = data;
    },

    updateUserImageAlt: function(state, data) {
      state.userSelectionAlt.link = data;
    },

    updateComputerImageLink: function(state, data) {
      state.computerSelectionImage.link = data;
    },

    updateComputerImageAlt: function(state, data) {
      state.computerSelectionImage.alt = data;
    }
  },
  actions: {
  },
  getters: {
  }
})
