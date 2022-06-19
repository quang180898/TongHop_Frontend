import { chartAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case chartAction.GET_ALL_CHART_REQUEST:
            return {
                ...state,
                allChart: null,
                isLoadingAllChartResponse: true,
                success: false,
                error: false,
            };
        case chartAction.GET_ALL_CHART_SUCCESS:
            return {
                ...state,
                allChart: action.response,
                isLoadingAllChartResponse: false,
                success: true,
                error: false,
            };
        case chartAction.GET_ALL_CHART_FAILURE:
            return {
                ...state,
                allChart: action.response,
                isLoadingAllChartResponse: false,
                success: false,
                error: action.err,
            };

        ///////////////////////

        case chartAction.GET_TOTAL_CHART_REQUEST:
            return {
                ...state,
                totalChart: null,
                isLoadingTotalChartResponse: true,
                success: false,
                error: false,
            };
        case chartAction.GET_TOTAL_CHART_SUCCESS:
            return {
                ...state,
                totalChart: action.response,
                isLoadingTotalChartResponse: false,
                success: true,
                error: false,
            };
        case chartAction.GET_TOTAL_CHART_FAILURE:
            return {
                ...state,
                totalChart: action.response,
                isLoadingTotalChartResponse: false,
                success: false,
                error: action.err,
            };

        case chartAction.CLEAR_DATA_BRAND:
            return {
                ...state,
                allChart: null,
                totalChart: null,
            };

        default:
            return state;
    }
};
