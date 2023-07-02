import { useState, useContext } from "react";
import { AppContext } from "../../context/Context";
import { Checkbox } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { BsSoundwave } from "react-icons/bs";
import Mentor from "../Dashboard/mentor/mentor";
import ReactDOM from 'react-dom/client'

function Login({ handleLogin, handleClick, showPassword, setShowPassword }) {
  const { userData, setLoggedInUser, setIsLoggedIn} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    console.log("HEY THERE")
    event.preventDefault();
   /* if (userData.length === 0) {
      return;
    }*/
    /*const foundUser = userData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (!foundUser) {
      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: "The provided username or password is incorrect. Please try again",
        showCloseButton: true,
      });
      setLoginData({
        email: "",
        password: "",
        role: "",
      });
      setLoading(false);
      return;
    }
   // handleLogin();
    //setLoggedInUser(foundUser);
    //setIsLoggedIn(true);
    /*setLoginData({
      email: "",
      password: "",
      role: "",
    });*/
    console.log(loginData.email , "email hello");
    console.log(loginData.password);


    let response = await fetch("http://localhost:1000/api/auth/login", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:loginData.email,
      password:loginData.password
    })
   });

   response = await response.json();
   console.log(response.basic.role);
  
    if (response.basic.role === "mentee") {
      navigate("/mentee");
      console.log("Mentee");
    } else if (response.basic.role === "mentor") {
      ReactDOM.createRoot(document.getElementById('mentor_click').click())

    }
    
  };
  

  

  return (
    <div className="login-container">
      <div className="navbar-logo">
       <img src="./src/Images/logo.webp"></img>
      </div>
      <div className="custom-login" id="login-page">
        <h1>Welcome Back</h1>
        <form>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Type your email"
              required
            />
            <i className="mail icon" id="email-icon"></i>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Type your password"
              minLength={8}
              required
            />
            <i className="lock icon" id="password-icon"></i>
          </div>
          
          <Checkbox
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
         
          <span> {!showPassword ? "Show" : "Hide"} Password</span>
                  
          <p>
            <br></br>
            Forgot Password? <a>Click here</a>
          </p>
          
          <button
            // type="submit"
            onClick={()=> 
              handleSubmit(event)}
            className={
              !loading ? "login-btn" : "ui loading fluid primary button"
            }
            id="sign-in-btn">
            <i className="sign in icon"></i>Login
          </button>
        </form>
        <br></br>
        <div
          className="ui bottom attached welcome message"
          id="register-message">
          Don't have an account ? <a onClick={handleClick}>Register Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
