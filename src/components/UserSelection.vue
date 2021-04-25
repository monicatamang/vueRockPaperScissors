<template>
    <div>
        <h1>You</h1>
        <div>
            <img :src="userOptionImage.src" :alt="userOptionImage.alt">
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-selection",
        computed: {
            userOptionImage: function() {
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