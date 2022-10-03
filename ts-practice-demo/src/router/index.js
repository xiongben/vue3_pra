import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/ts1',
        name: 'tsDemo1',
        component: () => import(/* webpackChunkName: "about" */ '../views/TSDemo1.vue')
    },
    {
        path: '/css-page',
        name: 'cssPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/CssPage.vue')
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map