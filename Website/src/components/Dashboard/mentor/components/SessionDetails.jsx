import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

export function SessionDetails(props) {
    
	return (
		<Card sx={{ maxWidth: 275 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<b>Date: &nbsp;</b> {props.date}
					<br />
					<b>Time: &nbsp;</b> {props.time}
					<br />
                    <b>Mode: &nbsp;</b> {props.mode}
					<br />

				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" >MEETING LINK</Button>
			</CardActions>
		</Card>
	);
}
