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
            // Getting the images of all the options from the store
            optionImages() {
                return this.$store.state.rockPaperScissorsImages;
            }
        }
    }
</script>

<style scoped>
    header {
        display: grid;
        place-items: center;
        row-gap: 35px;
        padding: 0vh 5vh;
        margin-top: 5vh;
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

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        header {
            margin-top: 5vh;
            row-gap: 50px
        }

        #imageContainer {
            width: 80%;
        }

        img {
            width: 60%;
        }

        h1 {
            font-size: 3.5rem;
        }

        p {
            font-size: 1.5rem;
            padding: 0vw 10vw;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        header {
            margin-top: 5vh;
            row-gap: 50px;
        }

        #imageContainer {
            width: 40%;
        }

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
            padding: 0vw 22vw;
        }
    }

    @media only screen and (min-width: 1024px) {

        header {
            margin-top: 10vh;
        }

        #imageContainer {
            width: 25%;
        }

        img {
            width: 70%;
        }
    }
</style>