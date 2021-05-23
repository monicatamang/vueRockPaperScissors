<template>
    <header>
        <div id="imageContainer">
            <img id="rock" :src="optionImages[0].src" :alt="optionImages[0].alt">
            <img id="paper" :src="optionImages[1].src" :alt="optionImages[1].alt">
            <img id="scissors" :src="optionImages[2].src" :alt="optionImages[2].alt">
        </div>
        <h1>Rock Paper Scissors</h1>
        <p>Please use eve.holt@reqres.in as the email. The password can be anything you like.</p>
    </header>
</template>

<script>
    export default {
        name: "page-header",
        computed: {
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
        row-gap: 35px;
        padding: 0vh 5vh;
    }

    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.6);
    }

    #imageContainer {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        width: 100%;
    }

    img {
        width: 80%;
    }

    #rock, #scissors {
        transform: rotate(90deg);
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
        
        header {
            margin-top: 10vh;
            row-gap: 25px;
        }


        #imageContainer {
            width: 30%;
        }

        img {
            width: 80%;
        }   

        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
</style>