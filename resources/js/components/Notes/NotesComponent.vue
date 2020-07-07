<template>
    <div>
        <FlashMessage></FlashMessage>
    </div>

</template>

<script>
    export default {
        mounted() {
            axios.get(`/api/v1/notes`)
                 .then(res => {
                    console.log(res.data);
                 })
                 .catch(err => console.log(err));
        }
    }
</script>
