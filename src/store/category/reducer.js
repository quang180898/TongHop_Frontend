import { categoryAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {

        // get list category
        case categoryAction.GET_LIST_CATEGORY_REQUEST:
            return {
                ...state,
                listCategory: null,
                isLoadingListCategoryResponse: true,
                success: false,
                error: false
            };
        case categoryAction.GET_LIST_CATEGORY_SUCCESS:
            return {
                ...state,
                listCategory: action.response,
                isLoadingListCategoryResponse: false,
                success: true,
                error: false
            };
        case categoryAction.GET_LIST_CATEGORY_FAILURE:
            return {
                ...state,
                listCategory: action.response,
                isLoadingListCategoryResponse: false,
                success: false,
                error: action.err
            };

        // detail category
        case categoryAction.GET_DETAIL_CATEGORY_REQUEST:
            return {
                ...state,
                detailCategory: null,
                isLoadingDetailCategoryResponse: true,
                success: false,
                error: false
            };
        case categoryAction.GET_DETAIL_CATEGORY_SUCCESS:
            return {
                ...state,
                detailCategory: action.response,
                isLoadingDetailCategoryResponse: false,
                success: true,
                error: false
            };
        case categoryAction.GET_DETAIL_CATEGORY_FAILURE:
            return {
                ...state,
                detailCategory: action.response,
                isLoadingDetailCategoryResponse: false,
                success: false,
                error: action.err
            };

        // delete category
        case categoryAction.POST_DELETE_CATEGORY_REQUEST:
            return {
                ...state,
                deleteCategory: null,
                isLoadingDeleteCategoryResponse: true,
                success: false,
                error: false
            };
        case categoryAction.POST_DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                deleteCategory: action.response,
                isLoadingDeleteCategoryResponse: false,
                success: true,
                error: false
            };
        case categoryAction.POST_DELETE_CATEGORY_FAILURE:
            return {
                ...state,
                deleteCategory: action.response,
                isLoadingDeleteCategoryResponse: false,
                success: false,
                error: action.err
            };

        // update category
        case categoryAction.POST_UPDATE_CATEGORY_REQUEST:
            return {
                ...state,
                updateCategory: null,
                isLoadingUpdateCategoryResponse: true,
                success: false,
                error: false
            };
        case categoryAction.POST_UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                updateCategory: action.response,
                isLoadingUpdateCategoryResponse: false,
                success: true,
                error: false
            };
        case categoryAction.POST_UPDATE_CATEGORY_FAILURE:
            return {
                ...state,
                updateCategory: action.response,
                isLoadingUpdateCategoryResponse: false,
                success: false,
                error: action.err
            };

        case categoryAction.CLEAR_DATA_CATEGORY:
            return {
                ...state,
                listCategory: null,
                detailCategory: null,
                deleteCategory: null,
                updateCategory: null,
            };

        default:
            return state;
    }
}