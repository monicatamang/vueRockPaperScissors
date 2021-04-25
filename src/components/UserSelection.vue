<template>
    <div>
        <h1>You</h1>
        <div>
            <!-- <img :src="userImage.src" :alt="userImage.alt"> -->
            <img :src="userImage.src">
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-selection",
        computed: {
            userImage: function() {
                return this.$store.state.userSelectionImage;
            }
        },
    }
</script>

<style scoped>
    img {
        width: 20vw;
    }
</style>