import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store';

Vue.use(VueRouter);

// Base pages //
const Home = () => import('../components/HomeComponent');
const ApiComponent = () => import('../components/Api/ApiComponent');

// Auth pages //
const LoginComponent = () => import('../components/Auth/LoginComponent');
const RegisterComponent = () => import('../components/Auth/RegisterComponent');
const VerifyEmailComponent = () => import('../components/Auth/VerifyEmailComponent');
const EmailRequestComponent = () => import('../components/Auth/Password/EmailRequestComponent');
const PasswordResetComponent = () => import('../components/Auth/Password/PasswordResetComponent');
const PasswordChangeComponent = () => import('../components/Auth/Password/PasswordChangeComponent');
const TokensComponent = () => import('../components/Tokens/TokensComponent');

// App pages //
const NotesComponent = () => import('../components/Notes/NotesComponent');
const NotesIndexComponent = () => import('../components/Notes/NotesIndexComponent');
const NotesViewComponent = () => import('../components/Notes/NotesViewComponent');
const NotesCreateComponent = () => import('../components/Notes/NotesCreateComponent');
const NotesEditComponent = () => import('../components/Notes/NotesEditComponent');
const NotesUserComponent = () => import('../components/Notes/NotesUserComponent');

const SearchComponent = () => import('../components/Search/SearchComponent');

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
        component: NotesComponent,
        meta: {
            auth: true
        },
        children: [
            {
                path: '',
                name: 'notes',
                component: NotesIndexComponent
            },
            {
                path: ':id',
                name: 'notes_view',
                component: NotesViewComponent
            },
            {
                path: 'create',
                name: 'notes_create',
                component: NotesCreateComponent,
                meta: {
                    verified: true
                }
            },
            {
                path: 'edit/:id',
                name: 'notes_edit',
                component: NotesEditComponent
            },
            {
                path: 'user/:user?',
                name: 'notes_user',
                component: NotesUserComponent
            }
        ]
    },
    {
        path: '/access_tokens',
        name: 'access_tokens',
        component: TokensComponent,
        meta: {
            auth: true,
            verified: true,
        }
    },
    {
        path: '/search',
        name: 'search',
        component: SearchComponent,
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
    },
    {
        path: '/email/verify/:id?/:hash?',
        name: 'email_verify',
        component: VerifyEmailComponent,
        meta: {
            auth: true
        }
    },
    {
        path: '/password/reset',
        name: 'password_email',
        component: EmailRequestComponent
    },
    {
        path: '/password/reset/:token',
        name: 'password_reset',
        component: PasswordResetComponent
    },
    {
        path: '/password/change',
        name: 'password_change',
        component: PasswordChangeComponent,
        meta: {
            auth: true
        }
    }
];


const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    // Check if route has auth field //
    if (to.matched.some(record => record.meta.auth)) {
        // Check if user currently logged in //
        if (!store.getters.logged_in) {
            next({name: 'login'});
        }
    }

    // Check if route has verified field //
    if (to.matched.some(record => record.meta.verified)) {
        // Check if user currently logged in //
        if (store.getters.logged_in && !store.getters.verified) {
            next({name: 'email_verify'});
        }
    }

    next();
});

export default router;
