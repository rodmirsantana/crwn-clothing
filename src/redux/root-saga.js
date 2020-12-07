import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStartAsync } from './shop/shop.actions';

import { fetchCollectionsStart } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}