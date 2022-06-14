const name = "DISCOUNT_"
const actions = {
    GET_LIST_DISCOUNT_REQUEST: name + 'GET_LIST_DISCOUNT_REQUEST',
    GET_LIST_DISCOUNT_FAILURE: name + 'GET_LIST_DISCOUNT_FAILURE',
    GET_LIST_DISCOUNT_SUCCESS: name + 'GET_LIST_DISCOUNT_SUCCESS',

    GET_DETAIL_DISCOUNT_REQUEST: name + 'GET_DETAIL_DISCOUNT_REQUEST',
    GET_DETAIL_DISCOUNT_FAILURE: name + 'GET_DETAIL_DISCOUNT_FAILURE',
    GET_DETAIL_DISCOUNT_SUCCESS: name + 'GET_DETAIL_DISCOUNT_SUCCESS',

    POST_UPDATE_DISCOUNT_REQUEST: name + 'POST_UPDATE_DISCOUNT_REQUEST',
    POST_UPDATE_DISCOUNT_FAILURE: name + 'POST_UPDATE_DISCOUNT_FAILURE',
    POST_UPDATE_DISCOUNT_SUCCESS: name + 'POST_UPDATE_DISCOUNT_SUCCESS',

    POST_DELETE_DISCOUNT_REQUEST: name + 'POST_DELETE_DISCOUNT_REQUEST',
    POST_DELETE_DISCOUNT_FAILURE: name + 'POST_DELETE_DISCOUNT_FAILURE',
    POST_DELETE_DISCOUNT_SUCCESS: name + 'POST_DELETE_DISCOUNT_SUCCESS',

    CLEAR_DATA_DISCOUNT: name + 'CLEAR_DATA_DISCOUNT',

    getListDiscount: (params) => ({
        type: actions.GET_LIST_DISCOUNT_REQUEST,
        params
    }),

    getDetailDiscount: (params) => ({
        type: actions.GET_DETAIL_DISCOUNT_REQUEST,
        params
    }),

    postUpdateDiscount: (params) => ({
        type: actions.POST_UPDATE_DISCOUNT_REQUEST,
        params
    }),

    postDeleteDiscount: (params) => ({
        type: actions.POST_DELETE_DISCOUNT_REQUEST,
        params
    }),

    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_DISCOUNT,
        params
    }),
};

export default actions;