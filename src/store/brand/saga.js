import { put, takeLatest, all } from "redux-saga/effects";
import { brandService } from "services";
import { brandAction } from "store/actions";

// get list brand
export function* getBrandList(payload) {
    try {
        const response = yield brandService.getBrandList({ params: payload.params })
        response.success
            ? yield put({ type: brandAction.GET_LIST_BRAND_SUCCESS, response })
            : yield put({ type: brandAction.GET_LIST_BRAND_FAILURE, response });

    } catch (err) {
        yield put({ type: brandAction.GET_LIST_BRAND_FAILURE, response: { detail: err } });
    }
}

// get detail brand
export function* getBrandDetail(payload) {
    try {
        const response = yield brandService.getBrandDetail({ params: payload.params })
        response.success
            ? yield put({ type: brandAction.GET_DETAIL_BRAND_SUCCESS, response })
            : yield put({ type: brandAction.GET_DETAIL_BRAND_FAILURE, response });

    } catch (err) {
        yield put({ type: brandAction.GET_DETAIL_BRAND_FAILURE, response: { detail: err } });
    }
}

// post update brand
export function* postBrandUpdate(payload) {
    try {
        const response = yield brandService.postBrandUpdate({ params: payload.params })
        response.success
            ? yield put({ type: brandAction.POST_UPDATE_BRAND_SUCCESS, response })
            : yield put({ type: brandAction.POST_UPDATE_BRAND_FAILURE, response });

    } catch (err) {
        yield put({ type: brandAction.POST_UPDATE_BRAND_FAILURE, response: { detail: err } });
    }
}

// post delete brand
export function* postBrandDelete(payload) {
    try {
        const response = yield brandService.postBrandDelete({ params: payload.params })
        response.success
            ? yield put({ type: brandAction.POST_DELETE_BRAND_SUCCESS, response })
            : yield put({ type: brandAction.POST_DELETE_BRAND_FAILURE, response });

    } catch (err) {
        yield put({ type: brandAction.POST_DELETE_BRAND_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(brandAction.GET_LIST_BRAND_REQUEST, getBrandList),
        takeLatest(brandAction.GET_DETAIL_BRAND_REQUEST, getBrandDetail),
        takeLatest(brandAction.POST_UPDATE_BRAND_REQUEST, postBrandUpdate),
        takeLatest(brandAction.POST_DELETE_BRAND_REQUEST, postBrandDelete),
    ]);

}