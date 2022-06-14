import { shoesAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {

        // get list shoes
        case shoesAction.GET_LIST_SHOES_REQUEST:
            return {
                ...state,
                listShoes: null,
                isLoadingListShoesResponse: true,
                success: false,
                error: false
            };
        case shoesAction.GET_LIST_SHOES_SUCCESS:
            return {
                ...state,
                listShoes: action.response,
                isLoadingListShoesResponse: false,
                success: true,
                error: false
            };
        case shoesAction.GET_LIST_SHOES_FAILURE:
            return {
                ...state,
                listShoes: action.response,
                isLoadingListShoesResponse: false,
                success: false,
                error: action.err
            };

        // detail shoes
        case shoesAction.GET_DETAIL_SHOES_REQUEST:
            return {
                ...state,
                detailShoes: null,
                isLoadingDetailShoesResponse: true,
                success: false,
                error: false
            };
        case shoesAction.GET_DETAIL_SHOES_SUCCESS:
            return {
                ...state,
                detailShoes: action.response,
                isLoadingDetailShoesResponse: false,
                success: true,
                error: false
            };
        case shoesAction.GET_DETAIL_SHOES_FAILURE:
            return {
                ...state,
                detailShoes: action.response,
                isLoadingDetailShoesResponse: false,
                success: false,
                error: action.err
            };
        
        // same shoes
        case shoesAction.GET_SAME_SHOES_REQUEST:
            return {
                ...state,
                sameShoes: null,
                isLoadingSameShoesResponse: true,
                success: false,
                error: false
            };
        case shoesAction.GET_SAME_SHOES_SUCCESS:
            return {
                ...state,
                sameShoes: action.response,
                isLoadingSameShoesResponse: false,
                success: true,
                error: false
            };
        case shoesAction.GET_SAME_SHOES_FAILURE:
            return {
                ...state,
                sameShoes: action.response,
                isLoadingSameShoesResponse: false,
                success: false,
                error: action.err
            };

        // home shoes
        case shoesAction.GET_HOME_SHOES_REQUEST:
            return {
                ...state,
                homeShoes: null,
                isLoadingHomeShoesResponse: true,
                success: false,
                error: false
            };
        case shoesAction.GET_HOME_SHOES_SUCCESS:
            return {
                ...state,
                homeShoes: action.response,
                isLoadingHomeShoesResponse: false,
                success: true,
                error: false
            };
        case shoesAction.GET_HOME_SHOES_FAILURE:
            return {
                ...state,
                homeShoes: action.response,
                isLoadingHomeShoesResponse: false,
                success: false,
                error: action.err
            };

        // delete shoes
        case shoesAction.POST_DELETE_SHOES_REQUEST:
            return {
                ...state,
                deleteShoes: null,
                isLoadingDeleteShoesResponse: true,
                success: false,
                error: false
            };
        case shoesAction.POST_DELETE_SHOES_SUCCESS:
            return {
                ...state,
                deleteShoes: action.response,
                isLoadingDeleteShoesResponse: false,
                success: true,
                error: false
            };
        case shoesAction.POST_DELETE_SHOES_FAILURE:
            return {
                ...state,
                deleteShoes: action.response,
                isLoadingDeleteShoesResponse: false,
                success: false,
                error: action.err
            };

        // update shoes
        case shoesAction.POST_UPDATE_SHOES_REQUEST:
            return {
                ...state,
                updateShoes: null,
                isLoadingUpdateShoesResponse: true,
                success: false,
                error: false
            };
        case shoesAction.POST_UPDATE_SHOES_SUCCESS:
            return {
                ...state,
                updateShoes: action.response,
                isLoadingUpdateShoesResponse: false,
                success: true,
                error: false
            };
        case shoesAction.POST_UPDATE_SHOES_FAILURE:
            return {
                ...state,
                updateShoes: action.response,
                isLoadingUpdateShoesResponse: false,
                success: false,
                error: action.err
            };

        case shoesAction.CLEAR_DATA_SHOES:
            return {
                ...state,
                listShoes: null,
                detailShoes: null,
                sameShoes: null,
                deleteShoes: null,
                updateShoes: null,
                homeShoes: null,
            };

        default:
            return state;
    }
}