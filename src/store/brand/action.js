const name = "BRAND_"
const actions = {
    GET_LIST_BRAND_REQUEST: name + 'GET_LIST_BRAND_REQUEST',
    GET_LIST_BRAND_FAILURE: name + 'GET_LIST_BRAND_FAILURE',
    GET_LIST_BRAND_SUCCESS: name + 'GET_LIST_BRAND_SUCCESS',

    GET_DETAIL_BRAND_REQUEST: name + 'GET_DETAIL_BRAND_REQUEST',
    GET_DETAIL_BRAND_FAILURE: name + 'GET_DETAIL_BRAND_FAILURE',
    GET_DETAIL_BRAND_SUCCESS: name + 'GET_DETAIL_BRAND_SUCCESS',

    POST_DELETE_BRAND_REQUEST: name + 'POST_DELETE_BRAND_REQUEST',
    POST_DELETE_BRAND_FAILURE: name + 'POST_DELETE_BRAND_FAILURE',
    POST_DELETE_BRAND_SUCCESS: name + 'POST_DELETE_BRAND_SUCCESS',

    POST_UPDATE_BRAND_REQUEST: name + 'POST_UPDATE_BRAND_REQUEST',
    POST_UPDATE_BRAND_FAILURE: name + 'POST_UPDATE_BRAND_FAILURE',
    POST_UPDATE_BRAND_SUCCESS: name + 'POST_UPDATE_BRAND_SUCCESS',

    CLEAR_DATA_BRAND: name + 'CLEAR_DATA_BRAND',

    /*LIST BRAND*/
    getListBrand: (params) => ({
        type: actions.GET_LIST_BRAND_REQUEST,
        params
    }),

    /*DETAIL BRAND*/
    getDetailBrand: (params) => ({
        type: actions.GET_DETAIL_BRAND_REQUEST,
        params
    }),

    /*DELETE BRAND*/
    postDeleteBrand: (params) => ({
        type: actions.POST_DELETE_BRAND_REQUEST,
        params
    }),

    /*UPDATE BRAND*/
    postUpdateBrand: (params) => ({
        type: actions.POST_UPDATE_BRAND_REQUEST,
        params
    }),

    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_BRAND,
        params
    }),
};

export default actions;