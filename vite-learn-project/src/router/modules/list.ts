import { list } from "../enums";

export default {
    path: "/list",
    redirect: "/list/card",
    meta: {
        icon: "listCheck",
        title: "list demo",
        rank: list
    },
    children: [
        {
            path: "/list/card",
            name: "ListCard",
            component: () => import("../../views/list/index.vue"),
            meta: {
                icon: "card",
                title: "listDemo",
                showParent: true
            }
        }
    ]
} as RouteConfigsTable;
