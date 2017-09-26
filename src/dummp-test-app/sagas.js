import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_DUMMP_TEST_APP,
  LOAD_DUMMP_TEST_APP_SUCCEEDED,
  LOAD_DUMMP_TEST_APP_FAILED,
} from './actions';

function* fetchDummpTestApp(action) {
  try {
    const dummpTestApp = yield call(action.data.service.getDummpTestApp, action.data.patientId);
    yield put({ type: LOAD_DUMMP_TEST_APP_SUCCEEDED, dummpTestApp });
  } catch (e) {
    yield put({ type: LOAD_DUMMP_TEST_APP_FAILED });
  }
}

function* fetchDummpTestAppSaga() {
  yield takeLatest(LOAD_DUMMP_TEST_APP, fetchDummpTestApp);
}

export { fetchDummpTestApp };
export default [fetchDummpTestAppSaga];
