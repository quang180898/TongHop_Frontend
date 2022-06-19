import { put, takeLatest, all } from "redux-saga/effects";
import { chartService } from "services";
import { chartAction } from "store/actions";


export function* getChartAll(payload) {
    try {
        const response = yield chartService.getChartAll({ params: payload.params })
        response.success
            ? yield put({ type: chartAction.GET_ALL_CHART_SUCCESS, response })
            : yield put({ type: chartAction.GET_ALL_CHART_FAILURE, response });

    } catch (err) {
        yield put({ type: chartAction.GET_ALL_CHART_FAILURE, response: { detail: err } });
    }
}

export function* getChartTotal(payload) {
    try {
        const response = yield chartService.getChartTotal({ params: payload.params })
        response.success
            ? yield put({ type: chartAction.GET_TOTAL_CHART_SUCCESS, response })
            : yield put({ type: chartAction.GET_TOTAL_CHART_FAILURE, response });

    } catch (err) {
        yield put({ type: chartAction.GET_TOTAL_CHART_FAILURE, response: { detail: err } });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(chartAction.GET_ALL_CHART_REQUEST, getChartAll),
        takeLatest(chartAction.GET_TOTAL_CHART_REQUEST, getChartTotal),
    ]);

}