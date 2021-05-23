<template>
    <header>
        <h1>Rock Paper Scissors</h1>
        <div></div>
        <logout-button></logout-button>
    </header>
</template>

<script>
    import LogoutButton from "./LogoutButton.vue";

    export default {
        name: "desktop-game-header",

        components: {
            LogoutButton
        }
    }
</script>

<style scoped>
    header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;

        display: grid;
        place-items: center;
        grid-template-columns: 1fr 2fr 1fr;
        padding: 3vh 0vh;
        box-shadow: 1px 1px 5px lightgrey;
    }

    h1 {
        font-size: 1.1rem;
    }
</style>