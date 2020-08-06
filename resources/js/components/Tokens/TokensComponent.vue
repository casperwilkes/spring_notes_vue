<template>
    <div>
        <div class="row mb-2">
            <div class="col text-right">
                <button aria-controls="TokenForm"
                        aria-expanded="false"
                        class="btn btn-primary"
                        data-target="#token_form"
                        data-toggle="collapse"
                        type="button">
                    <font-awesome-icon :icon="['fas', 'plus-circle']"/>
                    Generate Token
                </button>
            </div>
        </div>

        <div class="row mb-2 collapse justify-content-center" id="token_form">
            <div class="col-md-8">
                <div class="card card-body rounded shadow">
                    <form @submit.prevent="generateToken">
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label text-md-right" for="token_name">Token Name</label>

                            <div class="col-md-9">
                                <input
                                    :class="errors.token_name !== undefined ? 'is-invalid':''"
                                    autofocus
                                    class="form-control"
                                    id="token_name"
                                    name="token_name"
                                    required
                                    type="text"
                                    v-model.trim="token_name"
                                >

                                <FormErrorComponent :errors="errors.token_name"/>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-2">
                                <button class="btn btn-success" id="form_submit" type="submit">
                                    Generate
                                </button>
                            </div>
                        </div>
                    </form>
                    <hr>
                    <div class="card-body" id="token_output">
                        <button @click="copyToken" class="btn btn-info mr-2" type="button">
                            <font-awesome-icon :icon="['far', 'copy']"/>
                            Copy
                        </button>
                        <span class="card-text">Once generated, Your Token will appear below</span>
                        <p class="card-text" id="token_text"></p>
                        <span class="small">
                            <strong>* Note:</strong>
                            Copy token after creation. Token only visible once.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" v-if="!tokens_exist">
                    <div class="card-body text-center">
                        <p class="lead card-text">
                            No Api access tokens assigned. Click generate to create some.
                        </p>
                    </div>
                </div>
                <table class="table table-hover" v-else>
                    <thead class="text-center">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Last Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="token.id" v-for="token in tokens">
                            <td>{{ token.id }}</td>
                            <td>{{ token.name }}</td>
                            <td>{{ token.created_at }}</td>
                            <td>{{ token.last_used_at }}</td>
                            <td>
                                <button :id="`delete_btn_${token.id}`" @click="deleteToken(token.id)" class="btn btn-danger" type="button">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

const FormErrorComponent = () => import('../Elements/Form/FormErrorComponent');

export default {
    data() {
        return {
            tokens: [],
            errors: {},
            token_name: ''
        };
    },
    computed: {
        tokens_exist: function () {
            return this.tokens.length > 0;
        },
        ...mapGetters([
            'user'
        ]),
    },
    mounted() {
        this.fetchTokens();
    },
    methods: {
        /**
         * Fetches all the user's tokens
         */
        fetchTokens: function () {
            axios.get(`/api/v1/users/${this.user.id}/tokens`)
                 .then(res => this.tokens = res.data)
                 .catch(err => console.log(err));
        },
        /**
         * Generates a new access token
         */
        generateToken: function () {
            let token_text = document.getElementById('token_text');
            let token_output = document.getElementById('token_output');
            let form_submit = document.getElementById('form_submit');

            // Disable the submit button //
            form_submit.disabled = true;

            axios.post(`/api/v1/users/${this.user.id}/tokens`, {
                token_name: this.token_name
            })
                 .then((res) => {
                     // Set the output //
                     token_output.className += ' border border-success';
                     token_text.innerHTML = '<pre>' + res.data.token + '</pre>';
                     token_text.className += ' mt-2'
                     form_submit.disabled = false;
                     // Refetch tokens //
                     this.fetchTokens();
                 })
                 .catch(err => this.errors = err.response.data.errors);
        },
        /**
         * Deletes an api token from account
         * @param {int} id Id of token
         */
        deleteToken: function (id) {
            let btn = document.getElementById(`delete_btn_${id}`);
            // Disable the button //
            btn.disabled = true;

            axios.delete(`/api/v1/users/${this.user.id}/tokens/${id}`)
                 .then(() => {
                     const index = _.findIndex(this.tokens, n => n.id === id);
                     this.tokens.splice(index, 1);
                 })
                 .catch(() => {
                     this.flashMessage.error({message: 'Unable to delete token at this time'});
                     btn.disabled = false;
                 });
        },
        /**
         * Copies the generated token
         */
        copyToken: function () {
            // Make sure render refreshes before trying to copy
            this.$nextTick(() => {
                // Get token //
                const token_text = document.getElementById('token_text').innerText;

                // If token not generated yet //
                if (token_text.length === 0) {
                    this.flashMessage.warning({message: 'No token generated to copy'});
                } else {
                    // Get output div //
                    let token_output = document.getElementById('token_output');
                    // Create a false span //
                    let shadow_text = document.createElement('span');

                    // Copy over output //
                    shadow_text.innerText = token_text;
                    // add to output div //
                    token_output.append(shadow_text);

                    // Create invisible range //
                    let range = document.createRange();
                    // Get current window selections //
                    let selection = window.getSelection();

                    // Add the element to the range //
                    range.selectNodeContents(document.getElementById('token_text'));
                    range.selectNodeContents(shadow_text);
                    // Remove previous ranges //
                    selection.removeAllRanges();
                    // Add the new selection //
                    selection.addRange(range);

                    // Attempt to copy //
                    document.execCommand('copy')
                    ? this.flashMessage.success({message: 'Token copy success'})
                    : this.flashMessage.error({message: 'Token copy unsuccessful'});

                    // Delete the shadow_text before it appears //
                    shadow_text.remove();
                }
            });
        }
    },
    components: {
        FormErrorComponent
    }
}
</script>
