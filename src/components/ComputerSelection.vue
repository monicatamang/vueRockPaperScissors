<template>
    <div>
        <h1>Computer</h1>
        <img :src="computerImage.image" :alt="computerImage.alt">
    </div>
</template>

<script>
    export default {
        name: "computer-selection",
        computed: {
            computerImage: function() {
                return this.$store.state.computerSelection;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>