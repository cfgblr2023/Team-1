import { useState, useContext } from "react";
import { AppContext } from "../../context/Context";
import "./login.css";
import Swal from "sweetalert2";
import { Checkbox } from "semantic-ui-react";
import Axios from "axios";
import { BsSoundwave } from "react-icons/bs";

function Registration({ handleRegister, showPassword, setShowPassword }) {
  const { setUserData } = useContext(AppContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "mentee",
    field1: "",
    field2:"",
    field3:""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleLoading() {
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty) {
      setLoading(false);
    } else setLoading(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request_params= {
      name:formData.fullName,
      email:formData.email,
      password:formData.password,
      role:formData.role,
      field1:formData.field1,
      field2:formData.field2,
      field3:formData.field3
      
    }
    let response = await fetch("http://localhost:1000/api/auth/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(request_params)
   }).then((response) => {
        setUserData(response.data);
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Thank you for registering! Proceed to log in with your new credentials",
        });
        setFormData({
          fullName: "",
          email: "",
          password: "",
          role: "mentee",
          field1: "",
          field2:"",
          field3:""
        });
        handleRegister();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Sorry, an error occurred during registration.",
        });
        setLoading(false);
      });
  };

  const renderAdditionalFields = () => {
    if (formData.role === "mentee") {
      return (
        <>
          <div className="input-field">
            <label>College Name</label>
            <select
              name="field1"
              className="ui select dropdown"
              value={formData.field1}
              onChange={handleChange}
              required
            >
              <option value="">Select a field</option>
              <option value="field1">Bangalore University </option>
              <option value="field12">Bengaluru North University-BNU</option>
              <option value="field13">Dr. S. Gopalraju Government First Grade College</option>
              <option value="field14">Government Arts and Science College </option>
              <option value="field15">Academy of Sanskrit Research </option>
              <option value="field16">Davangere University</option>
              <option value="field17">Government Home Science College </option>

            </select>
          </div>
          <div className="input-field">
            <label>Language</label>
            <select
              name="field2"
              fluid
              className="ui select dropdown"
              value={formData.field2}
              onChange={handleChange}
              required
            >
              <option value="">Select a field</option>
              <option value="field3">Hindi </option>
              <option value="field4">English</option>
              <option value="field5">Kannada</option>
              <option value="field6">Telugu</option>
            </select>
          </div>
          <div className="input-field">
            <label>Aspiration</label>
            <select
              name="field3"
              className="ui select dropdown"
              value={formData.field3}
              onChange={handleChange}
              required
            >
              <option value="">Select a field</option>
              <option value="field7">Home Sciences </option>
              <option value="field8">IT</option>
              <option value="field9">Mass Communication</option>
              <option value="field10">Public Speaking</option>
            </select>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="login-container">
      <div className="navbar-logo">
        <h1 className="ui large header">
          Mentor<span>Wave</span>
          <BsSoundwave />
        </h1>
      </div>
      <div id="login-page">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Full Name</label>
            <input
              name="fullName"
              placeholder="Enter your full names"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <i className="user icon" id="user-icon"></i>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className="mail icon" id="email-icon"></i>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              minLength={8}
              placeholder="********"
              title="password must contain numbers and letters"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i className="lock icon" id="password-icon"></i>
          </div>
          <div className="input-field">
            <Checkbox
              value={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            <span> {!showPassword ? "Show" : "Hide"} Password</span>
          </div>
          <div className="input-field">
            <label>Account Type</label>
            <select
              name="role"
              className="ui select dropdown register-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>
          {renderAdditionalFields()}
          <div className="input-field">
            <span>
              {" "}
              By continuing, you agree to the <a>terms and conditions</a>
            </span>
          </div>
          <button
            onClick={handleLoading}
            type="submit"
            className={!loading ? "register-btn" : "ui fluid loading primary button"}
          >
            <i className="signup icon"></i> Register
          </button>
        </form>
        <div className="ui bottom attached message" id="register-message">
          Already signed up ? <a onClick={handleRegister}>Login here</a>{" "}
          instead.
        </div>
      </div>
    </div>
  );
}

export default Registration;
