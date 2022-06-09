// export default allSaga;
import { all } from "redux-saga/effects";

import brandSaga from "./brand/saga";
import categorySaga from "./category/saga";
import shoesSaga from "./shoes/saga";

function* allSaga() {
  yield all([
    brandSaga(),
    categorySaga(),
    shoesSaga(),
  ]);
}

export default allSaga;