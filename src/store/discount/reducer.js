import { discountAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {
        // list Discount
        case discountAction.GET_LIST_DISCOUNT_REQUEST:
            return {
                ...state,
                listDiscount: null,
                isLoadingListDiscountResponse: true,
                success: false,
                error: false,
            };
        case discountAction.GET_LIST_DISCOUNT_SUCCESS:
            return {
                ...state,
                listDiscount: action.response,
                isLoadingListDiscountResponse: false,
                success: true,
                error: false,
            };
        case discountAction.GET_LIST_DISCOUNT_FAILURE:
            return {
                ...state,
                listDiscount: action.response,
                isLoadingListDiscountResponse: false,
                success: false,
                error: action.err,
            };

        // detail Discount
        case discountAction.GET_DETAIL_DISCOUNT_REQUEST:
            return {
                ...state,
                detailDiscount: null,
                isLoadingDetailDiscountResponse: true,
                success: false,
                error: false,
            };
        case discountAction.GET_DETAIL_DISCOUNT_SUCCESS:
            return {
                ...state,
                detailDiscount: action.response,
                isLoadingDetailDiscountResponse: false,
                success: true,
                error: false,
            };
        case discountAction.GET_DETAIL_DISCOUNT_FAILURE:
            return {
                ...state,
                detailDiscount: action.response,
                isLoadingDetailDiscountResponse: false,
                success: false,
                error: action.err,
            };

         // post update Discount
         case discountAction.POST_UPDATE_DISCOUNT_REQUEST:
            return {
                ...state,
                updateDiscount: null,
                isLoadingUpdateDiscountResponse: true,
                success: false,
                error: false,
            };
        case discountAction.POST_UPDATE_DISCOUNT_SUCCESS:
            return {
                ...state,
                updateDiscount: action.response,
                isLoadingUpdateDiscountResponse: false,
                success: true,
                error: false,
            };
        case discountAction.POST_UPDATE_DISCOUNT_FAILURE:
            return {
                ...state,
                updateDiscount: action.response,
                isLoadingUpdateDiscountResponse: false,
                success: false,
                error: action.err,
            };

         // post delete Discount
         case discountAction.POST_DELETE_DISCOUNT_REQUEST:
            return {
                ...state,
                deleteDiscount: null,
                isLoadingDeleteDiscountResponse: true,
                success: false,
                error: false,
            };
        case discountAction.POST_DELETE_DISCOUNT_SUCCESS:
            return {
                ...state,
                deleteDiscount: action.response,
                isLoadingDeleteDiscountResponse: false,
                success: true,
                error: false,
            };
        case discountAction.POST_DELETE_DISCOUNT_FAILURE:
            return {
                ...state,
                deleteDiscount: action.response,
                isLoadingDeleteDiscountResponse: false,
                success: false,
                error: action.err,
            };

        // get gmail Discount
        case discountAction.GET_GMAIL_DISCOUNT_REQUEST:
            return {
                ...state,
                gmailDiscount: null,
                isLoadingGmailDiscountResponse: true,
                success: false,
                error: false,
            };
        case discountAction.GET_GMAIL_DISCOUNT_SUCCESS:
            return {
                ...state,
                gmailDiscount: action.response,
                isLoadingGmailDiscountResponse: false,
                success: true,
                error: false,
            };
        case discountAction.GET_GMAIL_DISCOUNT_FAILURE:
            return {
                ...state,
                gmailDiscount: action.response,
                isLoadingGmailDiscountResponse: false,
                success: false,
                error: action.err,
            };

        case discountAction.CLEAR_DATA_DISCOUNT:
            return {
                ...state,
                listDiscount: null,
                detailDiscount: null,
                updateDiscount: null,
                deleteDiscount: null,
                gmailDiscount: null,
            };

        default:
            return state;
    }
};
