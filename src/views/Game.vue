<template>
    <section>
        <article>
            <div v-if="!RPSLoginToken">
                <p>You are not logged in. Please go back to the login page.</p>
                <button @click="takeUserToLoginPage">Back</button>
            </div>

            <div v-else>
                <score-board></score-board>
                <div id="gameArea">
                    <div>
                        <user-selection></user-selection>
                        <button @click="userTurn(`Rock`)">Rock</button>
                        <button @click="userTurn(`Paper`)">Paper</button>
                        <button @click="userTurn(`Scissors`)">Scissors</button>
                    </div>
                    <computer-selection></computer-selection>
                </div>
            </div>
        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import cookies from "vue-cookies";
    import UserSelection from "../components/UserSelection.vue";
    import ComputerSelection from "../components/ComputerSelection.vue";
    import ScoreBoard from "../components/ScoreBoard.vue";
    import PageFooter from "../components/PageFooter.vue";

    export default {
        name: "Game",
        components: {
            ScoreBoard,
            UserSelection,
            ComputerSelection,
            PageFooter
        },
        data() {
            return {
                RPSLoginToken: cookies.get(`RPSLoginToken`)
            }
        },
        methods: {
            takeUserToLoginPage: function() {
                this.$router.push('/');
            },

            userTurn: function(selection) {
                if (selection === "Rock") {
                    this.$store.commit("updateUserImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateUserImageAlt", this.imagesOfOptions[0].rockAlt);
                    this.computerTurnAfterUserSelectedRock();
                } else if (selection === "Paper") {
                    this.$store.commit("updateUserImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateUserImageAlt", this.imagesOfOptions[1].paperAlt);
                    this.computerTurnAfterUserSelectedPaper();
                } else {
                    this.$store.commit("updateUserImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateUserImageAlt", this.imagesOfOptions[2].scissorsAlt);
                    this.computerTurnAfterUserSelectedScissors();
                }
            },

            computerTurnAfterUserSelectedRock: function() {
                let randomNum = Math.floor(Math.random() * this.computerGeneratedOption.length);
                if (this.computerGeneratedOption[randomNum] === "Rock") {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[0].rockAlt);
                } else if (this.computerGeneratedOption[randomNum] === "Paper") {
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[1].paperAlt);
                } else {
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[2].scissorsAlt);
                }
            },

            computerTurnAfterUserSelectedPaper: function() {
                let randomNum = Math.floor(Math.random() * this.computerGeneratedOption.length);
                if (this.computerGeneratedOption[randomNum] === "Rock") {
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[0].rockAlt);
                } else if (this.computerGeneratedOption[randomNum] === "Paper") {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[1].paperAlt);
                } else {
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[2].scissorsAlt);
                }
            },

            computerTurnAfterUserSelectedScissors: function() {
                let randomNum = Math.floor(Math.random() * this.computerGeneratedOption.length);
                if (this.computerGeneratedOption[randomNum] === "Rock") {
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[0].rockAlt);
                } else if (this.computerGeneratedOption[randomNum] === "Paper") {
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[1].paperAlt);
                } else {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[2].scissorsAlt);
                }
            }
        },
        computed: {
            computerGeneratedOption: function() {
                return this.$store.state.rockPaperScissorsOptions;
            },

            imagesOfOptions: function() {
                return this.$store.state.rockPaperScissorsImages;
            }
        },
    }
</script>

<style scoped>
    article {
        display: grid;
        place-items: center;
        min-height: 90vh;
    }
    #gameArea {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        min-height: 90vh;
    }
</style>