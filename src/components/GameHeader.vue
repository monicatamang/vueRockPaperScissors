<template>
    <header>
        <div>
            <h1>Rock Paper Scissors</h1>
            <!-- When the button is clicked, the logoutUser function is called -->
            <button @click="logoutUser">Logout</button>
        </div>
        <p>Select a move to start the game.</p>
    </header>
</template>

<script>
    // Importing cookies to the game header page
    import cookies from "vue-cookies"

    export default {
        name: "game-header",
        methods: {
            // Creating a function that is called when the user logs out, removing user login token and taking the user back to the login page
            logoutUser: function() {
                cookies.remove(`RPSLoginToken`);
                this.$router.push('/');
            }
        },
    }
</script>

<style scoped>
    div {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(2, 1fr);
    }

    h1 {
        font-size: 2rem;
        padding: 5vh 0vh;
    }

    p {
        font-size: 1.1rem;
    }

    button {
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 3px;
        border: none;
        padding: 1.5vh;
        cursor: pointer;
    }

    button:hover {
        box-shadow: 1px 1px 5px grey;
    }

    button:active {
        box-shadow: none;
    }
</style>