const name = "CHART_"
const actions = {
    GET_TOTAL_CHART_REQUEST: name + 'GET_TOTAL_CHART_REQUEST',
    GET_TOTAL_CHART_FAILURE: name + 'GET_TOTAL_CHART_FAILURE',
    GET_TOTAL_CHART_SUCCESS: name + 'GET_TOTAL_CHART_SUCCESS',

    GET_ALL_CHART_REQUEST: name + 'GET_ALL_CHART_REQUEST',
    GET_ALL_CHART_FAILURE: name + 'GET_ALL_CHART_FAILURE',
    GET_ALL_CHART_SUCCESS: name + 'GET_ALL_CHART_SUCCESS',

    CLEAR_DATA_CHART: name + 'CLEAR_DATA_CHART',

  
    getChartAll: (params) => ({
        type: actions.GET_ALL_CHART_REQUEST,
        params
    }),


    getChartTotal: (params) => ({
        type: actions.GET_TOTAL_CHART_REQUEST,
        params
    }),


    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_CHART,
        params
    }),
};

export default actions;