import { put, takeLatest, all } from "redux-saga/effects";
import { categoryService } from "services";
import { categoryAction } from "store/actions";

// get list category
export function* getCategoryList(payload) {
    try {
        const response = yield categoryService.getCategoryList({ params: payload.params })
        response.success
            ? yield put({ type: categoryAction.GET_LIST_CATEGORY_SUCCESS, response })
            : yield put({ type: categoryAction.GET_LIST_CATEGORY_FAILURE, response });

    } catch (err) {
        yield put({ type: categoryAction.GET_LIST_CATEGORY_FAILURE, response: { detail: err } });
    }
}

// get detail category
export function* getCategoryDetail(payload) {
    try {
        const response = yield categoryService.getCategoryDetail({ params: payload.params })
        response.success
            ? yield put({ type: categoryAction.GET_DETAIL_CATEGORY_SUCCESS, response })
            : yield put({ type: categoryAction.GET_DETAIL_CATEGORY_FAILURE, response });

    } catch (err) {
        yield put({ type: categoryAction.GET_DETAIL_CATEGORY_FAILURE, response: { detail: err } });
    }
}

// post update category
export function* postCategoryUpdate(payload) {
    try {
        const response = yield categoryService.postCategoryUpdate({ params: payload.params })
        response.success
            ? yield put({ type: categoryAction.POST_UPDATE_CATEGORY_SUCCESS, response })
            : yield put({ type: categoryAction.POST_UPDATE_CATEGORY_FAILURE, response });

    } catch (err) {
        yield put({ type: categoryAction.POST_UPDATE_CATEGORY_FAILURE, response: { detail: err } });
    }
}

// post delete category
export function* postCategoryDelete(payload) {
    try {
        const response = yield categoryService.postCategoryDelete({ params: payload.params })
        response.success
            ? yield put({ type: categoryAction.POST_DELETE_CATEGORY_SUCCESS, response })
            : yield put({ type: categoryAction.POST_DELETE_CATEGORY_FAILURE, response });

    } catch (err) {
        yield put({ type: categoryAction.POST_DELETE_CATEGORY_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(categoryAction.GET_LIST_CATEGORY_REQUEST, getCategoryList),
        takeLatest(categoryAction.GET_DETAIL_CATEGORY_REQUEST, getCategoryDetail),
        takeLatest(categoryAction.POST_UPDATE_CATEGORY_REQUEST, postCategoryUpdate),
        takeLatest(categoryAction.POST_DELETE_CATEGORY_REQUEST, postCategoryDelete),
    ]);

}