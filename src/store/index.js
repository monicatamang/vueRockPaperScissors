import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winPoints: 0,
    lossPoints: 0,
    tiePoints: 0,
    userSelection: [
      {
        selection: "Rock",
        image: "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png",
        alt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background."
      },
      {
        selection: "Paper",
        image: "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png",
        alt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background."
      },
      {
        selection: "Scissors",
        image: "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png",
        alt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background."
      },
    ],
    computerSelection: {
      image: "",
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

    updateComputerImageName: function(state, data) {
      state.computerSelection.image = data;
    },

    updateComputerImageAlt: function(state, data) {
      state.computerSelection.alt = data;
    }
  },
  actions: {
  },
  getters: {
  }
})
