import api from "api";
import { getHeader, getUrl, handleRequest, postMultiFormData, postWithFormData } from "functions/Services";

export const shoesService = {
    getShoesList({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.SHOES_LIST, params);
        return handleRequest(url, requestOptions);
    },

    getShoesDetail({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.SHOES_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    getShoesSame({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.SHOES_SAME, params);
        return handleRequest(url, requestOptions);
    },

    getShoesHome() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.SHOES_HOME);
        return handleRequest(url, requestOptions);
    },

    postShoesUpdate({params}) {
        const body = params;
        console.log(body)
        return postMultiFormData(body, api.SHOES_UPDATE);
  
    },

    postShoesDelete({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.SHOES_DELETE);
        return handleRequest(url, requestOptions);
    },
    
};
