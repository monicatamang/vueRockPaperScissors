<template>
    <section>
        <article v-if="!RPSLoginToken">
            <p>You are not logged in. Please go back to the login page.</p>
            <button @click="takeUserToLoginPage">Back</button>
        </article>
        <article v-else>
            <h1>This is the game page!</h1>
            <user-selection></user-selection>
            <computer-selection></computer-selection>
            <score-board></score-board>
            <!-- Inject components here -->
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

</style>