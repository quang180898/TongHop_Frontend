import { put, takeLatest, all } from "redux-saga/effects";
import { orderService } from "services";
import { orderAction } from "store/actions";

// get list order
export function* getListOrder(payload) {
    try {
        const response = yield orderService.getListOrder({ params: payload.params })
        response.success
            ? yield put({ type: orderAction.GET_LIST_ORDER_SUCCESS, response })
            : yield put({ type: orderAction.GET_LIST_ORDER_FAILURE, response });

    } catch (err) {
        yield put({ type: orderAction.GET_LIST_ORDER_FAILURE, response: { detail: err } });
    }
}

// get detail order
export function* getDetailOrder(payload) {
    try {
        const response = yield orderService.getDetailOrder({ params: payload.params })
        response.success
            ? yield put({ type: orderAction.GET_DETAIL_ORDER_SUCCESS, response })
            : yield put({ type: orderAction.GET_DETAIL_ORDER_FAILURE, response });

    } catch (err) {
        yield put({ type: orderAction.GET_DETAIL_ORDER_FAILURE, response: { detail: err } });
    }
}

// get most order
export function* getMostOrder(payload) {
    try {
        const response = yield orderService.getMostOrder({ params: payload.params })
        response.success
            ? yield put({ type: orderAction.GET_MOST_ORDER_SUCCESS, response })
            : yield put({ type: orderAction.GET_MOST_ORDER_FAILURE, response });

    } catch (err) {
        yield put({ type: orderAction.GET_MOST_ORDER_FAILURE, response: { detail: err } });
    }
}

// post update order
export function* postUpdateOrder(payload) {
    try {
        const response = yield orderService.postUpdateOrder({ params: payload.params })
        response.success
            ? yield put({ type: orderAction.POST_UPDATE_ORDER_SUCCESS, response })
            : yield put({ type: orderAction.POST_UPDATE_ORDER_FAILURE, response });

    } catch (err) {
        yield put({ type: orderAction.POST_UPDATE_ORDER_FAILURE, response: { detail: err } });
    }
}

// post delete order
export function* postDeleteOrder(payload) {
    try {
        const response = yield orderService.postDeleteOrder({ params: payload.params })
        response.success
            ? yield put({ type: orderAction.POST_DELETE_ORDER_SUCCESS, response })
            : yield put({ type: orderAction.POST_DELETE_ORDER_FAILURE, response });

    } catch (err) {
        yield put({ type: orderAction.POST_DELETE_ORDER_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(orderAction.GET_LIST_ORDER_REQUEST, getListOrder),
        takeLatest(orderAction.GET_DETAIL_ORDER_REQUEST, getDetailOrder),
        takeLatest(orderAction.GET_MOST_ORDER_REQUEST, getMostOrder),
        takeLatest(orderAction.POST_UPDATE_ORDER_REQUEST, postUpdateOrder),
        takeLatest(orderAction.POST_DELETE_ORDER_REQUEST, postDeleteOrder),
    ]);

}