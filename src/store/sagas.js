// export default allSaga;
import { all } from "redux-saga/effects";

import brandSaga from "./brand/saga";

function* allSaga() {
  yield all([
    brandSaga(),
  ]);
}

export default allSaga;