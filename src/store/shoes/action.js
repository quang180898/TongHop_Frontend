const name = "SHOES_"
const actions = {
    GET_LIST_SHOES_REQUEST: name + 'GET_LIST_SHOES_REQUEST',
    GET_LIST_SHOES_FAILURE: name + 'GET_LIST_SHOES_FAILURE',
    GET_LIST_SHOES_SUCCESS: name + 'GET_LIST_SHOES_SUCCESS',

    GET_DETAIL_SHOES_REQUEST: name + 'GET_DETAIL_SHOES_REQUEST',
    GET_DETAIL_SHOES_FAILURE: name + 'GET_DETAIL_SHOES_FAILURE',
    GET_DETAIL_SHOES_SUCCESS: name + 'GET_DETAIL_SHOES_SUCCESS',

    GET_SAME_SHOES_REQUEST: name + 'GET_SAME_SHOES_REQUEST',
    GET_SAME_SHOES_FAILURE: name + 'GET_SAME_SHOES_FAILURE',
    GET_SAME_SHOES_SUCCESS: name + 'GET_SAME_SHOES_SUCCESS',

    POST_DELETE_SHOES_REQUEST: name + 'POST_DELETE_SHOES_REQUEST',
    POST_DELETE_SHOES_FAILURE: name + 'POST_DELETE_SHOES_FAILURE',
    POST_DELETE_SHOES_SUCCESS: name + 'POST_DELETE_SHOES_SUCCESS',

    POST_UPDATE_SHOES_REQUEST: name + 'POST_UPDATE_SHOES_REQUEST',
    POST_UPDATE_SHOES_FAILURE: name + 'POST_UPDATE_SHOES_FAILURE',
    POST_UPDATE_SHOES_SUCCESS: name + 'POST_UPDATE_SHOES_SUCCESS',

    CLEAR_DATA_SHOES: name + 'CLEAR_DATA_SHOES',

    /*LIST SHOES*/
    getListShoes: (params) => ({
        type: actions.GET_LIST_SHOES_REQUEST,
        params
    }),

    /*DETAIL SHOES*/
    getDetailShoes: (params) => ({
        type: actions.GET_DETAIL_SHOES_REQUEST,
        params
    }),

    /*SAME SHOES*/
    getSameShoes: (params) => ({
        type: actions.GET_SAME_SHOES_REQUEST,
        params
    }),

    /*DELETE SHOES*/
    postDeleteShoes: (params) => ({
        type: actions.POST_DELETE_SHOES_REQUEST,
        params
    }),

    /*UPDATE SHOES*/
    postUpdateShoes: (params) => ({
        type: actions.POST_UPDATE_SHOES_REQUEST,
        params
    }),

    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_SHOES,
        params
    }),
};

export default actions;