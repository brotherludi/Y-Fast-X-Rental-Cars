// // // // Login.js


// // // import React, { useState } from 'react';

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Call your API to log in the user here
// // //     console.log(`Email: ${email}, Password: ${password}`);
// // //   }

// // //   return (
// // //     <div>
// // //       <h1>Login</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>Email: 
// // //           <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
// // //         </label>
// // //         <label>Password: 
// // //           <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
// // //         </label>
// // //         <button type='submit'>Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Login;




// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // function Login() {
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   const login = () => {
// // // //     axios.post('http://localhost:3000/login', {
// // // //       username,
// // // //       password
// // // //     }).then((response) => {
// // // //       console.log(response);
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>Login</h1>
// // // //       <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
// // // //       <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
// // // //       <button onClick={login}>Login</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;




// // // import React, { useState } from 'react';
// // // import axios from 'axios'; // Make sure axios is installed

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Call your API to log in the user here
// // //     axios.post('http://localhost:3000/loginRegister/login', {
// // //       email: email,
// // //       password: password
// // //     })
// // //     .then((response) => {
// // //       // Handle successful response here - for example, set user info, set a logged in flag, etc.
// // //       console.log(response.data);
// // //     })
// // //     .catch((error) => {
// // //       // Handle error here
// // //       console.log('Error logging in:', error);
// // //     });
// // //   }

// // //   return (
// // //     <div>
// // //       <h1>Login</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>Email: 
// // //           <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
// // //         </label>
// // //         <label>Password: 
// // //           <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
// // //         </label>
// // //         <button type='submit'>Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Login;


// // import React, { useState } from 'react';
// // import axios from 'axios'; // Make sure axios is installed

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Call your API to log in the user here
// //     axios.post('http://localhost:3000/login', {
// //       email: email,
// //       password: password
// //     })
// //     .then((response) => {
// //       // Handle successful response here - for example, set user info, set a logged in flag, etc.
// //       console.log(response.data);
// //     })
// //     .catch((error) => {
// //       // Handle error here
// //       console.log('Error logging in:', error);
// //     });
// //   }

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>Email: 
// //           <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
// //         </label>
// //         <label>Password: 
// //           <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
// //         </label>
// //         <button type='submit'>Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;






// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginStatus, setLoginStatus] = useState(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   }

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post('http://localhost:3000/login', {
//       email: email,
//       password: password
//     })
//     .then((response) => {
//       // Handle successful response here
//       console.log(response.data);
//       setLoginStatus('Login successful');
//     })
//     .catch((error) => {
//       // Handle error here
//       console.log('Error logging in:', error);
//       setLoginStatus('Login failed');
//     });
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email: 
//           <input type='text' value={email} onChange={handleEmailChange} />
//         </label>
//         <label>Password: 
//           <input type='password' value={password} onChange={handlePasswordChange} />
//         </label>
//         <button type='submit'>Login</button>
//       </form>
//       {loginStatus && <p>{loginStatus}</p>}
//     </div>
//   );
// }

// export default Login;





import axios from 'axios';
import React, { useState } from 'react';

const serverURL = "http://localhost:3000";

// Function to register a new user
export function registerUser(userData) {
  return axios.post(`${serverURL}/login-register/register`, userData)
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
  return axios.post(`${serverURL}/login-register/login`, userData)
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
  
  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({username, password})
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
    registerUser({username, password})
      .then(data => {
        console.log(data);
        // handle success - for example, show a message to indicate successful registration
      })
      .catch(err => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginRegister;
