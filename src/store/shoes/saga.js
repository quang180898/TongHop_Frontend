import { put, takeLatest, all } from "redux-saga/effects";
import { shoesService } from "services";
import { shoesAction } from "store/actions";

// get list shoes
export function* getShoesList(payload) {
    try {
        const response = yield shoesService.getShoesList({ params: payload.params })
        response.success
            ? yield put({ type: shoesAction.GET_LIST_SHOES_SUCCESS, response })
            : yield put({ type: shoesAction.GET_LIST_SHOES_FAILURE, response });

    } catch (err) {
        yield put({ type: shoesAction.GET_LIST_SHOES_FAILURE, response: { detail: err } });
    }
}

// get detail shoes
export function* getShoesDetail(payload) {
    try {
        const response = yield shoesService.getShoesDetail({ params: payload.params })
        response.success
            ? yield put({ type: shoesAction.GET_DETAIL_SHOES_SUCCESS, response })
            : yield put({ type: shoesAction.GET_DETAIL_SHOES_FAILURE, response });

    } catch (err) {
        yield put({ type: shoesAction.GET_DETAIL_SHOES_FAILURE, response: { detail: err } });
    }
}

// get same shoes
export function* getShoesSame(payload) {
    try {
        const response = yield shoesService.getShoesSame({ params: payload.params })
        response.success
            ? yield put({ type: shoesAction.GET_SAME_SHOES_SUCCESS, response })
            : yield put({ type: shoesAction.GET_SAME_SHOES_FAILURE, response });

    } catch (err) {
        yield put({ type: shoesAction.GET_SAME_SHOES_FAILURE, response: { detail: err } });
    }
}

// get home shoes
export function* getShoesHome(payload) {
    try {
        const response = yield shoesService.getShoesHome({ params: payload.params })
        response.success
            ? yield put({ type: shoesAction.GET_HOME_SHOES_SUCCESS, response })
            : yield put({ type: shoesAction.GET_HOME_SHOES_FAILURE, response });

    } catch (err) {
        yield put({ type: shoesAction.GET_HOME_SHOES_FAILURE, response: { detail: err } });
    }
}

// post update shoes
export function* postShoesUpdate(payload) {
    try {
        const response = yield shoesService.postShoesUpdate({ params: payload.params })
        response.success
            ? yield put({ type: shoesAction.POST_UPDATE_SHOES_SUCCESS, response })
            : yield put({ type: shoesAction.POST_UPDATE_SHOES_FAILURE, response });

    } catch (err) {
        yield put({ type: shoesAction.POST_UPDATE_SHOES_FAILURE, response: { detail: err } });
    }
}

// post delete shoes
export function* postShoesDelete(payload) {
    try {
        const response = yield shoesService.postShoesDelete({ params: payload.params })
        response.success
            ? yield put({ type: shoesAction.POST_DELETE_SHOES_SUCCESS, response })
            : yield put({ type: shoesAction.POST_DELETE_SHOES_FAILURE, response });

    } catch (err) {
        yield put({ type: shoesAction.POST_DELETE_SHOES_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(shoesAction.GET_LIST_SHOES_REQUEST, getShoesList),
        takeLatest(shoesAction.GET_DETAIL_SHOES_REQUEST, getShoesDetail),
        takeLatest(shoesAction.POST_UPDATE_SHOES_REQUEST, postShoesUpdate),
        takeLatest(shoesAction.POST_DELETE_SHOES_REQUEST, postShoesDelete),
        takeLatest(shoesAction.GET_SAME_SHOES_REQUEST, getShoesSame),
        takeLatest(shoesAction.GET_HOME_SHOES_REQUEST, getShoesHome),
    ]);

}