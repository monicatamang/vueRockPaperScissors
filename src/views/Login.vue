<template>
    <section>
        <page-header></page-header>
        <main>
            <h1>Login</h1>
            <form action="javascript:void(0)">
                <input type="text" id="userEmail" placeholder="Email*">
                <input type="password" id="userPassword" placeholder="Password*">
                <!-- Adding a click event listener which calls the userLogin function -->
                <input type="submit" id="submitButton" value="Login" @click="userLogin">
            </form>
            <p>{{ loginStatus }}</p>
        </main>
        <page-footer></page-footer>
    </section>
</template>

<script>
    // Importing axios and cookies to send an API request and store the user's token
    import axios from "axios"
    import cookies from "vue-cookies"
    import PageHeader from "../components/PageHeader.vue";
    import PageFooter from "../components/PageFooter.vue";

    export default {
        name: "Login",
        components: {
            PageHeader,
            PageFooter
        },
        data: function() {
            return {
                // Creating an empty string as a varible and getting the user's login token
                loginStatus: "",
                RPSLoginToken: cookies.get(`RPSLoginToken`)
            }
        },
        methods: {
            // Creating a function that is called when the button is clicked and sends a POST request
            userLogin: function() {
                // Printing a loading message to the user
                this.loginStatus = `Setting up the game...`;
                // Configuring an axios request with the type, url, content-type, the user's email and password
                axios.request({
                    url: `https://reqres.in/api/login`,
                    method: `POST`,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        email: document.getElementById(`userEmail`).value,
                        password: document.getElementById(`userPassword`).value
                    }
                }).then((res) => {
                    // If the network is done and no errors occur, set a cookie with the user's login token in the browser and re-declare the RPSLoginToken to be the token returned by the API
                    cookies.set(`RPSLoginToken`, res.data.token);
                    this.RPSLoginToken = res.data.token;
                    // If the user has logged in successfully, the user will be shown the game page
                    this.$router.push('Game');
                }).catch((err) => {
                    // If the network is done but errors occur, print an error message to the user
                    console.log(err);
                    this.loginStatus = `Invalid email or password. Please try again.`;
                });
            }
        },
    }
</script>

<style scoped>
    main {
        display: grid;
        place-items: center;
        min-height: 50vh;
    }

    section {
        min-height: 80vh;
    }

    form {
        display: grid;
        place-items: center;
        row-gap: 10px;
    }
</style>