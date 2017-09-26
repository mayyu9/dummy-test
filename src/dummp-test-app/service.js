import axios from 'axios';

const dummpTestAppServiceFactory = () => (
  {
    getDummpTestApp: patientId => (
      axios.get(`/patients/${patientId}/dummp-test-app`, {
        headers: {
          Accept: 'application/json',
        },
      }).then(response => (
        response.data.dummpTestApp
      ))
    ),
  }
);

export default dummpTestAppServiceFactory();
