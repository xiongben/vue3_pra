
import {
    Router,
    createRouter,
    RouteRecordRaw,
    RouteComponent,
    createWebHashHistory
} from "vue-router";

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

/** 创建路由实例 */
export const router: Router = createRouter({
    history: createWebHashHistory("hash"),
    routes: routes,
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

export default router;
