import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loadDummpTestApp } from '../actions';
import dummpTestAppReducers from '../reducers';
import dummpTestAppSagas from '../sagas';
import dummpTestAppService from '../service';

import DummpTestAppView from './DummpTestAppView';

const propTypes = {
  dummpTestApp: PropTypes.string,
  refreshDummpTestApp: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
};

class DummpTestAppContainer extends React.Component {
  componentDidMount() {
    document.addEventListener('orionReactComponentRefresh', this.props.refreshDummpTestApp);
    this.props.refreshDummpTestApp();
  }

  componentWillUnmount() {
    document.removeEventListener('orionReactComponentRefresh', this.props.refreshDummpTestApp);
  }

  render() {
    const { isFailed, isLoading, dummpTestApp } = this.props;
    return <DummpTestAppView isFailed={isFailed} isLoading={isLoading} text={dummpTestApp} />;
  }
}

DummpTestAppContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  dummpTestApp: state.dummpTestAppState.dummpTestApp,
  isLoading: state.dummpTestAppState.isLoading,
  isFailed: state.dummpTestAppState.isFailed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  refreshDummpTestApp: () => {
    dispatch(loadDummpTestApp(ownProps.service || dummpTestAppService, ownProps.patientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DummpTestAppContainer);

const reducers = Object.assign({}, { dummpTestAppState: dummpTestAppReducers });
export { reducers };

const sagas = dummpTestAppSagas;
export { sagas };
