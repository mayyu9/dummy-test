import dummpTestAppReducers from '../src/dummp-test-app/reducers';
import {
  LOAD_DUMMP_TEST_APP,
  LOAD_DUMMP_TEST_APP_SUCCEEDED,
  LOAD_DUMMP_TEST_APP_FAILED,
} from '../src/dummp-test-app/actions';

describe('dummpTestApp reducers', () => {
  it('should return the given state when action type is not recognized', () => {
    const initialState = { state: 'initial' };

    const result = dummpTestAppReducers(initialState, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result).toBe(initialState);
  });

  it('should return the default state when the initial state is undefined', () => {
    const result = dummpTestAppReducers(undefined, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result.dummpTestApp).toBeUndefined();
  });

  it('should return isLoading after a load action', () => {
    const result = dummpTestAppReducers(undefined, { type: LOAD_DUMMP_TEST_APP });

    expect(result).toEqual({
      isLoading: true,
      isFailed: false,
      dummpTestApp: undefined,
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a populated DummpTestApp', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      dummpTestApp: undefined,
    };
    const result = dummpTestAppReducers(startingState, {
      type: LOAD_DUMMP_TEST_APP_SUCCEEDED,
      dummpTestApp: 'DummpTestApp',
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      dummpTestApp: 'DummpTestApp',
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a nonpopulated DummpTestApp', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      dummpTestApp: undefined,
    };
    const result = dummpTestAppReducers(startingState, {
      type: LOAD_DUMMP_TEST_APP_SUCCEEDED,
      dummpTestApp: null,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      dummpTestApp: null,
    });
  });

  it('should return isLoading as false and isFailed as true after a load action fails', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      dummpTestApp: undefined,
    };
    const result = dummpTestAppReducers(startingState, {
      type: LOAD_DUMMP_TEST_APP_FAILED,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: true,
      dummpTestApp: undefined,
    });
  });
});
