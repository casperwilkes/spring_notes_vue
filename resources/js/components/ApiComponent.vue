<template>
    <div class="row justify-content-center" id="api">
        <div class="col-sm-10">
            <div class="card shadow">
                <div class="card-body">
                    <div class="card mb-2">
                        <h1 class="card-header text-center">Interacting</h1>
                        <div class="card-body">
                            <dl>
                                <dt>
                                    Preparing to interact with the API
                                </dt>
                                <dd>
                                    In order to interact with the API, you must have a pre-qualified access key and token. Your
                                    key and token are necessary to interact with the api and are required with every request made.
                                </dd>
                                <dt>
                                    Using your 'key' and 'token'
                                </dt>
                                <dd>
                                    Every request needs to include it's key and token within the request string.
                                </dd>
                                <dt>
                                    Example:
                                </dt>
                                <dd>
                                    <code>http://spring_notes/v1/entrypoint?key=your_key&amp;token=your_token</code>
                                </dd>
                                <dt>
                                    Response Body
                                </dt>
                                <dd>
                                    All responses will conform to this schema
                                </dd>
                            </dl>
                            <pre class="prettyprint lang-json">{{JSON.stringify(Examples.response_schema, null, 4)}}</pre>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col">
                            <h2 class="text-center">Usage</h2>
                        </div>
                    </div>

                    <div class="card mb-2">
                        <p class="h3 card-header">Getting all notes</p>
                        <div class="card-body">
                            <dl>
                                <dt>Request</dt>
                                <dd><code>GET - /v1/notes HTTP/1.1</code></dd>
                                <dt>Example</dt>
                                <dd><code>/v1/notes?:tokens</code></dd>
                                <dt>Response</dt>
                                <dd> Returns an array of all notes</dd>
                            </dl>
                            <pre class="prettyprint lang-json">{{JSON.stringify(Examples.get_all, null, 4)}}</pre>
                        </div>
                    </div>

                    <div class="card mb-2">
                        <p class="h3 card-header">Getting a note by id</p>
                        <div class="card-body">
                            <dl>
                                <dt>Request</dt>
                                <dd><code>GET - /v1/notes/{"{id}"} HTTP/1.1</code></dd>
                                <dt><strong>Example:</strong></dt>
                                <dd><code>/v1/notes/2?:tokens</code></dd>
                                <dt>Response</dt>
                                <dd>Returns a single note</dd>
                            </dl>
                            <pre class="prettyprint lang-json">{{JSON.stringify(Examples.by_id, null, 4)}}</pre>
                        </div>
                    </div>

                    <div class="card mb-2">
                        <p class="h3 card-header">Getting all notes for a user</p>
                        <div class="card-body">
                            <dl>
                                <dt>Request</dt>
                                <dd><code>GET - /v1/notes/{"{id}"}/user_id HTTP/1.1</code></dd>
                                <dt>Example</dt>
                                <dd><code>/v1/notes/1/user_id?:tokens</code></dd>
                                <dt>Response</dt>
                                <dd>Returns an array of notes for that user</dd>
                            </dl>
                            <pre class="prettyprint lang-json">{{JSON.stringify(Examples.all_user, null, 4)}}</pre>
                        </div>
                    </div>

                    <div class="card mb-2">
                        <p class="h3 card-header">Create a new note</p>
                        <div class="card-body">
                            <dl>
                                <dt>Request</dt>
                                <dd><code>POST - /v1/notes HTTP/1.1</code></dd>
                                <dt>Request body schema</dt>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.new_note.schema, null, 4)}}</pre>
                            <dl>
                                <dt>Example</dt>
                                <dd><code>/v1/notes?:tokens</code></dd>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.new_note.example, null, 4)}}</pre>
                            <dl>
                                <dt>Response</dt>
                                <dd>Returns the id of the note created</dd>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.new_note.response, null, 4)}}</pre>
                        </div>
                    </div>

                    <div class="card mb-2">
                        <p class="h3 card-header">Update a note</p>
                        <div class="card-body">
                            <dl>
                                <dt>Request</dt>
                                <dd><code>GET - /v1/notes/{"{id}"}/user_id HTTP/1.1</code></dd>
                                <dt>Request body schema</dt>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.update_note.schema, null, 4)}}</pre>
                            <dl>
                                <dt>Example</dt>
                                <dd><code>/v1/notes/15?:tokens</code></dd>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.update_note.example, null, 4)}}</pre>
                            <dl>
                                <dt>Response</dt>
                                <dd>Returns a boolean value indicating note was updated</dd>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.update_note.response, null, 4)}}</pre>
                        </div>
                    </div>

                    <div class="card mb-2">
                        <div class="h3 card-header">Delete a note</div>
                        <div class="card-body">
                            <dl>
                                <dt>Request</dt>
                                <dd><code>DELETE - /v1/notes/{"{id}"} HTTP/1.1</code></dd>
                                <dt>Example</dt>
                                <dd><code>/v1/notes/15?:tokens</code></dd>
                                <dt>Response</dt>
                                <dd>Returns a boolean value indicating note was deleted</dd>
                            </dl>
                            <pre class="prettyprint json">{{JSON.stringify(Examples.delete_note, null, 4)}}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FlashMessage></FlashMessage>
    </div>

</template>

<script>
    import Examples from '../includes/examples.json';

    export default {
        data() {
            return {
                Examples: Examples
            }
        },
        mounted() {
            // Add prettyprint cdn to page //
            let pretty = document.createElement('script');
            pretty.setAttribute('src', 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert');
            document.head.appendChild(pretty);
        }
    }
</script>
