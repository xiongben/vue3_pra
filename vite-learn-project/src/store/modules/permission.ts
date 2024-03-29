import {defineStore} from "pinia";
import { constantMenus } from "@/router";
import { store } from "@/store";
import {ascending, filterNoPermissionTree, filterTree} from "@/router/utils";
import {cacheType} from "@/store/modules/types";
export const usePermissionStore = defineStore({
    id: "pure-permission",
    state: () => ({
        // 静态路由生成的菜单
        constantMenus,
        // 整体路由生成的菜单（静态、动态）
        wholeMenus: [],
        // 缓存页面keepAlive
        cachePageList: [] as any[]
    }),
    actions: {
        /** 组装整体路由生成的菜单 */
        handleWholeMenus(routes: any[]) {
            console.log(routes)
            // this.wholeMenus = filterNoPermissionTree(
            //     filterTree(ascending(this.constantMenus.concat(routes)))
            // );
            this.wholeMenus =  filterTree(ascending(this.constantMenus.concat(routes)))
            // console.log(this.wholeMenus)
        },
        cacheOperate({ mode, name }: cacheType) {
            switch (mode) {
                case "add":
                    this.cachePageList.push(name);
                    this.cachePageList = [...new Set(this.cachePageList)];
                    break;
                case "delete":
                    // eslint-disable-next-line no-case-declarations
                    const delIndex = this.cachePageList.findIndex(v => v === name);
                    delIndex !== -1 && this.cachePageList.splice(delIndex, 1);
                    break;
            }
        },
        /** 清空缓存页面 */
        clearAllCachePage() {
            this.wholeMenus = [];
            this.cachePageList = [];
        }
    }
})

export function usePermissionStoreHook() {
    return usePermissionStore(store);
}
