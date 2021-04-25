<template>
    <div>
        <p>Win{{ userWinPoints }}</p>
        <p>Loss{{ userLossPoints }}</p>
        <p>Tie{{ userTiePoints }}</p>
    </div>
</template>

<script>
    export default {
        name: "score-board",
        computed: {
            userWinPoints: function() {
                return this.$store.state.winPoints;
            },

            userLossPoints: function() {
                return this.$store.state.lossPoints;
            },

            userTiePoints: function() {
                return this.$store.state.tiePoints;
            }
        },
    }
</script>

<style scoped>

</style>