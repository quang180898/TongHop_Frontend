import api from 'api';
import { getHeader, getUrl, handleRequest } from "functions/Services";

export const discountService = {

    getListDiscount() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.DISCOUNT_LIST);
        return handleRequest(url, requestOptions);
    },

    getDetailDiscount({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.DISCOUNT_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    postUpdateDiscount({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params
        };

        const url = getUrl(api.DISCOUNT_UPDATE)
        return handleRequest(url, requestOptions) 
    },

    postDeleteDiscount({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params
        };
        const url = getUrl(api.DISCOUNT_DELETE)
        return handleRequest(url, requestOptions) 
    },
    
}

