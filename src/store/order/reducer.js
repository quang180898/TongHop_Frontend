import { orderAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {

        // list order
        case orderAction.GET_LIST_ORDER_REQUEST:
            return {
                ...state,
                listOrder: null,
                isLoadingListOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.GET_LIST_ORDER_SUCCESS:
            return {
                ...state,
                listOrder: action.response,
                isLoadingListOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.GET_LIST_ORDER_FAILURE:
            return {
                ...state,
                listOrder: action.response,
                isLoadingListOrderResponse: false,
                success: false,
                error: action.err,
            };

        // detail order
        case orderAction.GET_DETAIL_ORDER_REQUEST:
            return {
                ...state,
                detailOrder: null,
                isLoadingDetailOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.GET_DETAIL_ORDER_SUCCESS:
            return {
                ...state,
                detailOrder: action.response,
                isLoadingDetailOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.GET_DETAIL_ORDER_FAILURE:
            return {
                ...state,
                detailOrder: action.response,
                isLoadingDetailOrderResponse: false,
                success: false,
                error: action.err,
            };

        // most order
        case orderAction.GET_MOST_ORDER_REQUEST:
            return {
                ...state,
                mostOrder: null,
                isLoadingMostOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.GET_MOST_ORDER_SUCCESS:
            return {
                ...state,
                mostOrder: action.response,
                isLoadingMostOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.GET_MOST_ORDER_FAILURE:
            return {
                ...state,
                mostOrder: action.response,
                isLoadingMostOrderResponse: false,
                success: false,
                error: action.err,
            };

         // post update order
         case orderAction.POST_UPDATE_ORDER_REQUEST:
            return {
                ...state,
                updateOrder: null,
                isLoadingUpdateOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.POST_UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                updateOrder: action.response,
                isLoadingUpdateOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.POST_UPDATE_ORDER_FAILURE:
            return {
                ...state,
                updateOrder: action.response,
                isLoadingUpdateOrderResponse: false,
                success: false,
                error: action.err,
            };

         // post delete order
         case orderAction.POST_DELETE_ORDER_REQUEST:
            return {
                ...state,
                deleteOrder: null,
                isLoadingDeleteOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.POST_DELETE_ORDER_SUCCESS:
            return {
                ...state,
                deleteOrder: action.response,
                isLoadingDeleteOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.POST_DELETE_ORDER_FAILURE:
            return {
                ...state,
                deleteOrder: action.response,
                isLoadingDeleteOrderResponse: false,
                success: false,
                error: action.err,
            };

         // post create order
         case orderAction.POST_CREATE_ORDER_REQUEST:
            return {
                ...state,
                createOrder: null,
                isLoadingCreateOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.POST_CREATE_ORDER_SUCCESS:
            return {
                ...state,
                createOrder: action.response,
                isLoadingCreateOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.POST_CREATE_ORDER_FAILURE:
            return {
                ...state,
                createOrder: action.response,
                isLoadingCreateOrderResponse: false,
                success: false,
                error: action.err,
            };

        // post create order
        case orderAction.GET_HISTORY_ORDER_REQUEST:
            return {
                ...state,
                historyOrder: null,
                isLoadingHistoryOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.GET_HISTORY_ORDER_SUCCESS:
            return {
                ...state,
                historyOrder: action.response,
                isLoadingHistoryOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.GET_HISTORY_ORDER_FAILURE:
            return {
                ...state,
                historyOrder: action.response,
                isLoadingHistoryOrderResponse: false,
                success: false,
                error: action.err,
            };

        // post momo order
        case orderAction.POST_MOMO_ORDER_REQUEST:
            return {
                ...state,
                momoOrder: null,
                isLoadingMomoOrderResponse: true,
                success: false,
                error: false,
            };
        case orderAction.POST_MOMO_ORDER_SUCCESS:
            return {
                ...state,
                momoOrder: action.response,
                isLoadingMomoOrderResponse: false,
                success: true,
                error: false,
            };
        case orderAction.POST_MOMO_ORDER_FAILURE:
            return {
                ...state,
                momoOrder: action.response,
                isLoadingMomoOrderResponse: false,
                success: false,
                error: action.err,
            };

        case orderAction.CLEAR_DATA_ORDER:
            return {
                ...state,
                listOrder: null,
                detailOrder: null,
                mostOrder: null,
                updateOrder: null,
                deleteOrder: null,
                createOrder: null,
                historyOrder: null,
                momoOrder: null,
            };

        default:
            return state;
    }
};
