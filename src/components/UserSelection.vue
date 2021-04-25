<template>
    <div>
        <h1>You</h1>
        <div>
            <img :class="{ showImage: isRockClicked }" src="../assets/rock.png" :alt="userSelectionImage[0].alt">
            <img :class="{ showImage: isPaperClicked }" src="../assets/paper.png" :alt="userSelectionImage[1].alt">
            <img :class="{ showImage: isScissorsClicked }" src="../assets/scissors.png" :alt="userSelectionImage[2].alt">
        </div>
        <div>
            <button @click="isRockClicked = true, isPaperClicked = false, isScissorsClicked = false, testing" >{{userSelectionImage[0].selection}}</button>
            <button @click="isRockClicked = false, isPaperClicked = true, isScissorsClicked = false">{{userSelectionImage[1].selection}}</button>
            <button @click="isRockClicked = false, isPaperClicked = false, isScissorsClicked = true">{{userSelectionImage[2].selection}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-selection",
        data() {
            return {
                isRockClicked: false,
                isPaperClicked: false,
                isScissorsClicked: false
            }
        },
        computed: {
            userSelectionImage: function() {
                return this.$store.state.playerSelection; 
            }
        },
    }
</script>

<style scoped>
    .showImage {
        display: block;
    }

    img {
        width: 10vw;
        display: none;
    }
</style>