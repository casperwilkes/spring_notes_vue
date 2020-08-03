<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm mb-3">
        <div class="container">
            <router-link :to="{name: 'home'}" class="navbar-brand">Spring Notes</router-link>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
                    data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'api'}" class="nav-link">Api</router-link>
                    </li>
                    <li class="nav-item" v-if="logged_in">
                        <router-link :to="{name: 'notes'}" class="nav-link">Notes</router-link>
                    </li>
                    <li class="nav-item" v-if="logged_in">
                        <router-link :to="{name: 'search'}" class="nav-link">Search</router-link>
                    </li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item" v-if="!logged_in">
                        <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!logged_in">
                        <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="logged_in">
                        <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                           id="navbarDropdown"
                           role="button">
                            {{ user.name }}
                        </a>

                        <div aria-labelledby="navbarDropdown" class="dropdown-menu dropdown-menu-right">
                            <router-link :to="{name: 'email_verify'}" class="dropdown-item" v-if="!verified">
                                Verify Account
                            </router-link>
                            <router-link :to="{name: 'password_change'}" class="dropdown-item" v-if="logged_in">
                                Change Password
                            </router-link>
                            <a @click.prevent="logout" class="dropdown-item" href="/logout">
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters([
            'user',
            'logged_in',
            'verified'
        ])
    },
}
</script>
