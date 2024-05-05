import { error } from "../enums";

export default {
    path: "/error",
    redirect: "/error/index",
    meta: {
        icon: "listCheck",
        title: "error demo",
        rank: error
    },
    children: [
        {
            path: "/error/index",
            name: "ErrorIndex",
            component: () => import("../../views/error/index.vue"),
            meta: {
                icon: "card",
                title: "errorDemo",
                showParent: true
            }
        }
    ]
} as RouteConfigsTable;
