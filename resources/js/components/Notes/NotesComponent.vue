<template>
    <div>
        <NoteBodyComponent :key="nid" :note="note" v-for="(note, nid) in notes"/>
    </div>
</template>

<script>
    import NoteBodyComponent from './Elements/NoteBodyComponent';

    export default {
        data() {
            return {
                notes: {}
            };
        },
        components: {
            NoteBodyComponent
        },
        mounted() {
            axios.get(`/api/v1/notes`)
                 .then(res => {
                     this.notes = res.data.data;
                     console.log(res.data);
                 })
                 .catch(err => console.log(err));
        },
        methods: {}
    }
</script>
