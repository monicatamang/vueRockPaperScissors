<template>
    <section>
        <login-header></login-header>
        <!-- Adding a class binding to show the styled version of the status message when it is shown on the page -->
        <p :class="{ showMessage: printStatus }">{{ loginStatus }}</p>
        <main>
            <h1>Login</h1>
            <form action="javascript:void(0)">
                <input type="text" class="userInputs" id="userEmail" placeholder="Email*">
                <input type="password" class="userInputs" id="userPassword" placeholder="Password*">
                <!-- When the button is clicked, the userLogin function is called -->
                <input type="submit" id="loginButton" value="Login" @click="userLogin">
            </form>
        </main>
        <page-footer></page-footer>
    </section>
</template>

<script>
    // Importing axios and cookies and components
    import axios from "axios"
    import cookies from "vue-cookies"
    import LoginHeader from "../components/LoginHeader.vue";
    import PageFooter from "../components/PageFooter.vue";

    // Registering the components
    export default {
        name: "Login",
        components: {
            LoginHeader,
            PageFooter
        },
        data: function() {
            return {
                // Assigning a variable a boolean value to indicate that no status message is initially printed to the user
                printStatus: false,
                // Creating a variable as an empty string
                loginStatus: "",
                // Creating a variable that is assigned the user's login token
                RPSLoginToken: cookies.get(`RPSLoginToken`)
            }
        },
        methods: {
            // Creating a function that is called when the button is clicked
            userLogin: function() {
                // Printing a loading message to the user
                this.loginStatus = `Setting up the game...`;

                // Declaring the variable to true so that it can toggle the class binding on and show the styled version of the status message to the user
                this.printStatus = true;

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
                    // If the network is done and no errors occur, set a cookie with the user's login token
                    cookies.set(`RPSLoginToken`, res.data.token);
                    
                    // If the user has logged in successfully, the user will be shown the game page
                    this.$router.push('Game');
                }).catch((err) => {
                    // If the network is done but errors occur, print an error message to the user
                    console.log(err);
                    this.loginStatus = `Invalid email or password. Please try again.`;

                    // Declaring the variable to be true so that it can toggle the class binding on and show the styled version of the status message
                    this.printStatus = true;
                });
            }
        },
    }
</script>

<style scoped>
    section {
        display: grid;
        place-items: center;
        min-height: 100vh;
    }

    main {
        display: grid;
        place-items: center;
        row-gap: 30px;
        margin: 5vh 0vh;
        padding: 8vh 0vh;
        width: 25vw;
        border: 1px solid black;
    }

    main > h1 {
        font-weight: 600;
    }

    form {
        display: grid;
        place-items: center;
        row-gap: 25px;
        width: 15vw;
    }

    .userInputs {
        font-family: 'Quicksand', sans-serif;
        border: 1px 1px solid black;
        padding: 3% 5%;
        width: 100%;
    }

    #loginButton {
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        color: whitesmoke;
        background: rgba(0, 0, 0, 0.8);
        border: none;
        border-radius: 3px;
        width: 50%;
        padding: 5%;
        margin-top: 3vh;
        cursor: pointer;
    }

    #loginButton:hover {
        box-shadow: 1px 1px 5px lightgrey;
    }

    #loginButton:active {
        box-shadow: none;
    }

    .showMessage {
        margin: 1vh 0vh 5vh 0vh;
        padding: 1%;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
</style>