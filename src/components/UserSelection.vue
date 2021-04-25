<template>
    <div>
        <h1>You</h1>
        <!-- Setting the image source and description to the values obtained from the store and displaying the user's option image to the game page -->
        <img :src="userOptionImage.src" :alt="userOptionImage.alt">
    </div>
</template>

<script>
    export default {
        name: "user-selection",
        computed: {
            // Creating a function that gets the data of the user's option image from the store
            userOptionImage: function() {
                return this.$store.state.userSelectionImage;
            }
        },
    }
</script>

<style scoped>

    h1 {
        font-size: 2rem;
        font-weight: 500;
    }

    img {
        width: 15vw;
        margin: 5vh 0vh;
        transform: rotate(90deg);
    }
</style>