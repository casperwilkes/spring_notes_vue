<template>
    <div class="invalid-feedback" v-if="errors !== undefined && errors.length > 0">
        <span :key="id" role="alert" v-for="(message, id) in errors">
            <strong>{{message}}</strong>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            errors: Array
        }
    }
</script>
