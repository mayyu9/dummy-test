import dummpTestAppSagas, { fetchDummpTestApp } from '../src/dummp-test-app/sagas';

import {
  LOAD_DUMMP_TEST_APP,
  LOAD_DUMMP_TEST_APP_FAILED,
  LOAD_DUMMP_TEST_APP_SUCCEEDED,
} from '../src/dummp-test-app/actions';

function testDummyService() {
  return 'test';
}

describe('dummpTestApp sagas', () => {
  it('should return the DummtTestEngine given an action', () => {
    const action = {
      type: LOAD_DUMMP_TEST_APP,
      data: {
        service: { getDummpTestApp: testDummyService },
        patientId: 100,
      },
    };

    const testLoad = fetchDummpTestApp(action);
    testLoad.next(action);

    const result = testLoad.next('test');
    expect(result.value.PUT.action).toEqual({ dummpTestApp: 'test', type: LOAD_DUMMP_TEST_APP_SUCCEEDED });
  });

  it('should return failed given an invalid action', () => {
    const result = fetchDummpTestApp({}).next();
    expect(result.value.PUT.action).toEqual({ type: LOAD_DUMMP_TEST_APP_FAILED });
  });

  it('should return latest saga', () => {
    const result = dummpTestAppSagas[0]({}).next({});
    expect(result.value.FORK.args).toEqual([LOAD_DUMMP_TEST_APP, fetchDummpTestApp]);
  });
});
