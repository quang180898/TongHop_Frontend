import api from "api";
import {
    getHeader,
    getUrl,
    handleRequest,
    postWithFormData,
} from "functions/Services";

export const orderService = {
    getListOrder() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_LIST);
        return handleRequest(url, requestOptions);
    },

    getDetailOrder({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    getMostOrder({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_MOST_BUY, params);
        return handleRequest(url, requestOptions);
    },

    getHistoryOrder({ params }) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ORDER_HISTORY, params);
        return handleRequest(url, requestOptions);
    },

    postUpdateOrder({ params }) {
        const body = params;
        return postWithFormData(body, api.ORDER_UPDATE);
    },

    postCreateOrder({ params }) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };

        const url = getUrl(api.ORDER_CREATE);
        return handleRequest(url, requestOptions);
    },

    postDeleteOrder({ params }) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };

        const url = getUrl(api.ORDER_DELETE);
        return handleRequest(url, requestOptions);
    },

    postMomoOrder({ params }) {
        const body = params;
        return postWithFormData(body, api.MOMO_PAY);
    },
};
