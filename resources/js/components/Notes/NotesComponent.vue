<template>
    <div>
        <div class="row mb-3 justify-content-between">
            <div class="col-md-2">
                <div class="dropdown" v-if="$route.name === 'notes_user' || $route.name === 'notes'">
                    <button aria-expanded="false" aria-haspopup="true" class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                            id="dropdownMenuButton" type="button">
                        Filter
                    </button>
                    <div aria-labelledby="dropdownMenuButton" class="dropdown-menu">
                        <button :class="{active: filter === 'newest'}" @click="filter = 'newest'" class="dropdown-item" type="button">Newest</button>
                        <button :class="{active: filter === 'oldest'}" @click="filter = 'oldest'" class="dropdown-item" type="button">Oldest</button>
                    </div>
                </div>
            </div>
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

        <router-view :filter="filter"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filter: "newest"
            }
        },
    }
</script>
