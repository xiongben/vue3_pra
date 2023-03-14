import { http } from "@/utils/request";

type Result = {
    success: boolean;
    data: Array<any>;
};

export const getAsyncRoutes = () => {
    return http.request<Result>("get", "/getAsyncRoutes");
};
