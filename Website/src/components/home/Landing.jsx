import React from "react";
import "./Landing.css";
import ChatBot from "./chatbot";
import CustomeCard from "./CustomeCard";

function Landing({ handleClick }) {
  return (
    <div className="landing">
      
      <div className="landing-content">
       
      <h1>Nurturing Dreams,<br>
      </br>Empowering <br>
      </br>Communities</h1>
      <p>Our vision is to create a world in which all women determine<br/> the course of 
      their lives & reach their full potential.</p>
       <button type="button" className="sign-up" onClick={handleClick}>
        <b> <i className="signup icon"></i>Join Now!</b>
      </button>
      
      </div>
    </div>
  );
}

export default Landing;
