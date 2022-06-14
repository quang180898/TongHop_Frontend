import { put, takeLatest, all } from "redux-saga/effects";
import { accountService } from "services";
import { accountAction } from "store/actions";

// get list brand
export function* getListAccount(payload) {
    try {
        const response = yield accountService.getListAccount({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.GET_LIST_ACCOUNT_SUCCESS, response })
            : yield put({ type: accountAction.GET_LIST_ACCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.GET_LIST_ACCOUNT_FAILURE, response: { detail: err } });
    }
}

// post login
export function* postLogin(payload) {
    try {
        const response = yield accountService.postLogin({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.POST_LOGIN_SUCCESS, response })
            : yield put({ type: accountAction.POST_LOGIN_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.POST_LOGIN_FAILURE, response: { detail: err } });
    }
}

// post register
export function* postRegister(payload) {
    try {
        const response = yield accountService.postRegister({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.POST_REGISTER_SUCCESS, response })
            : yield put({ type: accountAction.POST_REGISTER_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.POST_REGISTER_FAILURE, response: { detail: err } });
    }
}

// get detail
export function* getDetailAccount(payload) {
    try {
        const response = yield accountService.getDetailAccount({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.GET_DETAIL_ACCOUNT_SUCCESS, response })
            : yield put({ type: accountAction.GET_DETAIL_ACCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.GET_DETAIL_ACCOUNT_FAILURE, response: { detail: err } });
    }
}

// post update account
export function* postUpdateAccount(payload) {
    try {
        const response = yield accountService.postUpdateAccount({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.POST_UPDATE_ACCOUNT_SUCCESS, response })
            : yield put({ type: accountAction.POST_UPDATE_ACCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.POST_UPDATE_ACCOUNT_FAILURE, response: { detail: err } });
    }
}

// post change account
export function* postChangeAccount(payload) {
    try {
        const response = yield accountService.postChangeAccount({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.POST_CHANGE_ACCOUNT_SUCCESS, response })
            : yield put({ type: accountAction.POST_CHANGE_ACCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.POST_CHANGE_ACCOUNT_FAILURE, response: { detail: err } });
    }
}

// postDeleteAccount
export function* postDeleteAccount(payload) {
    try {
        const response = yield accountService.postDeleteAccount({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.POST_DELETE_ACCOUNT_SUCCESS, response })
            : yield put({ type: accountAction.POST_DELETE_ACCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.POST_DELETE_ACCOUNT_FAILURE, response: { detail: err } });
    }
}

// postActiveAccount
export function* postActiveAccount(payload) {
    try {
        const response = yield accountService.postActiveAccount({ params: payload.params })
        response.success
            ? yield put({ type: accountAction.POST_ACTIVE_ACCOUNT_SUCCESS, response })
            : yield put({ type: accountAction.POST_ACTIVE_ACCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: accountAction.POST_ACTIVE_ACCOUNT_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(accountAction.GET_LIST_ACCOUNT_REQUEST, getListAccount),
        takeLatest(accountAction.POST_LOGIN_REQUEST, postLogin),
        takeLatest(accountAction.POST_REGISTER_REQUEST, postRegister),
        takeLatest(accountAction.GET_DETAIL_ACCOUNT_REQUEST, getDetailAccount),
        takeLatest(accountAction.POST_UPDATE_ACCOUNT_REQUEST, postUpdateAccount),
        takeLatest(accountAction.POST_CHANGE_ACCOUNT_REQUEST, postChangeAccount),
        takeLatest(accountAction.POST_DELETE_ACCOUNT_REQUEST, postDeleteAccount),
        takeLatest(accountAction.POST_ACTIVE_ACCOUNT_REQUEST, postActiveAccount),
    ]);

}