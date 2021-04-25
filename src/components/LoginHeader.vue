<template>
    <header>
        <h1>Rock Paper Scissors</h1>
        <p>Let's Play!</p>
        <!-- Setting the image source and description to the values obtained from the store and displaying the rock, paper and scissors image on the login page -->
        <img :src="optionImages[0].rockSrc" :alt="optionImages[0].rockAlt">
        <img :src="optionImages[1].paperSrc" :alt="optionImages[1].paperAlt">
        <img :src="optionImages[2].scissorsSrc" :alt="optionImages[2].scissorsAlt">
    </header>
</template>

<script>
    export default {
        name: "page-header",
        computed: {
            // Creating a function that gets the data of all the images
            optionImages() {
                return this.$store.state.rockPaperScissorsImages;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>