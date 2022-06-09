const name = "CATEGORY_"
const actions = {
    GET_LIST_CATEGORY_REQUEST: name + 'GET_LIST_CATEGORY_REQUEST',
    GET_LIST_CATEGORY_FAILURE: name + 'GET_LIST_CATEGORY_FAILURE',
    GET_LIST_CATEGORY_SUCCESS: name + 'GET_LIST_CATEGORY_SUCCESS',

    GET_DETAIL_CATEGORY_REQUEST: name + 'GET_DETAIL_CATEGORY_REQUEST',
    GET_DETAIL_CATEGORY_FAILURE: name + 'GET_DETAIL_CATEGORY_FAILURE',
    GET_DETAIL_CATEGORY_SUCCESS: name + 'GET_DETAIL_CATEGORY_SUCCESS',

    POST_DELETE_CATEGORY_REQUEST: name + 'POST_DELETE_CATEGORY_REQUEST',
    POST_DELETE_CATEGORY_FAILURE: name + 'POST_DELETE_CATEGORY_FAILURE',
    POST_DELETE_CATEGORY_SUCCESS: name + 'POST_DELETE_CATEGORY_SUCCESS',

    POST_UPDATE_CATEGORY_REQUEST: name + 'POST_UPDATE_CATEGORY_REQUEST',
    POST_UPDATE_CATEGORY_FAILURE: name + 'POST_UPDATE_CATEGORY_FAILURE',
    POST_UPDATE_CATEGORY_SUCCESS: name + 'POST_UPDATE_CATEGORY_SUCCESS',

    CLEAR_DATA_CATEGORY: name + 'CLEAR_DATA_CATEGORY',

    /*LIST CATEGORY*/
    getListCategory: (params) => ({
        type: actions.GET_LIST_CATEGORY_REQUEST,
        params
    }),

    /*DETAIL CATEGORY*/
    getDetailCategory: (params) => ({
        type: actions.GET_DETAIL_CATEGORY_REQUEST,
        params
    }),

    /*DELETE CATEGORY*/
    postDeleteCategory: (params) => ({
        type: actions.POST_DELETE_CATEGORY_REQUEST,
        params
    }),

    /*UPDATE CATEGORY*/
    postUpdateCategory: (params) => ({
        type: actions.POST_UPDATE_CATEGORY_REQUEST,
        params
    }),

    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_CATEGORY,
        params
    }),
};

export default actions;