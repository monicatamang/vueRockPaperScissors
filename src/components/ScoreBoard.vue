<template>
    <div>
        <h1>User Score</h1>
        <p>Win{{ userPoints.winPoints }}</p>
        <p>Loss{{ userPoints.lossPoints }}</p>

        <h1>Computer Score</h1>
        <p>Win{{ computerPoints.winPoints }}</p>
        <p>Loss{{ computerPoints.lossPoints }}</p>
        <br>
        <p>Tie{{ tiePoints }}</p>
    </div>
</template>

<script>
    export default {
        name: "score-board",
        computed: {
            userPoints: function() {
                return this.$store.state.userScore;
            },

            computerPoints: function() {
                return this.$store.state.computerScore;
            },

            tiePoints: function() {
                return this.$store.state.tiePoints;
            }
        },
    }
</script>

<style scoped>

</style>