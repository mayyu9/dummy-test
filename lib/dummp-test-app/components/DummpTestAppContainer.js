'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sagas = exports.reducers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require('../sagas');

var _sagas2 = _interopRequireDefault(_sagas);

var _service = require('../service');

var _service2 = _interopRequireDefault(_service);

var _DummpTestAppView = require('./DummpTestAppView');

var _DummpTestAppView2 = _interopRequireDefault(_DummpTestAppView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  dummpTestApp: _propTypes2.default.string,
  refreshDummpTestApp: _propTypes2.default.func.isRequired,
  isLoading: _propTypes2.default.bool,
  isFailed: _propTypes2.default.bool
};

var DummpTestAppContainer = function (_React$Component) {
  _inherits(DummpTestAppContainer, _React$Component);

  function DummpTestAppContainer() {
    _classCallCheck(this, DummpTestAppContainer);

    return _possibleConstructorReturn(this, (DummpTestAppContainer.__proto__ || Object.getPrototypeOf(DummpTestAppContainer)).apply(this, arguments));
  }

  _createClass(DummpTestAppContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('orionReactComponentRefresh', this.props.refreshDummpTestApp);
      this.props.refreshDummpTestApp();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('orionReactComponentRefresh', this.props.refreshDummpTestApp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFailed = _props.isFailed,
          isLoading = _props.isLoading,
          dummpTestApp = _props.dummpTestApp;

      return _react2.default.createElement(_DummpTestAppView2.default, { isFailed: isFailed, isLoading: isLoading, text: dummpTestApp });
    }
  }]);

  return DummpTestAppContainer;
}(_react2.default.Component);

DummpTestAppContainer.propTypes = propTypes;

var mapStateToProps = function mapStateToProps(state) {
  return {
    dummpTestApp: state.dummpTestAppState.dummpTestApp,
    isLoading: state.dummpTestAppState.isLoading,
    isFailed: state.dummpTestAppState.isFailed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    refreshDummpTestApp: function refreshDummpTestApp() {
      dispatch((0, _actions.loadDummpTestApp)(ownProps.service || _service2.default, ownProps.patientId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DummpTestAppContainer);


var reducers = _extends({}, { dummpTestAppState: _reducers2.default });
exports.reducers = reducers;


var sagas = _sagas2.default;
exports.sagas = sagas;