<template>
    <div>
        <div>
            <img :class="{ showImage: isRockClicked }" src="../assets/rock.png" :alt="userSelections[0].alt">
            <img :class="{ showImage: isPaperClicked }" src="../assets/paper.png" :alt="userSelections[1].alt">
            <img :class="{ showImage: isScissorsClicked }" src="../assets/scissors.png" :alt="userSelections[2].alt">
        </div>
        <div>
            <button @click="isRockClicked = true, isPaperClicked = false, isScissorsClicked = false">{{userSelections[0].selection}}</button>
            <button @click="isRockClicked = false, isPaperClicked = true, isScissorsClicked = false">{{userSelections[1].selection}}</button>
            <button @click="isRockClicked = false, isPaperClicked = false, isScissorsClicked = true">{{userSelections[2].selection}}</button>
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
            userSelections: function() {
                return this.$store.state.RPSSelection; 
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