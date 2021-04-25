<template>
    <section>
        <article>
            <div v-if="!RPSLoginToken">
                <p>You are not logged in. Please go back to the login page.</p>
                <button @click="takeUserToLoginPage">Back</button>
            </div>
            <div v-else>
                <h1>Rock Paper Scissors</h1>
                <score-board></score-board>
                <div id="players">
                    <user-selection></user-selection>
                    <computer-selection></computer-selection>
                </div>
            </div>
        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import cookies from "vue-cookies";
    import UserSelection from "../components/UserSelection.vue";
    import ComputerSelection from "../components/ComputerSelection.vue";
    import ScoreBoard from "../components/ScoreBoard.vue";
    import PageFooter from "../components/PageFooter.vue";

    export default {
        name: "Game",
        components: {
            UserSelection,
            ComputerSelection,
            ScoreBoard,
            PageFooter
        },
        data() {
            return {
                RPSLoginToken: cookies.get(`RPSLoginToken`)
            }
        },
        methods: {
            takeUserToLoginPage: function() {
                this.$router.push('/');
            }
        },
    }
</script>

<style scoped>
    /* article {
        min-height: 80vh;
    } */

    #players {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        min-height: 90vh;
    }
</style>