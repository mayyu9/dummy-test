import React from 'react';
import DummpTestAppApplication from '../../src/dummp-test-app/components/DummpTestAppApplication';

it('should render a DummpTestAppApplication with a placeholder', () => {
  const testDummyService = {
    getDummpTestApp: () => (
      new Promise((resolve) => {
        setTimeout(() => { resolve(); }, 1);
      })
    ),
  };

  const testView = shallow(<DummpTestAppApplication
    locale="en-US"
    patientId={100}
    service={testDummyService}
    translationsLoadingHeader="DummtTestEngine!!!!"
  />);
  expect(testView.first().shallow()).toMatchSnapshot();
});
