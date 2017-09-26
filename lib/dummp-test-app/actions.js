'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDummpTestApp = loadDummpTestApp;
var LOAD_DUMMP_TEST_APP = exports.LOAD_DUMMP_TEST_APP = 'LOAD_DUMMP_TEST_APP';
var LOAD_DUMMP_TEST_APP_SUCCEEDED = exports.LOAD_DUMMP_TEST_APP_SUCCEEDED = 'LOAD_DUMMP_TEST_APP_SUCCEEDED';
var LOAD_DUMMP_TEST_APP_FAILED = exports.LOAD_DUMMP_TEST_APP_FAILED = 'LOAD_DUMMP_TEST_APP_FAILED';

function loadDummpTestApp(service, patientId) {
  return {
    type: LOAD_DUMMP_TEST_APP,
    data: {
      service: service,
      patientId: patientId
    }
  };
}