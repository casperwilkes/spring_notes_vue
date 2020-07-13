<template>
    <div>
        <NoteFormComponent :errors="errors" :handle="editHandle" :noteObject="note" focus="Edit"/>
    </div>
</template>

<script>
    const NoteFormComponent = () => import('./Elements/NoteFormComponent');

    export default {
        data() {
            return {
                errors: {},
                note: {
                    title: null,
                    body: null
                }
            }
        },
        components: {
            NoteFormComponent
        },
        mounted() {
            axios.get(`/api/v1/notes/${this.$route.params.id}`).then(res => this.note = res.data).catch(err => console.log(err));
        },
        methods: {
            editHandle: function (note) {
                axios.put(`/api/v1/notes/${note.id}`, note)
                     .then(() => {
                         this.flashMessage.success({message: 'Successfully edited note'});
                         this.$router.push({name: 'notes_user'})
                     })
                     .catch(err => this.errors = err.response.data.errors);
            }
        }
    }
</script>
