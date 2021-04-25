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
    img {
        width: 20vw;
    }
</style>