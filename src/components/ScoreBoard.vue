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
                <p>{{ userPoints.tiePoints }}</p>
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
            }
        }
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
        padding: 2vh 0vh;
        box-shadow: 1px 1px 5px lightgrey;
    }

    #userScores > div {
        display: grid;
        place-items: center;
        row-gap: 10px;
        background: white;
    }

    #userScores, h1 {
        width: 95%;
    }

    h1 {
        font-weight: 600;
        padding: 1vh 0vh;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 1px 1px 5px lightgrey;
    }

    h4, p {
        background: white;
    }

    p {
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        #scoreboardContainer {
            margin-top: 15vh;
        }

        #userScores, h1 {
            width: 100%;
        }

        #userScores {
            padding: 3vh 0vh;
        }

        h1 {
            padding: 2vh 0vh;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        #userScores, h1 {
            width: 60vw;
        }

        h1 {
            font-size: 1.6rem;
            padding: 1.5vh 0vh;
        }

        #userScores {
            padding: 3vh 0vh;
        }

        h4 {
            font-size: 1.6rem;
        }

        p {
            font-size: 2rem;
        }

        #userScores > div {
            row-gap: 20px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        #scoreboardContainer {
            margin-top: 10vh;
        }

        #userScores, h1 {
            width: 50vw;
        }

        h1 {
            font-size: 1.6rem;
            padding: 2vh 0vh;
        }

        #userScores {
            padding: 4vh 0vh;
        }

        h4 {
            font-size: 1.6rem;
        }

        p {
            font-size: 2rem;
        }

        #userScores > div {
            row-gap: 20px;
        }
    }

    @media only screen and (min-width: 1024px) {

        h1 {
            padding: 2vh 0vh;
        }

        #scoreboardContainer {
            width: 50vw;
        }

        #userScores {
            padding: 3vh 0vh;
        }
    }
</style>