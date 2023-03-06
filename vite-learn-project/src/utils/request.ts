import Axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CustomParamsSerializer
} from "axios";
import { stringify } from "qs";
import {BaseHttpRequestConfig} from "./types";
import config from "tailwindcss/defaultConfig";


const defaultConfig: AxiosRequestConfig = {
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    paramsSerializer: {
        serialize: stringify as unknown as CustomParamsSerializer
    }
};

class BaseHttp {
    constructor() {

    }

    /** token过期后，暂存待执行的请求 */
    private static requests:any[] = [];

    /** 防止重复刷新token */
    private static isRefreshing = false;

    private static initConfig:BaseHttpRequestConfig = {};

    private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

    /** 重连原始请求 */
    private static retryOriginalRequest(config: BaseHttpRequestConfig) {
        return new Promise(resolve => {
            BaseHttp.requests.push((token: string) => {
                config.headers!["Authorization"] = token;
                resolve(config)
            });
        });
    }

    /** 请求拦截 */
    private httpInterceptorsRequest(): void {
        BaseHttp.axiosInstance.interceptors.request.use(
            async (config: BaseHttpRequestConfig) => {

            }
        )
    }

    /** 响应拦截 */
}
