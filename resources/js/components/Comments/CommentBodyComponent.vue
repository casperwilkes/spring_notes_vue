<template>
    <Fragment>
        <img alt="profile" class="mr-3" src="/img/profile.svg">
        <div class="media-body">
            <h5 class="mt-0 mb-1">{{ comment.commenter.name }} <small class="text-muted">- {{ comment.created_at | moment(date_format) }}</small></h5>
            <div style="white-space: pre-wrap;">{{ comment.comment }}</div>

            <div>
                <button :data-target="`#reply-modal-${comment.id}`" class="btn btn-sm btn-link text-uppercase" data-toggle="modal">Reply</button>
                <button :data-target="`#comment-modal-${comment.id}`" class="btn btn-sm btn-link text-uppercase" data-toggle="modal">Edit</button>
                <button @click="deleteComment" class="btn btn-sm btn-link text-danger text-uppercase">Delete</button>
            </div>

            <br/>

            <CommentComponent :comments="comment.children" :reply="true"/>
        </div>


        <EditModalComponent :comment.sync="comment"/>

        <ReplyModalComponent :comment="comment"/>

    </Fragment>
</template>

<script>
import {Fragment} from 'vue-fragment';

const CommentComponent = () => import('./CommentComponent')
const EditModalComponent = () => import('./Elements/EditModalComponent');
const ReplyModalComponent = () => import('./Elements/ReplyModalComponent');

export default {
    props: {
        comment: Object
    },
    methods: {
        deleteComment: function () {

        },
    },
    components: {
        ReplyModalComponent,
        CommentComponent,
        EditModalComponent,
        Fragment
    }
}
</script>
