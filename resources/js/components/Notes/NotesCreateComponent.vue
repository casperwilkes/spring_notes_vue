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
                 .then((res) => {
                     this.$router.push({name: 'notes_view', params: {id: res.data.id}})
                 })
                 .catch(err => this.errors = err.response.data.errors);
        }
    }
}
</script>
