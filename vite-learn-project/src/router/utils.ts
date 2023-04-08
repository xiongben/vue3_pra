import {RouteComponent, RouteRecordNormalized, RouteRecordRaw} from "vue-router";
import {cloneDeep, isAllEmpty, storageSession, intersection} from "@pureadmin/utils";
import {DataInfo, sessionKey} from "@/utils/auth";
import {getAsyncRoutes} from "@/api/routes";
import {usePermissionStoreHook} from "@/store/modules/permission";
import router from "@/router/index";
import {buildHierarchyTree} from "@/utils/tree";
const modulesRoutes = import.meta.glob("/src/views/**/*.{vue,tsx}");


/** 处理缓存路由（添加、删除、刷新） */
function handleAliveRoute(matched: RouteRecordNormalized[], mode?: string) {
    switch (mode) {
        case "add":
            matched.forEach(v => {
                usePermissionStoreHook().cacheOperate({mode: "add", name: v.name})
            })
            break
        case "delete":
            usePermissionStoreHook().cacheOperate({mode: "delete", name: matched[matched.length - 1].name})
            break
        default:
            usePermissionStoreHook().cacheOperate({mode: "delete", name: matched[matched.length - 1].name})
            setTimeout(() => {
                matched.forEach(v => {
                    usePermissionStoreHook().cacheOperate({ mode: "add", name: v.name });
                });
            }, 100);
    }
}

// /** 处理动态路由（后端返回的路由） */
// function handleAsyncRoutes(routeList) {
//     if (routeList.length === 0) {
//         usePermissionStoreHook().handleWholeMenus(routeList)
//     } else {
//
//     }
// }

/**
 * 将多级嵌套路由处理成一维数组
 * @param routesList 传入路由
 * @returns 返回处理后的一维路由
 */
function formatFlatteningRoutes(routesList: RouteRecordRaw[]) {
    if (routesList.length === 0) return routesList
    let hierarchyList = buildHierarchyTree(routesList)
    for(let i = 0; i < hierarchyList.length; i++) {
        if (hierarchyList[i].children) {
            hierarchyList = hierarchyList.slice(0, i+1).concat(hierarchyList[i].children, hierarchyList.slice(i+1))
        }
    }
    return hierarchyList
}

/**
 * 一维数组处理成多级嵌套数组（三级及以上的路由全部拍成二级，keep-alive 只支持到二级缓存）
 * https://github.com/pure-admin/vue-pure-admin/issues/67
 * @param routesList 处理后的一维路由菜单数组
 * @returns 返回将一维数组重新处理成规定路由的格式
 */
function formatTwoStageRoutes(routesList: RouteRecordRaw[]) {
    if (routesList.length === 0) return routesList
    const newRoutesList: RouteRecordRaw[] = []
    routesList.forEach((v: RouteRecordRaw) => {
        if (v.path === "/") {
            newRoutesList.push({
                component: v.component,
                name: v.name,
                path: v.path,
                redirect: v.redirect,
                meta: v.meta,
                children: []
            })
        } else {
            newRoutesList[0]?.children?.push({...v})
        }
    })
    return newRoutesList
}

/** 通过path获取父级路径 */
function getParentPaths(path: string, routes: RouteRecordRaw[]) {
    function dfs(routes: RouteRecordRaw[], path: string, parents: string[]) {
        for (let i = 0; i < routes.length; i++) {
            const item = routes[i]
            if(item.path === path) return parents
            if(!item.children || !item.children.length) continue
            parents.push(item.path)

            if (dfs(item.children, path, parents).length) return parents
            parents.pop()
        }
        return []
    }
    return dfs(routes, path, [])
}

function handRank(routeInfo: any) {
    const { name, path, parentId, meta } = routeInfo;
    return isAllEmpty(parentId)
        ? isAllEmpty(meta?.rank) ||
        (meta?.rank === 0 && name !== "Home" && path !== "/")
            ? true
            : false
        : false;
}

/** 按照路由中meta下的rank等级升序来排序路由 */
function ascending(arr: any[]) {
    arr.forEach((v, index) => {
        // 当rank不存在时，根据顺序自动创建，首页路由永远在第一位
        if (handRank(v)) v.meta.rank = index + 2;
    });
    return arr.sort(
        (a: { meta: { rank: number } }, b: { meta: { rank: number } }) => {
            return a?.meta.rank - b?.meta.rank;
        }
    );
}

/** 判断两个数组彼此是否存在相同值 */
function isOneOfArray(a: Array<string>, b: Array<string>) {
    return Array.isArray(a) && Array.isArray(b)
        ? intersection(a, b).length > 0
            ? true
            : false
        : true;
}

/** 过滤meta中showLink为false的菜单 */
function filterTree(data: RouteComponent[]) {
    const newTree = cloneDeep(data).filter(
        (v: { meta: { showLink: boolean } }) => v.meta?.showLink !== false
    );
    newTree.forEach(
        (v: { children: any }) => v.children && (v.children = filterTree(v.children))
    );
    return newTree;
}

