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
        width: 65%;
        margin-top: 10vh;
        padding: 1.5vh;
        box-shadow: 1px 1px 5px lightgrey;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 1px 1px 5px grey;
    }

    button:active {
        box-shadow: none;
    }
</style>