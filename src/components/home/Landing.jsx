import React from "react";
import "./Landing.css";
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

function Landing({ handleClick }) {
  return (
    <div className="landing">
      <div className="landing-content">
      <h1>The Power <br>
      </br>of Good Advice</h1>
      <p>Unleash your potential through mentorship. MentorWave takes you through a journey of self-advancement and fulfillment.</p>
      <button type="button" className="sign-up" onClick={handleClick}>
        <b> <i className="signup icon"></i>Join Now!</b>
      </button>
      <img src="/Mentee.png" alt="mentee"id="mentee-image" />
      </div>
      <ThemeProvider theme={otherFontTheme}>
      <div className="landing-chatbot">
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What number I am thinking?',
              trigger: '2',
            },
            {
              id: '2',
              options: [
                { value: 1, label: 'Number 1', trigger: '4' },
                { value: 2, label: 'Number 2', trigger: '3' },
                { value: 3, label: 'Number 3', trigger: '3' },
              ],
            },
            {
              id: '3',
              message: 'Wrong answer, try again.',
              trigger: '2',
            },
            {
              id: '4',
              message: 'Awesome! You are a telepath!',
              end: true,
            },
          ]}
        />
      </div>
      </ThemeProvider>
    </div>
    
  );
}

export default Landing;
