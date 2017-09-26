import ReactOnRails from 'react-on-rails';
import '../src/dummp-test-app/registration';

it('should register DummpTestAppApplication', () => {
  expect(ReactOnRails.getComponent('DummpTestAppApplication')).not.toBeUndefined();
});
