import Cookies from "js-cookie/index";

export interface DataInfo<T> {
    /** token */
    accessToken: string;
    /** `accessToken`的过期时间（时间戳） */
    expires: T;
    /** 用于调用刷新accessToken的接口时所需的token */
    refreshToken: string;
    /** 用户名 */
    username?: string;
    /** 当前登陆用户的角色 */
    roles?: Array<string>;
}

export const sessionKey = "user-info";
export const TokenKey = "authorized-token";
export function getToken(): DataInfo<number> {
    return Cookies.get(TokenKey) ? JSON.parse(<string>Cookies.get(TokenKey)) : '666666'
}
