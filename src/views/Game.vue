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
                        <button @click="userTurn(`Rock`)">{{ userOptions[0] }}</button>
                        <button @click="userTurn(`Paper`)">{{ userOptions[1] }}</button>
                        <button @click="userTurn(`Scissors`)">{{ userOptions[2] }}</button>
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
                rockAlt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a white circular, black-bordered background.",
                paperAlt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a white circular, black-bordered background.",
                scissorsAlt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled  with a white circular, black-bordered background."
            }
        },
        methods: {
            takeUserToLoginPage: function() {
                this.$router.push('/');
            },

            userTurn: function(selection) {
                if (selection === "Rock") {
                    this.$store.commit("updateUserImageLink", "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png");
                    this.$store.commit("updateUserImageAlt", this.rockAlt);
                } else if (selection === "Paper") {
                    this.$store.commit("updateUserImageLink", "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png");
                    this.$store.commit("updateUserImageAlt", this.paperAlt);
                } else {
                    this.$store.commit("updateUserImageLink", "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png");
                    this.$store.commit("updateUserImageAlt", this.scissorsAlt);
                }
            }
        },
        computed: {
            userOptions: function() {
                return this.$store.state.userButtonSelection;
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