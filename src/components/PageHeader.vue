<template>
    <header>
        <h1>Rock Paper Scissors</h1>
        <p>Let's Play!</p>
        <img :src="rockSelection.src" :alt="rockSelection.alt">
        <img :src="paperSelection.src" :alt="paperSelection.alt">
        <img :src="scissorsSelection.src" :alt="scissorsSelection.alt">
    </header>
</template>

<script>
    export default {
        name: "page-header",
        data() {
            return {
                rockSelection: {
                    src: "https://www.kindpng.com/picc/m/266-2667213_transparent-rock-paper-scissors-clipart-clipart-rock-paper.png",
                    alt: "A clipart of a fist positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a dark pink circular background."
                },

                paperSelection: {
                    src: "https://www.clipartkey.com/mpngs/m/109-1094264_rock-paper-scissors-png.png", 
                    alt: "A clipart of a open hand positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a yellow circular background."
                },

                scissorsSelection: {
                    src: "https://www.clipartkey.com/mpngs/m/109-1094404_rock-paper-scissors-png.png", 
                    alt: "A clipart of a hand creating the shape of a pair of scissors positioned to the left representing the symbol of a rock in the game 'rock, paper, scissors' that is styled with a turquorise circular background."
                }
            }
        },
    }
</script>

<style scoped>
    img {
        width: 10vw;
    }
</style>