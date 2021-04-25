import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    RPSSelection: [
      {
        selection: "Rock",
        alt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background."
      },
      {
        selection: "Paper",
        alt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background."
      },
      {
        selection: "Scissors",
        alt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background."
      },
    ]
  },
  mutations: {
    updateUserPlayerName: function(state, data) {
      state.userPlayerName = data;
    }
  },
  actions: {
  },
  getters: {
  }
})
