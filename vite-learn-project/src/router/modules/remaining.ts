import {RouteConfigsTable} from "@/types/global";


export default [
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
