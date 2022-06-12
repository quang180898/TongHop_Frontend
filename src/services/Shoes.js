import api from "api";
import { getHeader, getUrl, handleRequest } from "functions/Services";

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

    postShoesUpdate({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.SHOES_UPDATE);
        return handleRequest(url, requestOptions);
    },

    postShoesDelete({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.SHOES_DELETE);
        return handleRequest(url, requestOptions);
    }
    
};
