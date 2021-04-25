import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userScore: {
      winPoints: 0,
      lossPoints: 0
    },
    computerScore: {
      winPoints: 0,
      lossPoints: 0,
    },
    tiePoints: 0,
    rockPaperScissorsOptions: [
      "Rock",
      "Paper",
      "Scissors"
    ],
    rockPaperScissorsImages: [
      {
        rockSrc: "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png",
        rockAlt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a white circular, black-bordered background."
      },
      {
        paperSrc: "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png",
        paperAlt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a white circular, black-bordered background."
      },
      {
        scissorsSrc: "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png",
        scissorsAlt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled  with a white circular, black-bordered background."
      }
    ],
    userSelectionImage: {
      src: "",
      alt: ""
    },
    computerSelectionImage: {
      src: "",
      alt: ""
    },
  },

  mutations: {
    updateUserWinPoints: function(state) {
      state.userScore.winPoints++;
    },

    updateUserLossPoints: function(state) {
      state.userScore.lossPoints++;
    },

    updateComputerWinPoints: function(state) {
      state.computerScore.winPoints++;
    },

    updateComputerLossPoints: function(state) {
      state.computerScore.lossPoints++;
    },

    updateTiePoints: function(state) {
      state.tiePoints++;
    },

    updateUserImageLink: function(state, data) {
      state.userSelectionImage.src = data;
    },

    updateUserImageAlt: function(state, data) {
      state.userSelectionImage.alt = data;
    },

    updateComputerImageLink: function(state, data) {
      state.computerSelectionImage.src = data;
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
