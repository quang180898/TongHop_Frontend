import api from "api";
import { getHeader, getUrl, handleRequest } from "functions/Services";

export const categoryService = {
    getCategoryList() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.CATEGORY_LIST);
        return handleRequest(url, requestOptions);
    },

    getCategoryDetail({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.CATEGORY_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    postCategoryUpdate({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.CATEGORY_UPDATE);
        return handleRequest(url, requestOptions);
    },

    postCategoryDelete({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.CATEGORY_DELETE);
        return handleRequest(url, requestOptions);
    }
    
};
