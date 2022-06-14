const name = "ACCOUNT_"
const actions = {
    GET_LIST_ACCOUNT_REQUEST: name + 'GET_LIST_ACCOUNT_REQUEST',
    GET_LIST_ACCOUNT_FAILURE: name + 'GET_LIST_ACCOUNT_FAILURE',
    GET_LIST_ACCOUNT_SUCCESS: name + 'GET_LIST_ACCOUNT_SUCCESS',

    GET_DETAIL_ACCOUNT_REQUEST: name + 'GET_DETAIL_ACCOUNT_REQUEST',
    GET_DETAIL_ACCOUNT_FAILURE: name + 'GET_DETAIL_ACCOUNT_FAILURE',
    GET_DETAIL_ACCOUNT_SUCCESS: name + 'GET_DETAIL_ACCOUNT_SUCCESS',

    POST_LOGIN_REQUEST: name + 'POST_LOGIN_REQUEST',
    POST_LOGIN_FAILURE: name + 'POST_LOGIN_FAILURE',
    POST_LOGIN_SUCCESS: name + 'POST_LOGIN_SUCCESS',

    POST_REGISTER_REQUEST: name + 'POST_REGISTER_REQUEST',
    POST_REGISTER_FAILURE: name + 'POST_REGISTER_FAILURE',
    POST_REGISTER_SUCCESS: name + 'POST_REGISTER_SUCCESS',

    POST_UPDATE_ACCOUNT_REQUEST: name + 'POST_UPDATE_ACCOUNT_REQUEST',
    POST_UPDATE_ACCOUNT_FAILURE: name + 'POST_UPDATE_ACCOUNT_FAILURE',
    POST_UPDATE_ACCOUNT_SUCCESS: name + 'POST_UPDATE_ACCOUNT_SUCCESS',

    POST_CHANGE_ACCOUNT_REQUEST: name + 'POST_CHANGE_ACCOUNT_REQUEST',
    POST_CHANGE_ACCOUNT_FAILURE: name + 'POST_CHANGE_ACCOUNT_FAILURE',
    POST_CHANGE_ACCOUNT_SUCCESS: name + 'POST_CHANGE_ACCOUNT_SUCCESS',

    POST_DELETE_ACCOUNT_REQUEST: name + 'POST_DELETE_ACCOUNT_REQUEST',
    POST_DELETE_ACCOUNT_FAILURE: name + 'POST_DELETE_ACCOUNT_FAILURE',
    POST_DELETE_ACCOUNT_SUCCESS: name + 'POST_DELETE_ACCOUNT_SUCCESS',

    POST_ACTIVE_ACCOUNT_REQUEST: name + 'POST_ACTIVE_ACCOUNT_REQUEST',
    POST_ACTIVE_ACCOUNT_FAILURE: name + 'POST_ACTIVE_ACCOUNT_FAILURE',
    POST_ACTIVE_ACCOUNT_SUCCESS: name + 'POST_ACTIVE_ACCOUNT_SUCCESS',

    CLEAR_DATA_ACCOUNT: name + 'CLEAR_DATA_ACCOUNT',

    getListAccount: (params) => ({
        type: actions.GET_LIST_ACCOUNT_REQUEST,
        params
    }),

    postLogin: (params) => ({
        type: actions.POST_LOGIN_REQUEST,
        params
    }),

    postRegister: (params) => ({
        type: actions.POST_REGISTER_REQUEST,
        params
    }),

    getDetailAccount: (params) => ({
        type: actions.GET_DETAIL_ACCOUNT_REQUEST,
        params
    }),

    postUpdateAccount: (params) => ({
        type: actions.POST_UPDATE_ACCOUNT_REQUEST,
        params
    }),

    postChangeAccount: (params) => ({
        type: actions.POST_CHANGE_ACCOUNT_REQUEST,
        params
    }),

    postDeleteAccount: (params) => ({
        type: actions.POST_DELETE_ACCOUNT_REQUEST,
        params
    }),

    postActiveAccount: (params) => ({
        type: actions.POST_ACTIVE_ACCOUNT_REQUEST,
        params
    }),

    /*clear all*/
    clearData: (params) => ({
        type: actions.CLEAR_DATA_ACCOUNT,
        params
    }),
};

export default actions;