import {RouteConfigsTable} from "@/types/global";


export default [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
            title: 'home',
            showLink: false
        }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: 'login',
            showLink: false
        }
    }
] as Array<RouteConfigsTable>
