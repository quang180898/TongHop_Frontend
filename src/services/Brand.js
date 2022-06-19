import api from "api";
import { getHeader, getUrl, handleRequest, postWithFormData } from "functions/Services";

export const brandService = {
    getBrandList() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.BRAND_LIST);
        return handleRequest(url, requestOptions);
    },

    getBrandDetail({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.BRAND_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    postBrandUpdate({ params }) {
        const body = params;
        return postWithFormData(body, api.BRAND_UPDATE);
    },

    postBrandDelete({ params }) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.BRAND_DELETE);
        return handleRequest(url, requestOptions);
    },
};
