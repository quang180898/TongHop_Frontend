import { put, takeLatest, all } from "redux-saga/effects";
import { discountService } from "services";
import { discountAction } from "store/actions";

// get list Discount
export function* getListDiscount(payload) {
    try {
        const response = yield discountService.getListDiscount({ params: payload.params })
        response.success
            ? yield put({ type: discountAction.GET_LIST_DISCOUNT_SUCCESS, response })
            : yield put({ type: discountAction.GET_LIST_DISCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: discountAction.GET_LIST_DISCOUNT_FAILURE, response: { detail: err } });
    }
}

// get detail Discount
export function* getDetailDiscount(payload) {
    try {
        const response = yield discountService.getDetailDiscount({ params: payload.params })
        response.success
            ? yield put({ type: discountAction.GET_DETAIL_DISCOUNT_SUCCESS, response })
            : yield put({ type: discountAction.GET_DETAIL_DISCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: discountAction.GET_DETAIL_DISCOUNT_FAILURE, response: { detail: err } });
    }
}

// post update Discount
export function* postUpdateDiscount(payload) {
    try {
        const response = yield discountService.postUpdateDiscount({ params: payload.params })
        response.success
            ? yield put({ type: discountAction.POST_UPDATE_DISCOUNT_SUCCESS, response })
            : yield put({ type: discountAction.POST_UPDATE_DISCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: discountAction.POST_UPDATE_DISCOUNT_FAILURE, response: { detail: err } });
    }
}

// post delete Discount
export function* postDeleteDiscount(payload) {
    try {
        const response = yield discountService.postDeleteDiscount({ params: payload.params })
        response.success
            ? yield put({ type: discountAction.POST_DELETE_DISCOUNT_SUCCESS, response })
            : yield put({ type: discountAction.POST_DELETE_DISCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: discountAction.POST_DELETE_DISCOUNT_FAILURE, response: { detail: err } });
    }
}

// post delete Discount
export function* getGmailDiscount(payload) {
    try {
        const response = yield discountService.getGmailDiscount({ params: payload.params })
        response.success
            ? yield put({ type: discountAction.GET_GMAIL_DISCOUNT_SUCCESS, response })
            : yield put({ type: discountAction.GET_GMAIL_DISCOUNT_FAILURE, response });

    } catch (err) {
        yield put({ type: discountAction.GET_GMAIL_DISCOUNT_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(discountAction.GET_LIST_DISCOUNT_REQUEST, getListDiscount),
        takeLatest(discountAction.GET_DETAIL_DISCOUNT_REQUEST, getDetailDiscount),
        takeLatest(discountAction.POST_UPDATE_DISCOUNT_REQUEST, postUpdateDiscount),
        takeLatest(discountAction.POST_DELETE_DISCOUNT_REQUEST, postDeleteDiscount),
        takeLatest(discountAction.GET_GMAIL_DISCOUNT_REQUEST, getGmailDiscount),
    ]);

}