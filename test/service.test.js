import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import dummpTestAppService from '../src/dummp-test-app/service';

describe('dummpTestAppService', () => {
  it('should return the appropriate value on success', () => {
    const mockRequest = new MockAdapter(axios);
    mockRequest.onGet('/patients/1/dummp-test-app', {
      headers: {
        Accept: 'application/json',
      },
    }).reply(200, {
      dummpTestApp: 'DummpTestApp!',
    });

    return dummpTestAppService.getDummpTestApp(1).then(dummpTestApp => expect(dummpTestApp).toEqual('DummpTestApp!'));
  });
});
