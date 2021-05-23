<template>
    <footer>
        <p>Copyright 2021 Rock Paper Scissors</p>
    </footer>
</template>

<script>
    export default {
        name: "page-footer"
    }
</script>

<style scoped>
    footer {
        display: grid;
        place-items: center;
        min-height: 5vh;
        padding: 3vh 0vh;
        font-size: 0.9rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
        
        footer {
            margin-bottom: 10vh;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1366px) and (orientation: portrait) {

        p {
            font-size: 1.3rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1366px) and (orientation: landscape) {

        p {
            font-size: 1.2rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        p {
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        footer {
            margin: 5vh 0vh;
        }

        p {
            font-size: 1.5rem;
        }
    }
</style>