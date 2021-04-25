<template>
    <header>
        <h1>Rock Paper Scissors</h1>
        <p>Let's Play!</p>
        <img src="../assets/rock.png" :alt="RPSImageDescriptions[0].alt">
        <img src="../assets/paper.png" :alt="RPSImageDescriptions[1].alt">
        <img src="../assets/scissors.png" :alt="RPSImageDescriptions[2].alt">
    </header>
</template>

<script>
    export default {
        name: "page-header",
        computed: {
            RPSImageDescriptions: function() {
                return this.$store.state.userSelection;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>