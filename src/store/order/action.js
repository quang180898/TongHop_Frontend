const name = "ORDER_"
const actions = {
    GET_LIST_ORDER_REQUEST: name + 'GET_LIST_ORDER_REQUEST',
    GET_LIST_ORDER_FAILURE: name + 'GET_LIST_ORDER_FAILURE',
    GET_LIST_ORDER_SUCCESS: name + 'GET_LIST_ORDER_SUCCESS',

    GET_DETAIL_ORDER_REQUEST: name + 'GET_DETAIL_ORDER_REQUEST',
    GET_DETAIL_ORDER_FAILURE: name + 'GET_DETAIL_ORDER_FAILURE',
    GET_DETAIL_ORDER_SUCCESS: name + 'GET_DETAIL_ORDER_SUCCESS',

    GET_MOST_ORDER_REQUEST: name + 'GET_MOST_ORDER_REQUEST',
    GET_MOST_ORDER_FAILURE: name + 'GET_MOST_ORDER_FAILURE',
    GET_MOST_ORDER_SUCCESS: name + 'GET_MOST_ORDER_SUCCESS',

    GET_HISTORY_ORDER_REQUEST: name + 'GET_HISTORY_ORDER_REQUEST',
    GET_HISTORY_ORDER_FAILURE: name + 'GET_HISTORY_ORDER_FAILURE',
    GET_HISTORY_ORDER_SUCCESS: name + 'GET_HISTORY_ORDER_SUCCESS',

    POST_UPDATE_ORDER_REQUEST: name + 'POST_UPDATE_ORDER_REQUEST',
    POST_UPDATE_ORDER_FAILURE: name + 'POST_UPDATE_ORDER_FAILURE',
    POST_UPDATE_ORDER_SUCCESS: name + 'POST_UPDATE_ORDER_SUCCESS',

    POST_DELETE_ORDER_REQUEST: name + 'POST_DELETE_ORDER_REQUEST',
    POST_DELETE_ORDER_FAILURE: name + 'POST_DELETE_ORDER_FAILURE',
    POST_DELETE_ORDER_SUCCESS: name + 'POST_DELETE_ORDER_SUCCESS',

    POST_CREATE_ORDER_REQUEST: name + 'POST_CREATE_ORDER_REQUEST',
    POST_CREATE_ORDER_FAILURE: name + 'POST_CREATE_ORDER_FAILURE',
    POST_CREATE_ORDER_SUCCESS: name + 'POST_CREATE_ORDER_SUCCESS',

    POST_MOMO_ORDER_REQUEST: name + 'POST_MOMO_ORDER_REQUEST',
    POST_MOMO_ORDER_FAILURE: name + 'POST_MOMO_ORDER_FAILURE',
    POST_MOMO_ORDER_SUCCESS: name + 'POST_MOMO_ORDER_SUCCESS',

    CLEAR_DATA_ORDER: name + 'CLEAR_DATA_ORDER',

    getListOrder: (params) => ({
        type: actions.GET_LIST_ORDER_REQUEST,
        params
    }),

    getDetailOrder: (params) => ({
        type: actions.GET_DETAIL_ORDER_REQUEST,
        params
    }),

    getMostOrder: (params) => ({
        type: actions.GET_MOST_ORDER_REQUEST,
        params
    }),

    getHistoryOrder: (params) => ({
        type: actions.GET_HISTORY_ORDER_REQUEST,
        params
    }),

    postUpdateOrder: (params) => ({
        type: actions.POST_UPDATE_ORDER_REQUEST,
        params
    }),

    postDeleteOrder: (params) => ({
        type: actions.POST_DELETE_ORDER_REQUEST,
        params
    }),

    postCreateOrder: (params) => ({
        type: actions.POST_CREATE_ORDER_REQUEST,
        params
    }),

    postMomoOrder: (params) => ({
        type: actions.POST_MOMO_ORDER_REQUEST,
        params
    }),

    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_ORDER,
        params
    }),
};

export default actions;