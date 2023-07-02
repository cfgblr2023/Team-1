import React, { useState } from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import ChatBot from "./chatbot";

function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscription(event) {
    event.preventDefault();
    if (email === "") {
      Swal.fire({
        icon: "warning",
        title: "Action forbidden",
        text: "Please enter a valid email address before submitting",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "I understand",
      });
      return false;
    }
    Swal.fire({
      icon: "success",
      title: "Success",
      text: `${email} has been successfully subscribed to receive notifications`,
      showCloseButton: true,
      footer: "Made a mistake? <a href='#'> Click here to unsubscribe </a>",
    });
    setEmail("");
  }
  return (
    <>
      <footer className="footer">
        <div className="main-footer">
          <div className="footer-column">
            
            <h5>About</h5>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/about">Our Team</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Useful Links</h5>
            <ul>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
         
          <div className="footer-column">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" onClick={(e) => handleSubscription(e)}>
                <Icon name="arrow right" size="small" />
              </button>
            </form>
            
          </div>
           
        </div>
             </footer>

      <div className="copyright">
       
        <hr />
        <p>&copy; 2023 MentorWave. All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
