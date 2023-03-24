import Axios, {
    AxiosInstance,
    AxiosRequestConfig,
    CustomParamsSerializer, InternalAxiosRequestConfig
} from "axios";
import { stringify } from "qs";
import {BaseHttpRequestConfig, RequestMethods} from "./types";
import config from "tailwindcss/defaultConfig";
import {getToken} from "./auth";


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
    /** token过期后，暂存待执行的请求 */
    private static requests:any[] = [];

    /** 防止重复刷新token */
    private static isRefreshing = false;

    private static initConfig:BaseHttpRequestConfig = {};

    axiosInstance: AxiosInstance
    constructor() {
        this.axiosInstance = Axios.create(defaultConfig)
        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()
    }



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
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                console.log(config)
                // 设置白名单
                const whiteList = ["/login","/refreshToken"];
                return whiteList.some(v => config.url!.indexOf(v) > -1) ? config :
                    new Promise(resolve => {
                        const data = getToken();
                        if(data) {
                            config.headers.Authorization = '666666'
                            resolve(config);
                        } else {
                            resolve(config);
                        }
                    })
            },
            error => {
                return Promise.reject(error);
            }
        )
    }

    /** 响应拦截 */
    private httpInterceptorsResponse():void {
        // Add a response interceptor
        this.axiosInstance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response.data;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });
    }

    public request<T>(
        method: RequestMethods,
        url: string,
        param?: AxiosRequestConfig,
        axiosConfig?: BaseHttpRequestConfig
    ): Promise<T> {
        const config = {
            method,
            url,
            ...param,
            ...axiosConfig
        } as BaseHttpRequestConfig

        return new Promise((resolve, reject) => {
            this.axiosInstance.request(config).then((response: any) => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export const http = new BaseHttp()
