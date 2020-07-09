import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../components/HomeComponent');
const ApiComponent = () => import('../components/ApiComponent');
const NotesComponent = () => import('../components/Notes/NotesComponent');
const LoginComponent = () => import('../components/Auth/LoginComponent');
const RegisterComponent = () => import('../components/Auth/RegisterComponent');

Vue.use(VueRouter);

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
        component: NotesComponent
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

export default router;
