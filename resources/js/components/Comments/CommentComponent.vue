<template>
    <ul class="list-unstyled mt-4">
        <Fragment :key="comment.id" v-for="comment in comments">
            <div class="media" :id="`comment-${comment.id}`" v-if="reply !== undefined && reply === true">
                <CommentBodyComponent :comment="comment"/>
            </div>
            <li :comment="{comment}" class="media" :id="`comment-${comment.id}`" v-else>
                <CommentBodyComponent :comment="comment"/>
            </li>
        </Fragment>
    </ul>
</template>


<script>

    import {Fragment} from 'vue-fragment';

    const CommentBodyComponent = () => import('./CommentBodyComponent');

    export default {
        props: {
            reply: Boolean,
            comments: Array
        },
        components: {
            CommentBodyComponent,
            Fragment
        }
    }
</script>
