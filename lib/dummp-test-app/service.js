'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummpTestAppServiceFactory = function dummpTestAppServiceFactory() {
  return {
    getDummpTestApp: function getDummpTestApp(patientId) {
      return _axios2.default.get('/patients/' + patientId + '/dummp-test-app', {
        headers: {
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.data.dummpTestApp;
      });
    }
  };
};

exports.default = dummpTestAppServiceFactory();