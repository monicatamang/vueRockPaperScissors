<template>
    <section>
        <article id="gameContainer">

            <div id="noLoginTokenMessage" v-if="!RPSLoginToken">
                <p>You are not logged in. To continue playing, please log into your account.</p>
                <button id="backButton" @click="takeUserToLoginPage">Back to Login Page</button>
            </div>

            <div v-else>
                <desktop-game-header id="desktopGameHeader"></desktop-game-header>
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
                <logout-button id="logoutButton"></logout-button>
            </div>

        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import cookies from "vue-cookies";
    import DesktopGameHeader from "../components/DesktopGameHeader.vue";
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
            DesktopGameHeader,
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
                }

                else if (this.RPSImages[randomNum].option === "Scissors") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserWinPoints");
                }
            },

            userSelectedPaper() {
                
                let randomNum = Math.floor(Math.random() * this.RPSImages.length);

                if (this.RPSImages[randomNum].option === "Rock") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserWinPoints");
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
                }
            },

            userSelectedScissors() {
                
                let randomNum = Math.floor(Math.random() * this.RPSImages.length);

                if (this.RPSImages[randomNum].option === "Rock") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserLossPoints");
                }

                else if (this.RPSImages[randomNum].option === "Paper") {
                    this.$store.commit("updateComputerImageLink", this.RPSImages[randomNum].src);
                    this.$store.commit("updateComputerImageAlt", this.RPSImages[randomNum].alt);
                    this.$store.commit("updateUserWinPoints");
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
        margin: 10vh 0vh 60vh 0vh;
        width: 80vw;
    }

    #backButton {
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        margin-top: 5vh;
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

    #desktopGameHeader {
        display: none;
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
        box-shadow: 3px 3px 10px darkgrey;
    }

    #userOptionButtons > button:active {
        box-shadow: none;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        #noLoginTokenMessage {
            display: grid;
            place-items: center;
            margin: 20vh 0vh 35vh 0vh;
            width: 80vw;
        }

        #backButton {
            padding: 3vh;
            margin-top: 10vh;
        }

        #gameArea {
            margin: 15vh 0vh 10vh 0vh;
        }

        #userOptionButtons > button {
            padding: 2vh;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        #noLoginTokenMessage > p {
            font-size: 2rem;
        }

        #backButton {
            font-size: 1.6rem;
        }

        #userOptionButtons {
            column-gap: 50px;
        }

        #userOptionButtons > button {
            font-size: 1.7rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        #noLoginTokenMessage {
            margin: 15vh 0vh 40vh 0vh;
        }

        #noLoginTokenMessage > p {
            font-size: 2rem;
        }

        #backButton {
            font-size: 1.6rem;
        }

        #gameArea {
            column-gap: 10vw;
            margin: 10vh 0vh;
        }

        #userOptionButtons > button {
            font-size: 1.8rem;
            padding: 2.5vh;
        }
    }

    @media only screen and (min-width: 1024px) {

        #noLoginTokenMessage {
            margin: 20vh 0vh 40vh 0vh;
        }

        #noLoginTokenMessage > p {
            font-size: 1.2rem;
        }

        #logoutButton {
            display: none;
        }

        #desktopGameHeader {
            display: grid;
        }

        #gameContainer {
            margin-bottom: 10vh;
        }

        #gameArea {
            column-gap: 10vw;
        }

        #userOptionButtons > button {
            padding: 2vh;
            cursor: pointer;
        }

        #userOptionButtons > button:hover {
            background: white;
            color: rgba(0, 0, 0, 0.8);
        }
    }
</style>