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
    import axios from "axios"
    import cookies from "vue-cookies"
    import LoginHeader from "../components/LoginHeader.vue";
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

                this.loginStatus = "Setting up the game...";

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
                    cookies.set("RPSLoginToken", res.data.token);
                    this.$router.push('/Game');
                }).catch((err) => {
                    this.loginStatus = "Invalid email or password. Please try again.";
                    err;
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
</style>