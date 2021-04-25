import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winPoints: 0,
    lossPoints: 0,
    tiePoints: 0,
    playerSelection: [
      {
        selection: "Rock",
        image: "rock.png",
        alt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background."
      },
      {
        selection: "Paper",
        image: "paper.png",
        alt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background."
      },
      {
        selection: "Scissors",
        image: "scissors.png",
        alt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background."
      },
    ]
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
    }
  },
  actions: {
  },
  getters: {
  }
})
