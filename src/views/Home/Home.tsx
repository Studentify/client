import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";

import AddIcon from "@material-ui/icons/Add";

import { EventList, EventMap } from "./components";

import { HomeLayout, ColumnView, AddEventButton } from "./Home-styles";


interface Event {
	id: number;
	eventType: string;
	name: string;
	creationDate: string;
	expiryDate: string;
	location: string;
	description: string;
	studentifyAccountId: number;
}

const Home: React.FC = () => {
	const [events, setEvents] = useState<Event[]>([]);

	useEffect(() => {
		fetchEvents();

		async function fetchEvents() {
			try {
				const res = await axios.get<Event[]>("/Events");
				setEvents(res.data);
			} catch(err) {
				console.log(err);
			}
		}
	}, []);

	// Temporary to show some interaction
	const addEvent = () => {
		const newEvent = {
			id: Math.floor(Math.random()*10000),
			eventType: "INFO",
			name: "New Event here",
			creationDate: new Date().toISOString(),
			expiryDate: new Date().toISOString(),
			location: "Cracow",
			description: "This is descrption of a brand new Event. This is gonna be awesome",
			studentifyAccountId: 4,
		}
		setEvents(prev => [...prev, newEvent])
	}

	return (
		<HomeLayout>
			<ColumnView>
				<EventList events={events}/>
				<AddEventButton color="primary" aria-label="add" onClick={addEvent}>
        	<AddIcon />
      	</AddEventButton>
			</ColumnView>
			<ColumnView>
				<EventMap />
			</ColumnView>
		</HomeLayout>
	);
};

export default Home;
