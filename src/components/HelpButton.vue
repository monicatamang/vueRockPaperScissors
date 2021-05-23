<template>
    <div>
        <router-link to="/Rules">
            <button><i class="far fa-question-circle"></i> Help</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "help-button"
    }
</script>

<style scoped>
    button {
        font-size: 0.95rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        background: white;
        color: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        border: none;
        margin-top: 10vh;
        padding: 1.5vh;
        box-shadow: 1px 1px 5px lightgrey;
        cursor: pointer;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        div {
            margin: 15vh 0vh;
        }

        button {
            padding: 2vh;
            width: 10vw;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        button {
            padding: 2vh;
            width: 20vw;
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        div {
            margin: 5vh 0vh;
        }

        button {
            padding: 3vh;
            width: 15vw;
            font-size: 1.4rem;
        }
    }
</style>