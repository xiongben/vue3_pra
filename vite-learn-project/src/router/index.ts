
import {
    Router,
    createRouter,
    RouteRecordRaw,
    RouteComponent,
    createWebHashHistory
} from "vue-router";

import remainingRouter from "./modules/remaining";
import {toRouteType} from "@/types/global";
import {ascending, handleAliveRoute, isOneOfArray} from "@/router/utils";
import {isUrl, openLink, storageSession} from "@pureadmin/utils";
import {DataInfo, sessionKey} from "@/utils/auth";
import NProgress from "@/utils/progress/index";
import {usePermissionStoreHook} from "@/store/modules/permission";


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

router.beforeEach((to, _from, next) => {
    if (to.meta?.keepAlive) {
       const newMatched = to.matched
        handleAliveRoute(newMatched, "add")
        if (_from.name === undefined || _from.name === "Redirect") {
            handleAliveRoute(newMatched);
        }
    }
    const userInfo = storageSession().getItem<DataInfo<number>>(sessionKey)
    NProgress.start()
    const externalLink = isUrl(to?.name as string)
    if (!externalLink) {
        to.matched.some(item => {
            if (!item.meta.title) {
                return ""
            } else {
                document.title = item.meta.title as string
            }
        })
    }
    /** 如果已经登录并存在登录信息后不能跳转到路由白名单，而是继续保持在当前页面 */
    function toCorrectRoute() {
        whiteList.includes(to.fullPath) ? next(_from.fullPath) : next()
    }
    if (userInfo) {
        // 无权限跳转403页面
        if (to.meta?.roles && !isOneOfArray(to.meta?.roles as string[], userInfo?.roles as string[])) {
            next({path: "/error/index"})
        }
        if (_from?.name) {
            if (externalLink) {
                openLink(to?.name as string);
                NProgress.done()
            } else {
                toCorrectRoute();
            }
        } else {
            // 刷新
            if (usePermissionStoreHook().wholeMenus.length === 0 && to.path !== "/login") {

            }
        }
    } else {
        if (to.path !== "/login") {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next({path: "/login"})
            }
        } else {
            next()
        }
    }
})

router.afterEach(() => {
    NProgress.done();
});

export default router;
