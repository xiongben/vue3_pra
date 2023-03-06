import Axios, {
    Method,
    AxiosError,
    AxiosResponse,
    AxiosRequestConfig
} from "axios";

export type resultType = {
    accessToken?:string;
}

export type RequestMethods = Extract<
    Method,
    "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>;

export interface BaseHttpError extends AxiosError {
    isCancelRequest?:boolean;
}

export interface BaseHttpResponse extends AxiosResponse {
    config: BaseHttpRequestConfig;
}

export interface BaseHttpRequestConfig extends AxiosRequestConfig {
    beforeRequestCallback?:(request: BaseHttpRequestConfig) => void;

    beforeResponseCallback?:(response: BaseHttpResponse) => void;
}

// export default class BaseHttp {
//     request<T>(
//         method: RequestMethods,
//         url: string,
//         params?: AxiosRequestConfig,
//         axiosConfig?: BaseHttpRequestConfig
//     ): Promise<T>;
//     post<T,P>(
//         url: string,
//         params?:T,
//         config?:BaseHttpRequestConfig
//     ): Promise<T>;
//     get<T,P>(
//         url:string,
//         params?:T,
//         config?:BaseHttpRequestConfig
//     ): Promise<T>;
// }
