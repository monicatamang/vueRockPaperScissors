<template>
    <div>
        <h1>Computer</h1>
        <img :src="computerPlayerImage.link" :alt="computerPlayerImage.alt">
    </div>
</template>

<script>
    export default {
        name: "computer-selection",
        computed: {
            computerPlayerImage: function() {
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