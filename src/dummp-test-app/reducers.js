import {
  LOAD_DUMMP_TEST_APP,
  LOAD_DUMMP_TEST_APP_SUCCEEDED,
  LOAD_DUMMP_TEST_APP_FAILED,
} from './actions';

const dummpTestAppReducers = (state = {
  isFailed: false,
  isLoading: true,
  dummpTestApp: undefined,
}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_DUMMP_TEST_APP:
      newState.isFailed = false;
      newState.isLoading = true;
      return newState;

    case LOAD_DUMMP_TEST_APP_SUCCEEDED:
      newState.isFailed = false;
      newState.isLoading = false;
      newState.dummpTestApp = action.dummpTestApp;
      return newState;

    case LOAD_DUMMP_TEST_APP_FAILED:
      newState.isFailed = true;
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};

export default dummpTestAppReducers;
