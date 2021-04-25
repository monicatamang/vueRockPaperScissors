<template>
    <header>
        <h1>Rock Paper Scissors</h1>
        <p>Let's Play!</p>
        <img src="../assets/rock.png" :alt="imageDescriptions[0].alt">
        <img src="../assets/paper.png" :alt="imageDescriptions[1].alt">
        <img src="../assets/scissors.png" :alt="imageDescriptions[2].alt">
    </header>
</template>

<script>
    export default {
        name: "page-header",
        computed: {
            imageDescriptions: function() {
                return this.$store.state.playSelection;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>