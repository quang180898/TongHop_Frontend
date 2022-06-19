// export default allSaga;
import { all } from "redux-saga/effects";

import brandSaga from "./brand/saga";
import categorySaga from "./category/saga";
import shoesSaga from "./shoes/saga";
import accountSaga from "./account/saga";
import orderSaga from "./order/saga";
import discountSaga from "./discount/saga";
import chartSaga from "./chart/saga";

function* allSaga() {
  yield all([
    brandSaga(),
    categorySaga(),
    shoesSaga(),
    accountSaga(),
    orderSaga(),
    discountSaga(),
    chartSaga(),
  ]);
}

export default allSaga;