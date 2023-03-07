import {http} from "../utils/request";


export const getCardList = (data?: object) => {
    return http.request<any>("post", "/getCardList", { data });
};
