<template>
    <div ref="aplayer"></div>
</template>

<script>
    export default {
        name: 'APlayer',
        props: {
            options: Object,
        },
        mounted() {
            import('aplayer').then(({default: APlayer}) => {
                const root = this.$refs.aplayer
                this.ap = new APlayer({
                    container: root,
                    ...this.options,
                })
            })
        },
        beforeDestroy() {
            this.ap && this.ap.pause()
        },
        methods: {},
    }
</script>

<style  scoped>
    @import 'APlayer.min.css';
</style>
