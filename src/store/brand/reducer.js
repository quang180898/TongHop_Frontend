import { brandAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        
        // get list brand
        case brandAction.GET_LIST_BRAND_REQUEST:
            return {
                ...state,
                listBrand: null,
                isLoadingListBrandResponse: true,
                success: false,
                error: false
            };
        case brandAction.GET_LIST_BRAND_SUCCESS:
            return {
                ...state,
                listBrand: action.response,
                isLoadingListBrandResponse: false,
                success: true,
                error: false
            };
        case brandAction.GET_LIST_BRAND_FAILURE:
            return {
                ...state,
                listBrand: action.response,
                isLoadingListBrandResponse: false,
                success: false,
                error: action.err
            };

        // detail brand
        case brandAction.GET_DETAIL_BRAND_REQUEST:
            return {
                ...state,
                detailBrand: null,
                isLoadingDetailBrandResponse: true,
                success: false,
                error: false
            };
        case brandAction.GET_DETAIL_BRAND_SUCCESS:
            return {
                ...state,
                detailBrand: action.response,
                isLoadingDetailBrandResponse: false,
                success: true,
                error: false
            };
        case brandAction.GET_DETAIL_BRAND_FAILURE:
            return {
                ...state,
                detailBrand: action.response,
                isLoadingDetailBrandResponse: false,
                success: false,
                error: action.err
            };

        // delete brand
        case brandAction.POST_DELETE_BRAND_REQUEST:
            return {
                ...state,
                deleteBrand: null,
                isLoadingDeleteBrandResponse: true,
                success: false,
                error: false
            };
        case brandAction.POST_DELETE_BRAND_SUCCESS:
            return {
                ...state,
                deleteBrand: action.response,
                isLoadingDeleteBrandResponse: false,
                success: true,
                error: false
            };
        case brandAction.POST_DELETE_BRAND_FAILURE:
            return {
                ...state,
                deleteBrand: action.response,
                isLoadingDeleteBrandResponse: false,
                success: false,
                error: action.err
            };

        // update brand
        case brandAction.POST_UPDATE_BRAND_REQUEST:
            return {
                ...state,
                updateBrand: null,
                isLoadingUpdateBrandResponse: true,
                success: false,
                error: false
            };
        case brandAction.POST_UPDATE_BRAND_SUCCESS:
            return {
                ...state,
                updateBrand: action.response,
                isLoadingUpdateBrandResponse: false,
                success: true,
                error: false
            };
        case brandAction.POST_UPDATE_BRAND_FAILURE:
            return {
                ...state,
                updateBrand: action.response,
                isLoadingUpdateBrandResponse: false,
                success: false,
                error: action.err
            };

        case brandAction.CLEAR_DATA_BRAND:
            return {
                ...state,
                listBrand: null,
                detailBrand: null,
                deleteBrand: null,
                updateBrand: null,
            };

        default:
            return state;
    }
}