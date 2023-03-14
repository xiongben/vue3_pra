import {RouteComponent, RouteRecordNormalized} from "vue-router";
import {cloneDeep, isAllEmpty, storageSession, intersection} from "@pureadmin/utils";
import {DataInfo, sessionKey} from "@/utils/auth";


/** 处理缓存路由（添加、删除、刷新） */
function handleAliveRoute(matched: RouteRecordNormalized[], mode?: string) {
    switch (mode) {
        case "add":
            matched.forEach(v => {

            })
    }
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
    // first level: don't use catch
    return new Promise(resolve => {
        
    })
}

export {
    handleAliveRoute,
    ascending,
    filterNoPermissionTree,
    filterTree,
    isOneOfArray,
    initRouter
}
