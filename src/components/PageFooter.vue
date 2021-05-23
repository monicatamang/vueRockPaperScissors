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
</style>