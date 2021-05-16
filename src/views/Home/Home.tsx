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

	return (
		<HomeLayout>
			<ColumnView>
				<EventList events={events}/>
				<AddEventButton color="primary" aria-label="add">
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
