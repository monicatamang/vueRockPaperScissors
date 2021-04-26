<template>
    <article id="scoreboardContainer">
        <div class="scoreboards">
            <!-- Displaying the user's win, loss and tie points to the game page -->
            <h1>Your Score</h1>
            <div class="individualScoreboards">
                <div>
                    <h4>Win</h4>
                    <p>{{ userPoints.winPoints }}</p>
                </div>
                <div>
                    <h4>Loss</h4>
                    <p>{{ userPoints.lossPoints }}</p>
                </div>
                <div>
                    <h4>Tie</h4>
                    <p>{{ tiePoints }}</p>
                </div>
            </div>
        </div>
        <div class="scoreboards" id="computerScoreboard">
            <!-- Displaying the computer's win, loss and tie points to the game page -->
            <h1>Computer Score</h1>
            <div class="individualScoreboards">
                <div>
                    <h4>Win</h4>
                    <p>{{ computerPoints.winPoints }}</p>
                </div>
                <div>
                    <h4>Loss</h4>
                    <p>{{ computerPoints.lossPoints }}</p>
                </div>
                <div>
                    <h4>Tie</h4>
                    <p>{{ tiePoints }}</p>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "score-board",
        computed: {
            // Creating a function that gets the value of all the user's points
            userPoints: function() {
                return this.$store.state.userScore;
            },

            // Creating a function that gets the value of all the computer's points
            computerPoints: function() {
                return this.$store.state.computerScore;
            },

            // Creating a function that gets the value of tie points
            tiePoints: function() {
                return this.$store.state.tiePoints;
            }
        },
    }
</script>

<style scoped>
    #scoreboardContainer {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);
        width: 50vw;
        margin-top: 8vh;
    }

    .scoreboards {
        display: grid;
        place-items: center;
        background: white;
        width: 80%;
        height: 100%;
        box-shadow: 1px 1px 3px lightgrey;
    }

    .scoreboards > h1, .scoreboards > h4 {
        font-weight: 600;
        padding: 2vh 0vh;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
    }

    .individualScoreboards {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        padding: 3vh 0vh;
    }

    h4, p {
        font-size: 1.1rem;
    }

    h4 {
        margin-bottom: 2vh;
    }
</style>