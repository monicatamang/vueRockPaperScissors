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
                        <button @click="computerTurnAfterUserChosesRock">{{ RPSPlayerSelections[0].selection }}</button>
                        <button @click="computerTurnAfterUserChosesPaper">{{ RPSPlayerSelections[1].selection }}</button>
                        <button @click="computerTurnAfterUserChosesScissors">{{ RPSPlayerSelections[2].selection }}</button>
                    </div>
                    <computer-selection></computer-selection>
                </div>
                <!-- Inject Computer Selection here -->
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
                RPSLoginToken: cookies.get(`RPSLoginToken`),
            }
        },
        methods: {
            takeUserToLoginPage: function() {
                this.$router.push('/');
            },

            computerTurnAfterUserChosesRock: function() {
                let randomNum = Math.floor(Math.random() * this.RPSPlayerSelections.length);
                console.log(this.RPSPlayerSelections[randomNum].selection);
                if (this.RPSPlayerSelections[randomNum].selection === "Rock") {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                } else if (this.RPSPlayerSelections[randomNum].selection === "Paper") {
                    this.$store.commit("updateLossPoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                } else {
                    this.$store.commit("updateWinPoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                }
            },

            computerTurnAfterUserChosesPaper: function() {
                let randomNum = Math.floor(Math.random() * this.RPSPlayerSelections.length);
                console.log(this.RPSPlayerSelections[randomNum].image);
                if (this.RPSPlayerSelections[randomNum].selection === "Rock") {
                    this.$store.commit("updateWinPoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                } else if (this.RPSPlayerSelections[randomNum].selection === "Paper") {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                } else {
                    this.$store.commit("updateLossPoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                }
            },

            computerTurnAfterUserChosesScissors: function() {
                let randomNum = Math.floor(Math.random() * this.RPSPlayerSelections.length);
                if (this.RPSPlayerSelections[randomNum].selection === "Rock") {
                    this.$store.commit("updateLossPoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                } else if (this.RPSPlayerSelections[randomNum].selection === "Paper") {
                    this.$store.commit("updateWinPoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                } else {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageName", this.RPSPlayerSelections[randomNum].image);
                    this.$store.commit("updateComputerImageAlt", this.RPSPlayerSelections[randomNum].alt);
                }
            },
        },
        computed: {
            RPSPlayerSelections: function() {
                return this.$store.state.userSelection;
            },
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