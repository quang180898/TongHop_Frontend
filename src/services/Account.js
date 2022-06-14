import api from 'api';
import { getHeader, getUrl, handleRequest, postWithFormData } from "functions/Services";

export const accountService = {

    getListAccount() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ACCOUNT_LIST);
        return handleRequest(url, requestOptions);
    },

    postLogin({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params
        };

        const url = getUrl(api.ACCOUNT_LOGIN)
        return handleRequest(url, requestOptions) 
    },

    postRegister({params}) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params
        };
        const url = getUrl(api.ACCOUNT_REGISTER)
        return handleRequest(url, requestOptions) 
    },

    getDetailAccount({params}) {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.ACCOUNT_DETAIL, params);
        return handleRequest(url, requestOptions);
    },

    postUpdateAccount({ params }) {
        const body = params;
        return postWithFormData(body, api.ACCOUNT_UPDATE)
    },

    postChangeAccount({ params }) {
        const requestOptions = {
            method: 'POST',
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.ACCOUNT_CHANGE_PASSWORD);
        return handleRequest(url, requestOptions);
    },

    postDeleteAccount({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.ACCOUNT_DELETE);
        return handleRequest(url, requestOptions);
    },

    postActiveAccount({params}) {
        const requestOptions = {
            method: "POST",
            headers: getHeader(),
            body: params,
        };
        const url = getUrl(api.ACCOUNT_ACTIVE);
        return handleRequest(url, requestOptions);
    },
    
}

