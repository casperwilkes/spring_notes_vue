import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store';

Vue.use(VueRouter);
const Home = () => import('../components/HomeComponent');
const ApiComponent = () => import('../components/ApiComponent');
const NotesComponent = () => import('../components/Notes/NotesComponent');
const LoginComponent = () => import('../components/Auth/LoginComponent');
const RegisterComponent = () => import('../components/Auth/RegisterComponent');


const routes = [
    {
        path: '/',
        name: 'base',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/api',
        name: 'api',
        component: ApiComponent
    },
    {
        path: '/notes',
        name: 'notes',
        component: NotesComponent,
        meta: {
            auth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    }
];


const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
});

router.beforeEach((to, from, next) => {
    // Check if route has auth field //
    if (to.matched.some(record => record.meta.auth)) {
        // Check if user currently logged in //
        if (!store.getters.logged_in) {
            next('login');
        }
    }

    next();
});

export default router;
