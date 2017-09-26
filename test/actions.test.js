import {
  LOAD_DUMMP_TEST_APP,
  loadDummpTestApp,
} from '../src/dummp-test-app/actions';

function testDummyService() {
  return 'Test API';
}

describe('dummpTestApp actions', () => {
  it('should create an action to load the DummtTestEngine', () => {
    expect(loadDummpTestApp(testDummyService, 100)).toEqual({
      type: LOAD_DUMMP_TEST_APP,
      data: {
        service: testDummyService,
        patientId: 100,
      },
    });
  });
});
