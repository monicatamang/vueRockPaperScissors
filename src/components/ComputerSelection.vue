<template>
    <div>
        <h1>Computer</h1>
        <img :src="computerOptionImage.src" :alt="computerOptionImage.alt">
    </div>
</template>

<script>
    export default {
        name: "computer-selection",
        computed: {
            computerOptionImage: function() {
                return this.$store.state.computerSelectionImage;
            }
        },
    }
</script>

<style scoped>
    h1 {
        font-size: 1.3rem;
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
</style>