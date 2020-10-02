import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/sagas";
import { cartSagas } from "./cart/sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas)]);
}