/** 过滤children长度为0的的目录，当目录下没有菜单时，会过滤此目录，目录没有赋予roles权限，当目录下只要有一个菜单有显示权限，那么此目录就会显示 */
function filterChildrenTree(data: RouteComponent[]) {
    const newTree = cloneDeep(data).filter((v: any) => v?.children?.length !== 0);
    newTree.forEach(
        (v: { children:any }) => v.children && (v.children = filterTree(v.children))
    );
    return newTree;
}

/** 从sessionStorage里取出当前登陆用户的角色roles，过滤无权限的菜单 */
function filterNoPermissionTree(data: RouteComponent[]) {
    const currentRoles = storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [];
    const newTree = cloneDeep(data).filter((v:any) => isOneOfArray(v.meta?.roles, currentRoles))
    newTree.forEach(
        (v:any) => v.children && (v.children = filterNoPermissionTree(v.children))
    )
    return filterChildrenTree(newTree)
}

/** 初始化路由（`new Promise` 写法防止在异步请求中造成无限循环）*/
function initRouter() {
    const CachingAsyncRoutes = true // 是否开启缓存
    if (CachingAsyncRoutes) {
        // 开启动态路由缓存本地sessionStorage
        const key = "async-routes";
        const asyncRouteList = storageSession().getItem(key) as any;
        console.log("storage route:",asyncRouteList)
        if (asyncRouteList && asyncRouteList?.length > 0) {
            return new Promise(resolve => {
                handleAsyncRoutes(asyncRouteList);
                resolve(router);
            });
        } else {
            console.log("storage session now!")
            return new Promise(resolve => {
                getAsyncRoutes().then(({ data }) => {
                    handleAsyncRoutes(cloneDeep(data));
                    storageSession().setItem(key, data);
                    resolve(router);
                });
            });
        }
    } else {
        // first level: don't use catch
        return new Promise(resolve => {
            getAsyncRoutes().then(({data}) => {
                console.log(data)
                handleAsyncRoutes(cloneDeep(data))
                resolve(router)
            })
        })
    }
}

/** 过滤后端传来的动态路由 重新生成规范路由 */
function addAsyncRoutes(arrRoutes: Array<RouteRecordRaw>) {
    if (!arrRoutes || !arrRoutes.length) return
    const modulesRoutesKeys = Object.keys(modulesRoutes)
    arrRoutes.forEach((v: RouteRecordRaw) => {
        // 将backstage属性加入meta，标识此路由为后端返回路由
        v.meta!.backstage = true
        // 父级的redirect属性取值：如果子级存在且父级的redirect属性不存在，默认取第一个子级的path；如果子级存在且父级的redirect属性存在，取存在的redirect属性，会覆盖默认值
        if (v?.children && v.children.length && !v.redirect)
            v.redirect = v.children[0].path
        // 父级的name属性取值：如果子级存在且父级的name属性不存在，默认取第一个子级的name；如果子级存在且父级的name属性存在，取存在的name属性，会覆盖默认值（注意：测试中发现父级的name不能和子级name重复，如果重复会造成重定向无效（跳转404），所以这里给父级的name起名的时候后面会自动加上`Parent`，避免重复）
        if (v?.children && v.children.length && !v.name)
            v.name = (v.children[0].name as string) + "Parent"
        if (v.meta?.frameSrc) {
            v.component = null //暂时没有iframe的view
        } else {
            // 对后端传component组件路径和不传做兼容（如果后端传component组件路径，那么path可以随便写，如果不传，component组件路径会跟path保持一致）
            const index = v?.component
                ? modulesRoutesKeys.findIndex(ev => ev.includes(v.component as any))
                : modulesRoutesKeys.findIndex(ev => ev.includes(v.path))
            v.component = modulesRoutes[modulesRoutesKeys[index]]
        }
        if (v?.children && v.children.length) {
            addAsyncRoutes(v.children);
        }
    })
    return arrRoutes
}

function handleAsyncRoutes(routeList: []) {
    if (routeList.length === 0) {
        usePermissionStoreHook().handleWholeMenus(routeList)
    } else {
        // 注意，keep-alive只缓存2级，后需要处理
        const modulesRoutesKeys = Object.keys(modulesRoutes)
        routeList.forEach((v: RouteRecordRaw) => {
            const index = v?.component?
                modulesRoutesKeys.findIndex(ev => ev.includes(v.component as any))
                : modulesRoutesKeys.findIndex(ev => ev.includes(v.path))
            // if (v.children) {
            //     v.children[0].component = modulesRoutes[`../views${v.path}/index.vue`]
            // }
            v.component = modulesRoutes[modulesRoutesKeys[index]]
            router.addRoute(v)
        })
        usePermissionStoreHook().handleWholeMenus(routeList)
    }
}

export {
    handleAliveRoute,
    ascending,
    filterNoPermissionTree,
    filterTree,
    formatFlatteningRoutes,
    formatTwoStageRoutes,
    isOneOfArray,
    initRouter
}
