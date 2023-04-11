import { http } from "@/utils/request";

type Result = {
    success: boolean;
    data?: {
        /** 列表数据 */
        list: Array<any>;
        /** 总数 */
        total?: number;
    };
};

type ResultDept = {
    success: boolean;
    data?: Array<any>;
};

/** 获取用户管理列表 */
export const getUserList = (data?: object) => {
    return http.request<Result>("post", "/user", { data });
};

/** 获取角色管理列表 */
export const getRoleList = (data?: object) => {
    return http.request<Result>("post", "/role", { data });
};