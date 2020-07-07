<template>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            <div class="card shadow text-center rounded shadow">
                <div class="card-body">
                    <dl>
                        <dt>
                            What is Spring Notes?
                        </dt>
                        <dd>
                            Spring notes is a sample project of back end work
                        </dd>
                        <dt>
                            Why "Spring Notes"
                        </dt>
                        <dd>
                            The name came about because the name of the company is "SharpSpring"
                        </dd>
                        <dt>
                            What does this application do?
                        </dt>
                        <dd>
                            This application registers users and allows the creation and editing of simple notes (title, body)
                        </dd>
                        <dt>
                            Sounds great! How do I start?
                        </dt>
                        <dd>
                            Click on the log in button in the navigation, and click the register button to register a new user.
                            Once a new user has been created, you can then access the notes page. From there, you can create, edit,
                            and delete your notes.
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <FlashMessage></FlashMessage>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
