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
                        <h1>You</h1>
                        <button @click="computerTurnAfterUserChosesRock">{{ RPSItems[0].selection }}</button>
                        <button>{{ RPSItems[1].selection }}</button>
                        <button>{{ RPSItems[2].selection }}</button>
                    </div>
                    <div>
                        <h1>Computer</h1>
                    </div>
                </div>
                <!-- Inject Computer Selection here -->
            </div>
        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import cookies from "vue-cookies";
    import ScoreBoard from "../components/ScoreBoard.vue";
    import PageFooter from "../components/PageFooter.vue";

    export default {
        name: "Game",
        components: {
            ScoreBoard,
            PageFooter
        },
        data() {
            return {
                RPSLoginToken: cookies.get(`RPSLoginToken`),
                // isGameOver: false
            }
        },
        methods: {
            takeUserToLoginPage: function() {
                this.$router.push('/');
            },

            computerTurnAfterUserChosesRock: function() {
                let randomNum = Math.floor(Math.random() * this.RPSItems.length);
                console.log(this.RPSItems[randomNum].selection);
                if (this.RPSItems[randomNum].selection === "Rock") {
                    this.$store.commit("updateTiePoints");
                } else if (this.RPSItems[randomNum].selection === "Paper") {
                    this.$store.commit("updateLossPoints");
                } else {
                    this.$store.commit("updateWinPoints");
                }
                // IF RANDOMNUM IS EQUAL TO ROCK, UPDATE THE STORE TO THE PICTURE OF THE ROCK AND INJECT IT INTO THE COMPUTER SELECTION, ETC.
            }
        },
        computed: {
            RPSItems() {
                return this.$store.state.playerSelection;
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