import axios from 'axios';
import { getLoginRegister } from '../api'; 
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../LoginRegister.css';

// Function to register a new user
export function registerUser(userData) {
  return axios.post(`/login-register/register`, userData)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}

// Function to login a user
export function loginUser(userData) {
  return axios.post(`/login-register/login`, userData)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
}

const LoginRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(""); // Define userType state

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({email, password})
      .then(data => {
        console.log(data);
        // handle success - for example, change the app state to show that the user is logged in
      })
      .catch(err => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser({username, password, first_name, last_name, email})
      .then(data => {
        console.log(data);
        // handle success - for example, change the app state to show that the user is registered
      })
      .catch(err => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  return (
    <div>
      <Header />
      <div className="login-register-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />        
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <input type="text" value={first_name} onChange={(e) => setFirstname(e.target.value)} placeholder="First name" />
          <input type="text" value={last_name} onChange={(e) => setLastname(e.target.value)} placeholder="Last name" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <label htmlFor="userType">Select User Type:</label>
          <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;

// const serverURL = "http://localhost:3001";

// // Function to register a new user
// export function registerUser(userData) {
//   return axios.post(`${serverURL}/login-register/register`, userData)
//     .then(response => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// // Function to login a user
// export function loginUser(userData) {
//   return axios.post(`${serverURL}/login-register/login`, userData)
//     .then(response => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// const LoginRegister = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  
//   const handleLogin = (event) => {
//     event.preventDefault();
//     loginUser({username, password});
//   };

//   const handleRegister = (event) => {
//     event.preventDefault();
//     registerUser({username, password});
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>

//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };


// const handleLogin = (event) => {
//   event.preventDefault();
//   loginUser({username, password})
//     .then(data => {
//       console.log(data);
//       // handle success - for example, change the app state to show that the user is logged in
//     })
//     .catch(err => {
//       console.error(err);
//       // handle error - for example, show an error message
//     });
// };


// export default LoginRegister;


// // login.js
// import axios from 'axios';
// import React, { useState } from 'react';


// import axios from 'axios';
// import React, { useState } from 'react';

// const serverURL = "http://localhost:3001";

// // Function to register a new user
// export function registerUser(userData) {
//   return axios.post(`${serverURL}/login-register/register`, userData)
//     .then(response => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// // Function to login a user
// export function loginUser(userData) {
//   return axios.post(`${serverURL}/login-register/login`, userData)
//     .then(response => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// const LoginRegister = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  
//   const handleLogin = (event) => {
//     event.preventDefault();
//     loginUser({username, password})
//       .then(data => {
//         console.log(data);
//         // handle success - for example, change the app state to show that the user is logged in
//       })
//       .catch(err => {
//         console.error(err);
//         // handle error - for example, show an error message
//       });
//   };

//   const handleRegister = (event) => {
//     event.preventDefault();
//     registerUser({username, password})
//       .then(data => {
//         console.log(data);
//         // handle success - for example, change the app state to show that the user is registered
//       })
//       .catch(err => {
//         console.error(err);
//         // handle error - for example, show an error message
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>

//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default LoginRegister;
