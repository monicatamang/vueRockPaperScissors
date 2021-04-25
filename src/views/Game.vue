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
                        <button @click="userSelectedRock">{{ userOptions[0] }}</button>
                        <!-- <button @click="computerTurnAfterUserChosesPaper">{{ userOptions[1] }}</button> -->
                        <!-- <button @click="computerTurnAfterUserChosesScissors">{{ userOptions[2] }}</button> -->
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
        data() {
            return {
                rockSelection: {
                    src: "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png",
                    alt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background."
                },

                paperSelection: {
                    src: "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png", 
                    alt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background."
                },

                scissorsSelection: {
                    src: "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png", 
                    alt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background."
                }
            }
        },
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

            // computerTurnAfterUserChosesRock: function() {
            //     let randomNum = Math.floor(Math.random() * this.userOptions.length);
            //     if (this.userOptions[randomNum] === "Rock") {
            //         this.$store.commit("updateTiePoints");
            //         this.$store.commit("updateComputerImageLink", this.rockSelection.src);
            //         this.$store.commit("updateComputerImageAlt", this.rockSelection.alt);
            //         this.userSelectedRock();
            //     } else if (this.userOptions[randomNum] === "Paper") {
            //         this.$store.commit("updateLossPoints");
            //         this.$store.commit("updateComputerImageLink", this.paperSelection.src);
            //         this.$store.commit("updateComputerImageAlt", this.paperSelection.alt);
            //     } else {
            //         this.$store.commit("updateWinPoints");
            //         this.$store.commit("updateComputerImageLink", this.scissorsSelection.src);
            //         this.$store.commit("updateComputerImageAlt", this.scissorsSelection.alt);
            //     }
            // },

            // computerTurnAfterUserChosesPaper: function() {
            //     let randomNum = Math.floor(Math.random() * this.userOptions.length);
            //     if (this.userOptions[randomNum] === "Rock") {
            //         this.$store.commit("updateWinPoints");
            //         this.$store.commit("updateComputerImageLink", "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png");
            //         this.$store.commit("updateComputerImageAlt", "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background.");
            //     } else if (this.userOptions[randomNum] === "Paper") {
            //         this.$store.commit("updateTiePoints");
            //         this.$store.commit("updateComputerImageLink", "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png");
            //         this.$store.commit("updateComputerImageAlt", "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background.");
            //     } else {
            //         this.$store.commit("updateLossPoints");
            //         this.$store.commit("updateComputerImageLink", "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png");
            //         this.$store.commit("updateComputerImageAlt", "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background.");
            //     }
            // },

            // computerTurnAfterUserChosesScissors: function() {
            //     let randomNum = Math.floor(Math.random() * this.userOptions.length);
            //     if (this.userOptions[randomNum].selection === "Rock") {
            //         this.$store.commit("updateLossPoints");
            //         this.$store.commit("updateComputerImageLink", "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png");
            //         this.$store.commit("updateComputerImageAlt", "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background.");
            //     } else if (this.userOptions[randomNum].selection === "Paper") {
            //         this.$store.commit("updateWinPoints");
            //         this.$store.commit("updateComputerImageLink", "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png");
            //         this.$store.commit("updateComputerImageAlt", "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background.");
            //     } else {
            //         this.$store.commit("updateTiePoints");
            //         this.$store.commit("updateComputerImageLink", "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png");
            //         this.$store.commit("updateComputerImageAlt", "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background.");
            //     }
            // },

            userSelectedRock: function() {
                this.$store.commit("updateUserImageLink", this.rockSelection.src);
                this.$store.commit("updateUserImageAlt", this.rockSelection.alt);
            },

            // userSelectedPaper: function() {
            //     this.$store.commit("updateUserImageLink", "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png");
            //     this.$store.commit("updateUserImageAlt", "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background.");
            // },

            // userSelectedScissors: function() {
            //     this.$store.commit("updateUserImageLink", "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png");
            //     this.$store.commit("updateUserImageAlt", "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background.");
            // }
        },
        computed: {
            userOptions: function() {
                return this.$store.state.userButtonSelection;
            },

            userImage: function() {
                return this.$store.state.userSelectionImage;
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