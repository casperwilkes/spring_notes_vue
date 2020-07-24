<template>
    <NoteBodyComponent :note="note" v-if="note.id !== undefined"/>
</template>

<script>

    const NoteBodyComponent = () => import('./Elements/NoteBodyComponent');

    export default {
        data() {
            return {
                note: {}
            }
        },
        mounted() {
            axios.get(`/api/v1/notes/${this.$route.params.id}`)
                 .then(res => this.note = res.data)
                 .catch(err => console.log(err));
        },
        components: {
            NoteBodyComponent
        }
    }
</script>
