<template>
    <header>
        <h1>Rock Paper Scissors</h1>
        <p>Let's Play!</p>
        <!-- Setting the image source and description to the values obtained from the store and displaying the rock, paper and scissors image on the login page -->
        <div id="imageContainer">
            <img id="rock" :src="optionImages[0].rockSrc" :alt="optionImages[0].rockAlt">
            <img id="paper" :src="optionImages[1].paperSrc" :alt="optionImages[1].paperAlt">
            <img id="scissors" :src="optionImages[2].scissorsSrc" :alt="optionImages[2].scissorsAlt">
        </div>
    </header>
</template>

<script>
    export default {
        name: "page-header",
        computed: {
            // Creating a function that gets the data of all the images
            optionImages() {
                return this.$store.state.rockPaperScissorsImages;
            }
        },
    }
</script>

<style scoped>
    header {
        display: grid;
        place-items: center;
        row-gap: 30px;
        padding: 5vh;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
    }

    #imageContainer {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        width: 30vw;
    }

    img {
        width: 7vw;
    }

    #rock, #scissors {
        transform: rotate(90deg);
    }
</style>