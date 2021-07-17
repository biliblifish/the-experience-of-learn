<template>
    <div id="vue-admin">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            appData: []
        }
    },
    created() {
        console.log(Promise)
    }
}
</script>

<style>
#vue-admin {
    height: 100%;
    width: 100%;
}
</style>
