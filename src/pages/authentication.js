import axios from 'axios';
import { getLoginRegister } from '../api'; 
const serverURL = "http://localhost:3001";

// Function to register a new user
function registerUser(userData) {
  return axios.post(`${serverURL}/login-register/register`, userData)
    .then(response => {
      // handle success
      console.log(response.data);
      // You might want to save user data or token here
    })
    .catch(error => {
      // handle error
      console.log(error);
      // You might want to handle errors here
    });
}

const loginregister = () => {
  // const [carsForSale, setCarsForSale] = useState([]);

  useEffect(() => {
    // Fetch the list of cars from the server using the getCarsForSale function
    getLoginRegister()
      .then((cars) => {
        setCarsForSale(cars);
      })
      .catch((error) => {
        console.error('Error fetching cars for sale:', error);
      });
  }, []);

}


// // Function to login a user
// function loginUser(userData) {
//   return axios.post(`${serverURL}/login-register/login`, userData)
//     .then(response => {
//       // handle success
//       console.log(response.data);
//       // You might want to save user data or token here
//     })
//     .catch(error => {
//       // handle error
//       console.log(error);
//       // You might want to handle errors here
//     });
// }