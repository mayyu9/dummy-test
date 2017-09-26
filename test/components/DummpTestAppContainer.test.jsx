/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import DummpTestAppContainer from '../../src/dummp-test-app/components/DummpTestAppContainer';
import { LOAD_DUMMP_TEST_APP } from '../../src/dummp-test-app/actions';

it('should render a DummpTestAppContainer with a populated DummpTestApp', () => {
  const testContainer = shallowWithStore(
    <DummpTestAppContainer />,
    createMockStore({
      dummpTestAppState: {
        dummpTestApp: 'DummpTestApp',
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a DummpTestAppContainer with a nonpopulated DummpTestApp', () => {
  const testContainer = shallowWithStore(
    <DummpTestAppContainer />,
    createMockStore({
      dummpTestAppState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a DummpTestAppContainer with DummtTestEngine loading', () => {
  const testContainer = shallowWithStore(
    <DummpTestAppContainer />,
    createMockStore({
      dummpTestAppState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a DummpTestApp container with a DummtTestEngine failed', () => {
  const testContainer = shallowWithStore(
    <DummpTestAppContainer />,
    createMockStore({
      dummpTestAppState: {
        isFailed: true,
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should call the dispatch method', () => {
  const testStore = createMockStore({
    dummpTestAppState: {
    },
  });
  const testContainer = shallowWithStore(
    <DummpTestAppContainer patientId={100} />,
    testStore,
  );

  testContainer.props().refreshDummpTestApp();
  expect(testStore.isActionTypeDispatched(LOAD_DUMMP_TEST_APP)).toBe(true);
});
