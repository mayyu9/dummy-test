export const LOAD_DUMMP_TEST_APP = 'LOAD_DUMMP_TEST_APP';
export const LOAD_DUMMP_TEST_APP_SUCCEEDED = 'LOAD_DUMMP_TEST_APP_SUCCEEDED';
export const LOAD_DUMMP_TEST_APP_FAILED = 'LOAD_DUMMP_TEST_APP_FAILED';

export function loadDummpTestApp(service, patientId) {
  return {
    type: LOAD_DUMMP_TEST_APP,
    data: {
      service,
      patientId,
    },
  };
}
