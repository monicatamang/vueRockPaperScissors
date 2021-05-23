<template>
    <div>
        <button @click="logoutUser">Logout</button>
    </div>
</template>

<script>
    import cookies from "vue-cookies";

    export default {
        name: "logout-button",

        methods: {
            logoutUser: function() {
                cookies.remove("RPSLoginToken");
                this.$router.push('/');
            }
        }
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
        width: 85%;
        margin-top: 10vh;
        padding: 1.5vh;
        box-shadow: 1px 1px 5px lightgrey;
        cursor: pointer;
    }

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {

        div {
            margin-bottom: 10vh;
        }

        button {
            padding: 2vh;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        button {
            padding: 2vh;
            width: 60%;
            margin-bottom: 5vh;
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        div {
            margin-bottom: 3vh;
        }

        button {
            padding: 3vh;
            width: 60%;
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        
        button {
            background: whitesmoke;
            margin-top: 0vh;
            padding: 0vh;
            box-shadow: none;
        }

        button:hover {
            font-weight: bold;
        }

        button:active {
            box-shadow: none;
        }
    }
</style>