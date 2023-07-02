import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersonalInfo } from './components/PersonalInfo';
import { MenteeCards } from './components/MenteeCards';
import { CurrentMenteeView } from "./components/CurrentMenteeView";
import { DateSelector } from './components/DateSelector';
import { SessionDetails } from './components/SessionDetails';
function Mentor(){
    return (<div><PersonalInfo/><br/><MenteeCards/><CurrentMenteeView/><DateSelector/><SessionDetails/></div>);
}

export default Mentor;