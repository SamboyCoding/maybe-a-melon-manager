<template>
    <div id="app">
        Hello world
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class App extends Vue {

    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    html, body, #app {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }
</style>
