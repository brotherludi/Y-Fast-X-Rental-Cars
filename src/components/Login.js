import axios from "axios";
import React, { useState } from "react";

const serverURL = "http://localhost:3000";

// Function to register a new user
export function registerUser(userData) {
  return axios
    .post(`${serverURL}/login-register/register`, userData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to login a user
export function loginUser(userData) {
  return axios
    .post(`${serverURL}/login-register/login`, userData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

const LoginRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({ username, password })
      .then((data) => {
        console.log(data);
        // handle success - for example, change the app state to show that the user is logged in
      })
      .catch((err) => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser({ username, password })
      .then((data) => {
        console.log(data);
        // handle success - for example, show a message to indicate successful registration
      })
      .catch((err) => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginRegister;
