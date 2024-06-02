import { home } from "../enums";

export default {
    path: "/home",
    redirect: "/home/index",
    meta: {
        icon: "listCheck",
        title: "home demo",
        rank: home
    },
    children: [
        {
            path: "/home/index",
            name: "HomeIndex",
            component: () => import("../../views/home/index.vue"),
            meta: {
                icon: "card",
                title: "homeDemo",
                showParent: true
            }
        },
        {
            path: "/home/detail",
            name: "HomeDetail",
            component: () => import("../../views/home/detail.vue"),
            meta: {
                icon: "card",
                title: "homeDetail",
                showParent: true
            }
        },
        {
            path: "/home/son",
            name: "HomeSon",
            component: () => import("../../views/home/son.vue"),
            meta: {
                icon: "card",
                title: "homeSon",
                showParent: false
            }
        },
        {
            path: "/home/todo",
            name: "HomeTodo",
            component: () => import("../../views/todo/index.vue"),
            meta: {
                icon: "card",
                title: "todoIndex",
                showParent: true
            }
        }
    ]
} as RouteConfigsTable;
