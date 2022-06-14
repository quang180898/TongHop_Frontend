import api from 'api';
import { getHeader, getUrl, handleRequest } from "functions/Services";

export const orderService = {

    getListOrder() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_LIST);
        return handleRequest(url, requestOptions);
    },

    getDetailOrder({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    getMostOrder({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_MOST_BUY, params);
        return handleRequest(url, requestOptions);
    },

    postUpdateOrder({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params
        };

        const url = getUrl(api.ORDER_UPDATE)
        return handleRequest(url, requestOptions) 
    },

    postDeleteOrder({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params
        };

        const url = getUrl(api.ORDER_DELETE)
        return handleRequest(url, requestOptions) 
    },
    
}

