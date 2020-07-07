import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../components/HomeComponent');
const ApiComponent = () => import('../components/ApiComponent');
const NotesComponent = () => import('../components/Notes/NotesComponent');
const Login = () => import('../components/Auth/LoginComponent');

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
        component: Login
    }
];


const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
});

export default router;
