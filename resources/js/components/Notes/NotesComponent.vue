<template>
    <div>
        <div class="row mb-3 justify-content-end">
            <div class="col-md-4">
                <div class="border-dark shadow nav-fill">
                    <nav class="nav nav-pills">
                        <router-link :to="{name: 'notes'}" class="nav-item nav-link" exact>
                            <font-awesome-icon :icon="['fas', 'stream']"/>
                            All Notes
                        </router-link>
                        <router-link :to="{name: 'notes_create'}" class="nav-item nav-link">
                            <font-awesome-icon :icon="['fas', 'folder-plus']"/>
                            New Note
                        </router-link>
                        <router-link :to="{name: 'notes_user'}" class="nav-item nav-link">
                            <font-awesome-icon :icon="['fas', 'folder']"/>
                            My Notes
                        </router-link>
                    </nav>
                </div>
            </div>
        </div>

        <router-view/>
    </div>
</template>

<script>
    export default {}
</script>
