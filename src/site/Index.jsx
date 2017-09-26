/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import DummpTestAppApplication from '../dummp-test-app/components/DummpTestAppApplication';

const testDummyService = {
  getDummpTestApp: () => (
    new Promise((resolve) => {
      setTimeout(() => { resolve('DummpTestApp Rules'); }, 2500);
    })
  ),
};

ReactDOM.render(
  <DummpTestAppApplication
    patientId={100}
    locale="en-US"
    service={testDummyService}
    translationsLoadingHeader="DummpTestApp"
  />, document.getElementById('root'));
