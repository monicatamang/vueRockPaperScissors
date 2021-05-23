<template>
    <section>
        <login-header></login-header>
        <main>
            <form action="javascript:void(0)">
                <input type="text" class="userInputs" id="userEmail" placeholder="Email*">
                <input type="password" class="userInputs" id="userPassword" placeholder="Password*">
                <input type="submit" id="loginButton" value="Login" @click="userLogin">
            </form>
        </main>
        <p>{{ loginStatus }}</p>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";
    import LoginHeader from "../components/Headers/LoginHeader.vue";
    import PageFooter from "../components/PageFooter.vue";
    
    export default {
        name: "Login",
        
        components: {
            LoginHeader,
            PageFooter
        },

        data: function() {
            return {
                isLoading: false,
                loginStatus: "",
                RPSLoginToken: cookies.get("RPSLoginToken")
            }
        },

        methods: {
            userLogin: function() {

                // Printing a loading message to the user
                this.loginStatus = "Setting up the game...";

                // Configuring an axios request with the type, url, email and password
                axios.request({
                    url: "https://reqres.in/api/login",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        email: document.getElementById("userEmail").value,
                        password: document.getElementById("userPassword").value
                    }
                }).then((res) => {
                    // If the network is done and there are no errors, set the user's login token as a cookies and take the user to the game page
                    cookies.set("RPSLoginToken", res.data.token);
                    this.$router.push('/Game');
                }).catch((err) => {
                    // If the network is done but the page errors, print an error message to the user
                    this.loginStatus = "Invalid email or password. Please try again.";
                    err;
                });
            }
        },
    }
</script>

<style scoped>
    #desktopHeader {
        display: none;
    }

    section {
        display: grid;
        place-items: center;
        min-height: 100vh;
    }

    main {
        display: grid;
        place-items: center;
        row-gap: 30px;
    }

    form {
        display: grid;
        place-items: center;
        row-gap: 25px;
        width: 60vw;
    }

    .userInputs {
        font-family: 'Quicksand', sans-serif;
        padding: 1vh 0vh 1vh 1vh;
        width: 100%;
        border: 0.5px solid rgba(0, 0, 0, 0.8);
        background: white;
    }

    .userInputs:focus {
        outline: none;
    }

    #loginButton {
        font-family: 'Quicksand', sans-serif;
        font-size: 1rem;
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

    @media only screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
        
        section {
            row-gap: 50px;
        }

        form {
            width: 30vw;
        }

        #loginButton {
            font-size: 0.8rem;
            padding: 3% 1%;
            width: 40%;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {

        .userInputs {
            width: 60vw;
            padding: 2vh 0vh 2vh 2vh;
            font-size: 1.5rem;
        }

        #loginButton {
            font-size: 1.5rem;
            padding: 3% 1%;
            width: 30%;
        }

        p {
            font-size: 1.6rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        form {
            margin-top: 10vh;
            width: 35vw;
        }

        .userInputs {
            padding: 2vh 0vh 2vh 2vh;
            font-size: 1.4rem;
        }

        #loginButton {
            font-size: 1.6rem;
            padding: 3% 1%;
            width: 30%;
        }

        p {
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 1024px) {

        #desktopHeader {
            display: grid;
        }

        form {
            margin-top: 5vh;
            width: 30vw;
        }

        .userInputs {
            padding: 1.5vh 0vh 1.5vh 1.5vh;
        }

        #loginButton {
            font-size: 0.9rem;
            padding: 3% 1%;
            width: 25%;
        }
    }
</style>