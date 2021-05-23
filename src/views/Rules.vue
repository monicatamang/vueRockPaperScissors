<template>
    <section>
        <button @click="gamePage"><i class="far fa-arrow-alt-circle-left"></i> Back to Game</button>
        <article>
            <h1>Legend</h1>
            <div id="legend">
                <div>
                    <p>Rock</p>
                    <img :src="RPSImage[0].src" :alt="RPSImage[0].alt">
                </div>
                <div>
                    <p>Paper</p>
                    <img :src="RPSImage[1].src" :alt="RPSImage[1].alt">
                </div>
                <div>
                    <p>Scissors</p>
                    <img :src="RPSImage[2].src" :alt="RPSImage[2].alt">
                </div>
            </div>
        </article>
        <article>
            <h1>General Rules</h1>
            <p>Rock crushes Scissors</p>
            <p>Paper covers Rock</p>
            <p>Scissors cuts Paper</p>
        </article>
        <article>
            <h1>How to Play</h1>
            <ol>
                <li id="stepOne">Select one of the three moves: Rock, Paper or Scissors.</li>
                <li>If you selected "Rock" and the computer plays "Scissors", you will win one point.</li>
                <li>If you selected "Paper" and the computer plays "Rock", you will win one point.</li>
                <li>If you selected "Scissors" and the computer plays "Paper", you will win one point.</li>
                <li>If both you and the computer play with the same move, it will be counted as a tie.</li>
            </ol>
        </article>
    </section>
</template>

<script>
    export default {
        name: "Rules",

        methods: {
            gamePage() {
                this.$router.go(-1);
            }
        },

        computed: {
            RPSImage() {
                return this.$store.state.rockPaperScissorsImages; 
            }
        }
    }
</script>

<style scoped>
    section {
        display: grid;
        row-gap: 50px;
        margin: 2vh 0vh 5vh 0vh;
    }

    article {
        display: grid;
        place-items: center;
        row-gap: 30px;
        text-align: left;
    }

    #legend {
        display: grid;
        place-items: center;
        text-align: center;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 30px;
    }

    #legend > div {
        display: grid;
        row-gap: 15px;
    }

    ol {
        display: grid;
        place-items: center;
        row-gap: 20px;
        width: 70vw;
    }

    h1 {
        font-size: 1.8rem;
    }

    p, li {
        font-size: 1.1rem;
    }

    img {
        width: 15vw;
        transform: rotate(90deg);
    }

    button {
        font-size: 0.9rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        background: white;
        color: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        border: none;
        width: 40vw;
        margin-left: 5vw;
        padding: 1.5vh;
        box-shadow: 1px 1px 5px lightgrey;
        cursor: pointer;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        section {
            margin: 5vh 0vh 15vh 0vh;
        }

        button {
            width: 20vw;
            margin-left: 2vw;
        }

        img {
            width: 10vw;
        }

        #stepOne {
            justify-self: start;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1366px) and (orientation: portrait) {

        section {
            row-gap: 5vh;
        }

        article {
            row-gap: 3vh;
        }

        #legend {
            column-gap: 5vw;
        }

        button {
            width: 25vw;
            margin-left: 2vw;
            font-size: 1.3rem;
        }

        h1 {
            font-size: 3rem;
        }

        p, li {
            font-size: 1.8rem;
        }

        ol {
            width: 80vw;
        }

        #stepOne {
            justify-self: start;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1366px) and (orientation: landscape) {

        section {
            row-gap: 7vh;
        }

        article {
            row-gap: 3vh;
        }

        #legend {
            row-gap: 5vh;
            column-gap: 5vw;
        }

        button {
            width: 20vw;
            margin-left: 2vw;
            font-size: 1.3rem;
        }

        img {
            width: 12vw;
        }

        h1 {
            font-size: 3rem;
        }

        p, li {
            font-size: 1.6rem;
        }

        ol {
            width: 80vw;
            justify-items: start;
        }
    }
</style>