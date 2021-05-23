<template>
    <header>
        <div>
            <h1>Rock Paper Scissors</h1>
        </div>
        <p>Select a move to start the game.</p>
    </header>
</template>

<script>
    export default {
        name: "game-header"
    }
</script>

<style scoped>
    header {
        margin-top: 8vh;
    }

    div {
        display: grid;
        place-items: center;
    }

    h1 {
        font-size: 1.8rem;
        padding-bottom: 3vh;
    }

    p {
        font-size: 1.1rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) { 
        
        header {
            margin-top: 15vh;
        }

        h1 {
            font-size: 1.8rem;
            padding-bottom: 5vh;
        }

        p {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1366px) and (orientation: portrait) {

        h1 {
            font-size: 3.8rem;
        }

        p {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1366px) and (orientation: landscape) {

        h1 {
            font-size: 4.3rem;
            margin-top: 3vh;
        }

        p {
            font-size: 2rem;
        }
    }
</style>