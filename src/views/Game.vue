<template>
    <section>
        <article id="gameContainer">
            <!-- If the user is not logged in, prompt the user to login -->
            <div v-if="!RPSLoginToken">
                <p>You are not logged in. Please go back to the login page.</p>
                <button id="backButton" @click="takeUserToLoginPage">Back</button>
            </div>

            <!-- If the user is logged in, show the user the game page -->
            <div v-else>
                <game-header></game-header>
                <score-board></score-board>
                <article id="gameArea">
                    <div>
                        <user-selection></user-selection>
                        <div id="userOptionButtons">
                            <!-- When the user clicks on one of the following buttons, the click event listener will call the userTurn function and pass the user's selection as an argument -->
                            <button @click="userTurn(`Rock`)">Rock</button>
                            <button @click="userTurn(`Paper`)">Paper</button>
                            <button @click="userTurn(`Scissors`)">Scissors</button>
                        </div>
                    </div>
                    <computer-selection></computer-selection>
                </article>
            </div>
        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    // Importing cookies and components to the game page
    import cookies from "vue-cookies";
    import GameHeader from "../components/GameHeader.vue";
    import UserSelection from "../components/UserSelection.vue";
    import ComputerSelection from "../components/ComputerSelection.vue";
    import ScoreBoard from "../components/ScoreBoard.vue";
    import PageFooter from "../components/PageFooter.vue";

    // Registering each component
    export default {
        name: "Game",
        components: {
            GameHeader,
            UserSelection,
            ComputerSelection,
            ScoreBoard,
            PageFooter
        },
        data() {
            return {
                // Creating a variable and setting its value as the user's login token
                RPSLoginToken: cookies.get(`RPSLoginToken`)
            }
        },
        methods: {
            // Creating a function that will take the user back to the login page when the "back" button is clicked
            takeUserToLoginPage: function() {
                this.$router.push('/');
            },

            // Creating a function that is called when the user makes a selection
            userTurn: function(selection) {
                
                // If the user's selection is rock, update the value of the user's selection image data to the rock source and image description in the store and call the function to generate a random move for the computer's turn
                if (selection === "Rock") {
                    this.$store.commit("updateUserImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateUserImageAlt", this.imagesOfOptions[0].rockAlt);
                    this.computerTurnAfterUserSelectedRock();
                } 
                
                // If the user's selection is paper, update the value of the user's selection image data to the paper source and image description in the store and call the function to generate a random move for the computer's turn
                else if (selection === "Paper") {
                    this.$store.commit("updateUserImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateUserImageAlt", this.imagesOfOptions[1].paperAlt);
                    this.computerTurnAfterUserSelectedPaper();
                } 
                
                // If the user's selection is scissors, update the value of the user's selection image data to the scissors source and image description in the store and call the function to generate a random move for the computer's turn
                else {
                    this.$store.commit("updateUserImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateUserImageAlt", this.imagesOfOptions[2].scissorsAlt);
                    this.computerTurnAfterUserSelectedScissors();
                }
            },

            // Creating a function that is called when the user selects "Rock"
            computerTurnAfterUserSelectedRock: function() {
                
                // Defining a local varaible that generates a random number between 0 and 2
                let randomNum = Math.floor(Math.random() * this.computerGeneratedOption.length);

                // If the computer's selection is rock, increase the number of tie points by one point and update the value of computer's selection image data to the rock source and image description in the store
                if (this.computerGeneratedOption[randomNum] === "Rock") {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[0].rockAlt);
                } 
                
                // If the computer's selection is paper, increase user's loss points by one point, increase computer's win points by one point and update the value of computer's selection image data to the paper source and image description in the store
                else if (this.computerGeneratedOption[randomNum] === "Paper") {
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[1].paperAlt);
                } 
                
                // If the computer's selection is scissors, increase user's win points by one point, increase computer's loss points by one point and update the value of computer's selection image data to the scissors source and image description in the store
                else {
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[2].scissorsAlt);
                }
            },

            // Creating a function that is called when the user selects "Paper"
            computerTurnAfterUserSelectedPaper: function() {

                // Defining a local variable that generates a random number between 0 and 2
                let randomNum = Math.floor(Math.random() * this.computerGeneratedOption.length);

                // If the computer's selection is rock, increase user's win points by one point, increase computer's loss points by one point and update the value of computer's selection image data to the rock source and image description in the store
                if (this.computerGeneratedOption[randomNum] === "Rock") {
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[0].rockAlt);
                } 
                
                // If the computer's selection is paper, increase the number of tie points by one point and update the value of computer's selection image data to the paper source and image description in the store
                else if (this.computerGeneratedOption[randomNum] === "Paper") {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[1].paperAlt);
                } 
                
                // If the computer's selection is scissors, increase user's loss points by one point, increase computer's win points by one point and update the value of computer's selection image data to the scissors source and image description in the store
                else {
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[2].scissorsAlt);
                }
            },

            // Creating a function that is called when the user selects "Scissors"
            computerTurnAfterUserSelectedScissors: function() {

                // Defining a local varaible that generates a random number between 0 and 2
                let randomNum = Math.floor(Math.random() * this.computerGeneratedOption.length);

                // If the computer's selection is rock, increase user's loss points by one point, increase computer's win points by one point and update the value of computer's selection image data to the rock source and image description in the store
                if (this.computerGeneratedOption[randomNum] === "Rock") {
                    this.$store.commit("updateUserLossPoints");
                    this.$store.commit("updateComputerWinPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[0].rockSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[0].rockAlt);
                } 
                
                // If the computer's selection is paper, increase user's win points by one point, increase computer's loss points by one point and update the value of computer's selection image data to the paper source and image description in the store
                else if (this.computerGeneratedOption[randomNum] === "Paper") {
                    this.$store.commit("updateUserWinPoints");
                    this.$store.commit("updateComputerLossPoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[1].paperSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[1].paperAlt);
                } 
                
                // If the computer's selection is scissors, increase the number of tie points by one point and update the value of computer's selection image data to the scissors source and image description in the store
                else {
                    this.$store.commit("updateTiePoints");
                    this.$store.commit("updateComputerImageLink", this.imagesOfOptions[2].scissorsSrc);
                    this.$store.commit("updateComputerImageAlt", this.imagesOfOptions[2].scissorsAlt);
                }
            }
        },
        computed: {
            // Creating a function that gets the value of all the game options from the store
            computerGeneratedOption: function() {
                return this.$store.state.rockPaperScissorsOptions;
            },

            // Creating a function that gets the value of all the image data from the store
            imagesOfOptions: function() {
                return this.$store.state.rockPaperScissorsImages;
            }
        },
    }
</script>

<style scoped>
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

    #gameContainer {
        display: grid;
        place-items: center;
        min-height: 100vh;
    }
    #gameArea {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 50px;
        width: 100%;
        min-height: 60vh;
        margin: 10vh 0vh;
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
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        border: none;
        width: 100%;
        padding: 1.5vh;
        cursor: pointer;
    }

    #userOptionButtons > button:hover {
        box-shadow: 1px 1px 5px grey;
    }

    #userOptionButtons > button:active {
        box-shadow: none;
    }
</style>