import { MockMethod } from "vite-plugin-mock";
import { system, permission, frame, tabs, list } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
const systemRouter = {
    path: "/system",
    meta: {
        icon: "setting",
        title: "menus.hssysManagement",
        rank: system
    },
    redirect: "/system/user/index",
    children: [
        {
            path: "/system/user/index",
            name: "User",
            meta: {
                icon: "flUser",
                title: "menus.hsUser",
                roles: ["admin"]
            }
        },
        {
            path: "/system/role/index",
            name: "Role",
            meta: {
                icon: "role",
                title: "menus.hsRole",
                roles: ["admin"]
            }
        }
    ]
};

const permissionRouter = {
    path: "/permission",
    meta: {
        title: "menus.permission",
        icon: "lollipop",
        rank: permission
    },
    children: [
        {
            path: "/permission/page/index",
            name: "PermissionPage",
            meta: {
                title: "menus.permissionPage",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/permission/button/index",
            name: "PermissionButton",
            meta: {
                title: "menus.permissionButton",
                roles: ["admin", "common"],
                auths: ["btn_add", "btn_edit", "btn_delete"]
            }
        }
    ]
};

const frameRouter = {
    path: "/iframe",
    meta: {
        icon: "monitor",
        title: "menus.hsExternalPage",
        rank: frame
    },
    children: [
        {
            path: "/external",
            name: "https://yiming_chang.gitee.io/pure-admin-doc",
            meta: {
                title: "menus.externalLink",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/pure",
            name: "FramePure",
            meta: {
                title: "menus.hsPureDocument",
                frameSrc: "https://yiming_chang.gitee.io/pure-admin-doc",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/ep",
            name: "FrameEp",
            meta: {
                title: "menus.hsEpDocument",
                frameSrc: "https://element-plus.org/zh-CN/",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/vue3",
            name: "FrameVue",
            meta: {
                title: "menus.hsVueDocument",
                frameSrc: "https://cn.vuejs.org/",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/vite",
            name: "FrameVite",
            meta: {
                title: "menus.hsViteDocument",
                frameSrc: "https://cn.vitejs.dev/",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/pinia",
            name: "FramePinia",
            meta: {
                title: "menus.hsPiniaDocument",
                frameSrc: "https://pinia.vuejs.org/zh/index.html",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/vue-router",
            name: "FrameRouter",
            meta: {
                title: "menus.hsRouterDocument",
                frameSrc: "https://router.vuejs.org/zh/",
                roles: ["admin", "common"]
            }
        },
        {
            path: "/iframe/tailwindcss",
            name: "FrameTailwindcss",
            meta: {
                title: "menus.hsTailwindcssDocument",
                frameSrc: "https://tailwindcss.com/docs/installation",
                roles: ["admin", "common"]
            }
        }
    ]
};

const tabsRouter = {
    path: "/tabs",
    meta: {
        icon: "IF-pure-iconfont-tabs",
        title: "menus.hstabs",
        rank: tabs
    },
    children: [
        {
            path: "/tabs/index",
            name: "Tabs",
            meta: {
                title: "menus.hstabs",
                roles: ["admin", "common"]
            }
        },
        // query 传参模式
        {
            path: "/tabs/query-detail",
            name: "TabQueryDetail",
            meta: {
                // 不在menu菜单中显示
                showLink: false,
                roles: ["admin", "common"]
            }
        },
        // params 传参模式
        {
            path: "/tabs/params-detail/:id",
            component: "params-detail",
            name: "TabParamsDetail",
            meta: {
                // 不在menu菜单中显示
                showLink: false,
                roles: ["admin", "common"]
            }
        }
    ]
};


const simpleRouter = {
    path: "/tabs",
    name: "tabs",
    meta: {
        icon: "listCheck",
        title: "tabs demo",
        rank: tabs,
        roles: ["admin", "common"]
    },
    redirect: "/tabs/index",
    children: [
        {
            path: "/tabs/index",
            name: "TabsIndex",
            meta: {
                icon: "card",
                title: "tabsDemo",
                showParent: true
            }
        }
    ]
};

export default [
    {
        url: "/getAsyncRoutes",
        method: "get",
        response: () => {
            return {
                success: true,
                data: [simpleRouter, systemRouter]
            };
        }
    }
] as MockMethod[];
