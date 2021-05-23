<template>
    <section>
        <article id="gameContainer">

            <div id="noLoginTokenMessage" v-if="!RPSLoginToken">
                <p>You are not logged in. To continue playing, please return to the login page.</p>
                <button id="backButton" @click="takeUserToLoginPage">Back to Login Page</button>
            </div>

            <div v-else>
                <game-header></game-header>
                <score-board></score-board>
                <article id="gameArea">
                    <user-selection></user-selection>
                    <computer-selection></computer-selection>
                </article>
                <div id="userOptionButtons">
                    <button @click="userTurn(`Rock`)">Rock</button>
                    <button @click="userTurn(`Paper`)">Paper</button>
                    <button @click="userTurn(`Scissors`)">Scissors</button>
                </div>
                <help-button></help-button>
                <logout-button></logout-button>
            </div>

        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import cookies from "vue-cookies";
    import HelpButton from "../components/HelpButton.vue";
    import GameHeader from "../components/GameHeader.vue";
    import UserSelection from "../components/UserSelection.vue";
    import ComputerSelection from "../components/ComputerSelection.vue";
    import ScoreBoard from "../components/ScoreBoard.vue";
    import LogoutButton from "../components/LogoutButton.vue";
    import PageFooter from "../components/PageFooter.vue";

    export default {
        name: "Game",

        components: {
            GameHeader,
            HelpButton,
            UserSelection,
            ComputerSelection,
            ScoreBoard,
            LogoutButton,
            PageFooter
        },

        data() {
            return {
                RPSLoginToken: cookies.get(`RPSLoginToken`)
            }
        },

        methods: {
            
            takeUserToLoginPage() {
                this.$router.push('/');
            },

            userSelectedRock() {

                let randomNum = Math.floor(Math.random() * this.RPSImages.length);

                if(this.RPSImages[randomNum].option === "Rock") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateTiePoints");
                }

                else if (this.RPSImages[randomNum].option === "Paper") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                }

                else if (this.RPSImages[randomNum].option === "Scissors") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                }
            },

            userSelectedPaper() {
                
                let randomNum = Math.floor(Math.random() * this.RPSImages.length);

                if (this.RPSImages[randomNum].option === "Rock") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                }

                else if (this.RPSImages[randomNum].option === "Paper") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateTiePoints");
                }

                else if (this.RPSImages[randomNum].option === "Scissors") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                }
            },

            userSelectedScissors() {
                
                let randomNum = Math.floor(Math.random() * this.RPSImages.length);

                if (this.RPSImages[randomNum].option === "Rock") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                }

                else if (this.RPSImages[randomNum].option === "Paper") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                }

                else if (this.RPSImages[randomNum].option === "Scissors") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateTiePoints");
                }
                
            },

            computerTurn(userSelection) {

                if (userSelection === "Rock") {
                    this.userSelectedRock();
                }

                else if (userSelection === "Paper") {
                    this.userSelectedPaper();
                }

                else if (userSelection === "Scissors") {
                    this.userSelectedScissors();
                }
            },

            userTurn(selection) {

                for (let i = 0; i < this.RPSImages.length; i++) {

                    if (selection === this.RPSImages[i].option) {
                        this.$store.commit("updateUserImageLink", this.RPSImages[i].src);
                        this.$store.commit("updateUserImageAlt", this.RPSImages[i].alt);
                        this.computerTurn(this.RPSImages[i].option);
                    }
                }
            },
        },

        computed: {
            RPSImages: function() {
                return this.$store.state.rockPaperScissorsImages;
            }
        }
    }
</script>

<style scoped>
    #noLoginTokenMessage {
        display: grid;
        place-items: center;
        margin-top: 10vh;
        width: 80vw;
    }

    #backButton {
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        margin: 5vh 0vh 60vh 0vh;
        border-radius: 3px;
        border: none;
        padding: 1.5vh;
        cursor: pointer;
    }

    #backButton:hover {
        box-shadow: 1px 1px 5px grey;
    }

    #backButton:active {
        box-shadow: none;
    }

    #gameContainer {
        display: grid;
        place-items: center;
    }
    #gameArea {
        display: grid;
        place-items: center;
        grid-template-columns: auto auto;
        margin: 10vh 0vh 8vh 0vh;
    }

    #gameArea > div {
        height: 100%;
    }

    #userOptionButtons {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 25px;
    }

    #userOptionButtons > button {
        font-size: 0.9rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        border: none;
        width: 100%;
        padding: 1.5vh;
        box-shadow: 1px 1px 5px lightgrey;
        cursor: pointer;
    }

    /* #userOptionButtons > button:hover {
        box-shadow: 1px 1px 5px grey;
    }

    #userOptionButtons > button:active {
        box-shadow: none;
    } */

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        #noLoginTokenMessage {
            display: grid;
            place-items: center;
            margin-top: 20vh;
            width: 80vw;
        }

        #backButton {
            padding: 3vh;
            margin: 10vh 0vh 35vh 0vh;
        }

        #gameArea {
            margin: 15vh 0vh 10vh 0vh;
        }

        #userOptionButtons > button {
            padding: 2vh;
        }
    }
</style>