<template>
    <div>
        <div class="row my-3">
            <div class="col">
                <h2 class="text-center text-capitalize">{{ header }}</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col">
                <div :key="e_type_id" class="card mb-2 shadow" v-for="(e_type, e_type_id) in requests">
                    <p class="h3 card-header text-capitalize">{{ e_type.header }}</p>
                    <div class="card-body">
                        <dl>
                            <dt>Description</dt>
                            <dd v-html="e_type.description"></dd>

                            <dt>Request</dt>
                            <dd>
                                <span class="text-uppercase">{{ e_type.type }}</span>
                                - <code>{{ e_type.url }}</code>
                            </dd>

                            <dt>Parameters</dt>
                            <dd v-if="Object.keys(e_type.params).length === 0">No parameters</dd>
                            <dd :key="param_id" v-else v-for="(param, param_id) in e_type.params">
                                {{ param_id }}: <code>{{ param.type }}</code>
                                - <span v-html="param.description"></span>
                            </dd>

                            <dt>Response Code</dt>
                            <dd><code>{{ e_type.code }}</code></dd>

                            <dt>Response Body</dt>
                            <dd>{{ e_type.response_text }}</dd>
                        </dl>
                        <pre class="prettyprint lang-json">{{ JSON.stringify(e_type.response, null, 4) }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        requests: Object,
        header: String
    }
}
</script>
