'use strict';

require('regenerator-runtime/runtime');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DummpTestAppApplication = require('../dummp-test-app/components/DummpTestAppApplication');

var _DummpTestAppApplication2 = _interopRequireDefault(_DummpTestAppApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var testDummyService = {
  getDummpTestApp: function getDummpTestApp() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('DummpTestApp Rules');
      }, 2500);
    });
  }
};

_reactDom2.default.render(_react2.default.createElement(_DummpTestAppApplication2.default, {
  patientId: 100,
  locale: 'en-US',
  service: testDummyService,
  translationsLoadingHeader: 'DummpTestApp'
}), document.getElementById('root'));