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
        font-size: 1.4rem;
        font-weight: 700;
    }

    img {
        width: 20vw;
        margin-top: 3vh;
        transform: rotate(90deg);
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        h1 {
            margin-bottom: 5vh;
        }

        img {
            width: 10vw;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        h1 {
            font-size: 2.3rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        h1 {
            font-size: 2.5rem;
        }

        img {
            width: 18vw;
        }
    }
</style>