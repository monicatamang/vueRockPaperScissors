<template>
    <div>
        <h1>You</h1>
        <div>
            <!-- Setting the image source and description to the values obtained from the store and displaying the user's option image to the game page -->
            <img :src="userOptionImage.src" :alt="userOptionImage.alt">
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-selection",
        computed: {
            // Creating a function that gets the data the user's option image
            userOptionImage: function() {
                return this.$store.state.userSelectionImage;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 20vw;
    }
</style>