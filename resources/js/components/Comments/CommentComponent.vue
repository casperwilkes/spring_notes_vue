<template>
    <div class="row">
        <div class="col">
            <ul class="list-unstyled">
                <Fragment :key="comment.id" v-for="comment in comments">
                    <div :id="`comment-${comment.id}`" class="media" v-if="reply !== undefined && reply === true">
                        <CommentBodyComponent :comment="comment"/>
                    </div>
                    <li :comment="{comment}" :id="`comment-${comment.id}`" class="media" v-else>
                        <CommentBodyComponent :comment="comment"/>
                    </li>
                </Fragment>
            </ul>
        </div>
    </div>
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
