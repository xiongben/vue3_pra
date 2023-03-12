
import {
    Router,
    createRouter,
    RouteRecordRaw,
    RouteComponent,
    createWebHashHistory
} from "vue-router";

import remainingRouter from "./modules/remaining";
import {toRouteType} from "@/types/global";
import {ascending, handleAliveRoute} from "@/router/utils";

const modules: Record<string, any> = import.meta.glob(
    ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
    {
        eager: true
    }
);

const routes:Array<RouteRecordRaw> = [];
Object.keys(modules).forEach(key => {
    routes.push(modules[key].default);
});

/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
export const constantRoutes: Array<RouteRecordRaw> = []

/** 用于渲染菜单，保持原始层级 */
export const constantMenus: Array<RouteComponent> = ascending(routes).concat(
    ...remainingRouter
);

/** 不参与菜单的路由 */
export const remainingPaths = Object.keys(remainingRouter).map((v:any) => {
    return remainingRouter[v].path
})

/** 创建路由实例 */
export const router: Router = createRouter({
    history: createWebHashHistory("hash"),
    routes: routes.concat(...(remainingRouter as any)),
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            if (savedPosition) {
                return savedPosition;
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number =
                        document.documentElement.scrollTop || document.body.scrollTop;
                    resolve({ left: 0, top });
                }
            }
        });
    }
});

/** 路由白名单 */
const whiteList = ["/login"];

// router.beforeEach((to: toRouteType, _from, next) => {
//     if (to.meta?.keepAlive) {
//        const newMatched = to.matched
//         handleAliveRoute(newMatched, "add")
//
//     }
// })

export default router;
