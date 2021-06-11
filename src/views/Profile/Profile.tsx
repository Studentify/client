import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { EventList } from "./components";
import { Avatar, ProfileLayout, Grid, GridELement, Content } from "./Profile-styles";

// temp mock
const user = {
	firstName: "string",
	lastName: "string",
	userName: "string",
	email: "user@example.com",
};

const events = [
	{
		id: 1,
		eventType: "meeting",
		name: "meeting name",
		creationDate: "2021-12-01",
		expiryDate: "2021-12-02",
		description: "Lorem lorem ips",
		studentifyAccountId: 12,
		location: {
			coordinates: {
				longitude: 1,
				latitude: 1,
			},
			address: {
				country: "poland",
				town: "Przysucha",
				postalCode: "223-12",
				street: "abc",
				houseNumber: "21",
			},
		},
	},
];
// --------------------------

const Profile: React.FC = () => {
	// const [events, setEvents] = useState<Event[]>([]);

	// useEffect(() => {
	// 	fetchEvents();

	// 	async function fetchEvents() {
	// 		try {
	// 			const res = await axios.get<Event[]>("/Events");
	// 			setEvents(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	}
	// }, []);

	return (
		<ProfileLayout>
			<Grid container>
				<GridELement container xs={12} sm={6}>
					<GridELement item xs={12} sm={6}>
						<Avatar>
							<AccountCircleIcon style={{ fontSize: 200 }} />
						</Avatar>
					</GridELement>
					<GridELement item xs={12} sm={6}>
						<Content>
							<h1>{user.userName}</h1>
							<br />
							<hr />
							<br />
							<h3>{user.firstName + " " + user.lastName}</h3>
							<br />
							<h3>{user.email}</h3>
						</Content>
					</GridELement>
				</GridELement>
				<Grid container xs={12} sm={6}>
					<Content>
						<h1>Skills:</h1>
						<br />
						<hr />
						<br />
						<h3>Gotowanie</h3>
						<h3>Całki</h3>
						<h3>Półki</h3>
					</Content>
				</Grid>
				<Grid item xs={12}>
					<EventList events={events} />
				</Grid>
			</Grid>
		</ProfileLayout>
	);
};

export default Profile;
