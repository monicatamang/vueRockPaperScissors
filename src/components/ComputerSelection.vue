<template>
    <div>
        <h1>Computer</h1>
        <!-- Setting the image source and description to the values obtained from the store and displaying the computer's generated option image to the game page -->
        <img :src="computerOptionImage.src" :alt="computerOptionImage.alt">
    </div>
</template>

<script>
    export default {
        name: "computer-selection",
        computed: {
            // Creating a function that gets the data the computer's option image
            computerOptionImage: function() {
                return this.$store.state.computerSelectionImage;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 20vw;
    }
</style>