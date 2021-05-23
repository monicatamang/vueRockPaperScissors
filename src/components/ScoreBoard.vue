<template>
    <article id="scoreboardContainer">
        <h1>Your Score</h1>
        <div id="userScores">
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
        margin-top: 8vh;
    }

    #userScores {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        background: white;
        width: 95%;
        padding: 2vh 0vh;
        box-shadow: 1px 1px 5px lightgrey;
    }

    #userScores > div {
        display: grid;
        place-items: center;
        row-gap: 10px;
        background: white;
    }

    h1 {
        font-weight: 600;
        padding: 1vh 0vh;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        width: 95%;
        box-shadow: 1px 1px 5px lightgrey;
    }

    h4, p {
        background: white;
    }

    p {
        font-size: 1.2rem;
    }
</style>