import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";

import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";

import { EventList, EventMap, AddEventForm } from "./components";

import { HomeLayout, ColumnView, AddEventButton } from "./Home-styles";

export interface Event {
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
	const [open, setOpen] = useState(false);

	useEffect(() => {
		fetchEvents();

		async function fetchEvents() {
			try {
				const res = await axios.get<Event[]>("/Events");
				setEvents(res.data);
			} catch (err) {
				console.log(err);
			}
		}
	}, []);

	const addEvent = (event: Event) => {
		setEvents((prev) => [...prev, event]);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<HomeLayout>
			<ColumnView>
				<EventList events={events} />
				<AddEventButton color="primary" aria-label="add" onClick={() => setOpen(true)}>
					<AddIcon />
				</AddEventButton>
			</ColumnView>
			<ColumnView>
				<EventMap />
			</ColumnView>
			<Modal open={open} onClose={closeModal}>
				<AddEventForm onAddEvent={addEvent} closeModal={closeModal} />
			</Modal>
		</HomeLayout>
	);
};

export default Home;
