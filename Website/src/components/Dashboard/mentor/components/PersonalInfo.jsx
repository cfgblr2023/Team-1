import React from "react";
import "./styles.css";
import { Avatar } from "@mui/material";
import pic from "../assets/person.jpg";
import {Grid} from "@mui/material"



export function PersonalInfo() {
  var mentor={name:"Archishman Das",skills:["Communications","Home science","Written abilities"],languages:["English","Hindi","Kannada"],aspiration:"I want to be a software engineer"}
	return (
		<div className="personal-info">
			<div className="display-pic">
				<Grid container justifyContent="flex-end">
        <Avatar
					alt="Remy Sharp"
					src={pic}
					sx={{ width: 200, height: 200 }}
				/>
				</Grid>
				
			</div>

			<div className="two-rem-tag">Personal Info</div>
			<div className="name"><div className="personal-info-field">Name: &nbsp;</div><div className="personal-info-data">{mentor.name}</div></div>
      <div className="skills">
        <div className="personal-info-field"> Skills:</div><br/>
        {mentor.skills.map((skill)=>(<div><div className="personal-info-data">{skill}</div><br/></div>))}
      </div>
      <div className="languages">
        <div className="personal-info-field"> Languages:</div><br/>
        {mentor.languages.map((language)=>(<div><div className="personal-info-data">{language}</div><br/></div>))}
      </div>
      <div className="aspiration">
      <div className="personal-info-field"> Aspiration: &nbsp;</div>
      <div className="personal-info-data">{mentor.aspiration}</div>
      </div>
		</div>
	);
}
