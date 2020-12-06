import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import CvPage from './pages/resume';
import CloneIndex from './pages/Clone-index'
import CssCard from './pages/css-card'
import Demo from './pages/test'


import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import StarterNavbar from "@/layout/StarterNavbar";
import StarterFooter from "@/layout/FooterExample";


Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'index',
            components: {default: Index, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/clone',
            name: 'clone-index',
            components: {default: CloneIndex, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/landing',
            name: 'landing',
            components: {default: Landing, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/login',
            name: 'login',
            components: {default: Login, header: MainNavbar},
            props: {
                header: {colorOnScroll: 400}
            }
        },
        {
            path: '/profile',
            name: 'profile',
            components: {default: Profile, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/resume',
            name: 'resume',
            components: {default: CvPage, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/card',
            name: 'css-card',
            components: {default: CssCard, header: StarterNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 0},
                footer: {backgroundColor: 'black'}
            }
        },
        {
            path: '/test',
            name: 'test',
            components: {default: Demo},
            props: {
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
