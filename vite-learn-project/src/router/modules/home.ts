import { home } from "../enums";
import {RouteConfigsTable} from "@/types/global";

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
        }
    ]
} as RouteConfigsTable;
