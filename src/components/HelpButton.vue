<template>
    <div>
        <router-link to="/Rules">
            <button><i class="far fa-question-circle"></i> Help</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "help-button"
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
        margin-top: 10vh;
        padding: 1.5vh;
        box-shadow: 1px 1px 5px lightgrey;
        cursor: pointer;
    }
</style>