import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import DummpTestAppView from '../../src/dummp-test-app/components/DummpTestAppView';

loadTranslation('../translations/en-US.json');

it('should render a DummpTestAppView with no data', () => {
  const dummpTestAppView = shallowWithIntl(<DummpTestAppView />);
  expect(dummpTestAppView.first().shallow()).toMatchSnapshot();
});

it('should render a DummpTestAppView that has failed', () => {
  const dummpTestAppView = shallowWithIntl(<DummpTestAppView isFailed />);
  expect(dummpTestAppView.first().shallow()).toMatchSnapshot();
});

it('should render a DummpTestAppView view that is loading', () => {
  const dummpTestAppView = shallowWithIntl(<DummpTestAppView />);
  expect(dummpTestAppView.first().shallow()).toMatchSnapshot();
});

it('should render a DummpTestAppView that has succeeded with a valid DummtTestEngine', () => {
  const dummpTestAppView = shallowWithIntl(<DummpTestAppView text="DummpTestApp" />);
  expect(dummpTestAppView.first().shallow()).toMatchSnapshot();
});
