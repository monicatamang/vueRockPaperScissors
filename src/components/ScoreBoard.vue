<template>
    <div>
        <p>Win{{ winPoints }}</p>
        <p>Loss{{ lossPoints }}</p>
        <p>Tie{{ tiePoints }}</p>
    </div>
</template>

<script>
    export default {
        name: "score-board",
        computed: {
            winPoints: function() {
                return this.$store.state.userWinPoints;
            },

            lossPoints: function() {
                return this.$store.state.userLossPoints;
            },

            tiePoints: function() {
                return this.$store.state.userTiePoints;
            }
        },
    }
</script>

<style scoped>

</style>