import api from "api";
import { getHeader, getUrl, handleRequest } from "functions/Services";

export const chartService = {

    getChartAll() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.CHART_ALL);
        return handleRequest(url, requestOptions);
    },

    getChartTotal() {
        const requestOptions = {
            method: "GET",
            headers: getHeader(),
        };
        const url = getUrl(api.CHART_TOTAL);
        return handleRequest(url, requestOptions);
    },

};
