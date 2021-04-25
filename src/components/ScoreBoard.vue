<template>
    <div>
        <h1>User Score</h1>
        <!-- Displaying the user's win and loss points to the game page -->
        <p>Win{{ userPoints.winPoints }}</p>
        <p>Loss{{ userPoints.lossPoints }}</p>

        <!-- Displaying the computer's win and loss points to the game page -->
        <h1>Computer Score</h1>
        <p>Win{{ computerPoints.winPoints }}</p>
        <p>Loss{{ computerPoints.lossPoints }}</p>
        <br>

        <!-- Displaying the the total tie points to the game page -->
        <p>Tie{{ tiePoints }}</p>
    </div>
</template>

<script>
    export default {
        name: "score-board",
        computed: {
            // Creating a function that gets the value of all the user's points
            userPoints: function() {
                return this.$store.state.userScore;
            },

            // Creating a function that gets the value of all the computer's points
            computerPoints: function() {
                return this.$store.state.computerScore;
            },

            // Creating a function that gets the value of tie points
            tiePoints: function() {
                return this.$store.state.tiePoints;
            }
        },
    }
</script>

<style scoped>

</style>