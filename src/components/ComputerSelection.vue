<template>
    <div>
        <h1 @click="generatingComputerSelection">Computer</h1>
        <img :class="{ showComputerSelection: showRock}" src="../assets/rock.png" :alt="computerSelection[0].alt">
        <img :class="{ showComputerSelection: showPaper }" src="../assets/paper.png" :alt="computerSelection[1].alt">
        <img :class="{ showComputerSelection: showScissors }" src="../assets/scissors.png" :alt="computerSelection[2].alt">

        <!-- <img v-if="computerSelection[randomNum].selection === 0" src="../assets/rock.png" :alt="computerSelection[0].alt">
        <img v-if="computerSelection[randomNum].selection === 1" src="../assets/paper.png" :alt="computerSelection[1].alt">
        <img v-if="computerSelection[randomNum].selection === 2"  src="../assets/scissors.png" :alt="computerSelection[2].alt"> -->
    </div>
</template>

<script>
    export default {
        name: "computer-selection",
        data() {
            return {
                showRock: false,
                showPaper: false,
                showScissors: false
            }
        },
        methods: {
            generatingComputerSelection() {
                let randomNum = Math.floor(Math.random() * this.computerSelection.length);
                console.log(randomNum);
                if (this.computerSelection[randomNum].selection === "Rock") {
                    this.showRock = true;
                    this.showPaper = false;
                    this.showScissors = false;
                }

                else if (this.computerSelection[randomNum].selection === "Paper") {
                    this.showRock = false;
                    this.showPaper = true;
                    this.showScissors = false;
                }

                else {
                    this.showRock = false;
                    this.showPaper = false;
                    this.showScissors = true; 
                }
            }
        },
        computed: {
            computerSelection: function() {
                return this.$store.state.playerSelection; 
            }
        },
    }
</script>

<style scoped>
    img {
        width: 10vw;
        display: none;
    }

    .showComputerSelection {
        display: block
    }
</style>