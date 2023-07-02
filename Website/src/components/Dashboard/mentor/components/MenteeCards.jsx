import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import menteePic from "../assets/mentee_pic.jpg";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export function MenteeCards() {
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
		>
			•
		</Box>
	);

    var currentMenteeDetails={name:"Anushka Garg",progress:"68",education:"NIT Durgapur"};
    var previousMenteesList=["Diksha Mohan","Priyanka Nikam","Varkha Kundal"];

	function BasicCard() {
		return (
			<Card sx={{ maxWidth: 300 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={menteePic}
					title="current mentee"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{currentMenteeDetails.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
                        <b>Progress: &nbsp;</b> {currentMenteeDetails.progress} % <br/>
						<b>Education: &nbsp;</b>{currentMenteeDetails.education}<br/>
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">SHOW DETAILS</Button>
				</CardActions>
			</Card>
		);
	}
	return (
		<div>
			<div
				className="two-rem-tag"
				style={{ padding: "20px 0px 5px 20px" }}
			>
				Mentees
			</div>
			<div className="mentees-list">
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						aria-controls="panel1d-content"
						id="panel1d-header"
					>
						<Typography>Currently Assigned</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<BasicCard />
					</AccordionDetails>
				</Accordion>
                {previousMenteesList.length>0 &&
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<AccordionSummary
						aria-controls="panel2d-content"
						id="panel2d-header"
					>
						<Typography>Previously Assigned</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
                            {previousMenteesList[0]}
							{previousMenteesList.slice(1).map((name)=>{return (`, ${name}`)})}
						</Typography>
					</AccordionDetails>
				</Accordion>
                }
			</div>
		</div>
	);
}
