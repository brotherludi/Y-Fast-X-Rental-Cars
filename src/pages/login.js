import axios from "axios";
import { getLoginRegister } from "../api";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../LoginRegister.css";
import { useNavigate } from "react-router-dom";

// Function to register a new user
export function registerUser(userData) {
  return axios.post(`/login-register/register`, userData).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

// Function to login a user
export function loginUser(userData) {
  return axios.post(`/login-register/login`, userData).then((response) => {
    console.log(response.data);
    return response.data;
  });
}

const LoginRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [userType, setUserType] = useState("buyer");
  const [showRegisterSuccessModal, setShowRegisterSuccessModal] =
    useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({ email, password, userType })
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("user", JSON.stringify(data));
        setUserLoggedIn(true);
        navigate("/");
        // handle success - for example, change the app state to show that the user is logged in
      })
      .catch((err) => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser({
      username,
      password,
      userType,
      email,
      first_name: "sponge",
      last_name: "bob",
    })
      .then((data) => {
        setShowRegisterSuccessModal(true);
        setRegistrationSuccess(true);
        // handle success - to show that the user is registered
      })
      .catch((err) => {
        console.error(err);
        // handle error - for example, show an error message
      });
  };

  useEffect(() => {
    if (showRegisterSuccessModal && userLoggedIn && registrationSuccess) {
      loginUser({ email, password, userType })
        .then((loginData) => {
          console.log("Logged in:", loginData);
          localStorage.setItem("user", JSON.stringify(loginData));
          navigate("/");
        })
        .catch((err) => {
          console.error("Login error:", err);
        });
    }
  }, [showRegisterSuccessModal, userLoggedIn, registrationSuccess, navigate]);

  return (
    <div className="background-picture">
      <Header />
      <div className="login-register-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {/* Login form fields */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {/* Select User Type */}
          {/* <label htmlFor="loginUserType">Select User Type:</label>
          <select
            id="loginUserType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select> */}

          <button type="submit">Login</button>
        </form>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          {/* Common fields */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {/* {userType === "buyer" && (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          )} */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          {/* Fields for seller */}
          {/* {userType === "seller" && (
            <>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
              />
            </>
          )} */}

          <label htmlFor="userType">Select User Type:</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
      {/* Register success modal */}
      {showRegisterSuccessModal && !userLoggedIn && (
        <div className="modal">
          <div className="modal-content">
            <p className="success-message">
              Registered successfully! Please Login 😃
            </p>
            <button
              className="modal-button"
              onClick={() => {
                setShowRegisterSuccessModal(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LoginRegister;
