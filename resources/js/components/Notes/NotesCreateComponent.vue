<template>
    <div>
        <NoteFormComponent :errors="errors" :handle="createHandle" focus="Create"/>
    </div>
</template>

<script>
    const NoteFormComponent = () => import('./Elements/NoteFormComponent');

    export default {
        data() {
            return {
                errors: {}
            }
        },
        components: {
            NoteFormComponent
        },
        methods: {
            createHandle: function (note) {
                axios.post('/api/v1/notes', note)
                     .then(() => this.$router.push({name: 'notes_user'}))
                     .catch(err => this.errors = err.response.data.errors);
            }
        }
    }
</script>
