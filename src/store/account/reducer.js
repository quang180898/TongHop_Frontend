import { accountAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        // list account
        case accountAction.GET_LIST_ACCOUNT_REQUEST:
            return {
                ...state,
                listAccount: null,
                isLoadingListAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.GET_LIST_ACCOUNT_SUCCESS:
            return {
                ...state,
                listAccount: action.response,
                isLoadingListAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.GET_LIST_ACCOUNT_FAILURE:
            return {
                ...state,
                listAccount: action.response,
                isLoadingListAccountResponse: false,
                success: false,
                error: action.err,
            };

        // detail account
        case accountAction.GET_DETAIL_ACCOUNT_REQUEST:
            return {
                ...state,
                detailAccount: null,
                isLoadingDetailAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.GET_DETAIL_ACCOUNT_SUCCESS:
            return {
                ...state,
                detailAccount: action.response,
                isLoadingDetailAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.GET_DETAIL_ACCOUNT_FAILURE:
            return {
                ...state,
                detailAccount: action.response,
                isLoadingDetailAccountResponse: false,
                success: false,
                error: action.err,
            };

        // post login
        case accountAction.POST_LOGIN_REQUEST:
            return {
                ...state,
                loginAccount: null,
                isLoadingLoginAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.POST_LOGIN_SUCCESS:
            return {
                ...state,
                loginAccount: action.response,
                isLoadingLoginAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.POST_LOGIN_FAILURE:
            return {
                ...state,
                loginAccount: action.response,
                isLoadingLoginAccountResponse: false,
                success: false,
                error: action.err,
            };

         // post register
         case accountAction.POST_REGISTER_REQUEST:
            return {
                ...state,
                registerAccount: null,
                isLoadingRegisterAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.POST_REGISTER_SUCCESS:
            return {
                ...state,
                registerAccount: action.response,
                isLoadingRegisterAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.POST_REGISTER_FAILURE:
            return {
                ...state,
                registerAccount: action.response,
                isLoadingRegisterAccountResponse: false,
                success: false,
                error: action.err,
            };

         // post update
         case accountAction.POST_UPDATE_ACCOUNT_REQUEST:
            return {
                ...state,
                updateAccount: null,
                isLoadingUpdateAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.POST_UPDATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                updateAccount: action.response,
                isLoadingUpdateAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.POST_UPDATE_ACCOUNT_FAILURE:
            return {
                ...state,
                updateAccount: action.response,
                isLoadingUpdateAccountResponse: false,
                success: false,
                error: action.err,
            };

        // post change
        case accountAction.POST_CHANGE_ACCOUNT_REQUEST:
            return {
                ...state,
                changeAccount: null,
                isLoadingChangeAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.POST_CHANGE_ACCOUNT_SUCCESS:
            return {
                ...state,
                changeAccount: action.response,
                isLoadingChangeAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.POST_CHANGE_ACCOUNT_FAILURE:
            return {
                ...state,
                changeAccount: action.response,
                isLoadingChangeAccountResponse: false,
                success: false,
                error: action.err,
            };

        // post delete
        case accountAction.POST_DELETE_ACCOUNT_REQUEST:
            return {
                ...state,
                deleteAccount: null,
                isLoadingDeleteAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.POST_DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                deleteAccount: action.response,
                isLoadingDeleteAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.POST_DELETE_ACCOUNT_FAILURE:
            return {
                ...state,
                deleteAccount: action.response,
                isLoadingDeleteAccountResponse: false,
                success: false,
                error: action.err,
            };

        // post active
        case accountAction.POST_ACTIVE_ACCOUNT_REQUEST:
            return {
                ...state,
                activeAccount: null,
                isLoadingActiveAccountResponse: true,
                success: false,
                error: false,
            };
        case accountAction.POST_ACTIVE_ACCOUNT_SUCCESS:
            return {
                ...state,
                activeAccount: action.response,
                isLoadingActiveAccountResponse: false,
                success: true,
                error: false,
            };
        case accountAction.POST_ACTIVE_ACCOUNT_FAILURE:
            return {
                ...state,
                activeAccount: action.response,
                isLoadingActiveAccountResponse: false,
                success: false,
                error: action.err,
            };

        case accountAction.CLEAR_DATA_ACCOUNT:
            return {
                ...state,
                listAccount: null,
                detailAccount: null,
                loginAccount: null,
                registerAccount: null,
                updateAccount: null,
                changeAccount: null,
                deleteAccount: null,
                activeAccount: null,
            };

        default:
            return state;
    }
};
