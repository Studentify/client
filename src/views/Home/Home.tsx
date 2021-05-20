import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import axios from "api/axiosInstance";

import AddIcon from "@material-ui/icons/Add";
import Modal from '@material-ui/core/Modal';

import { InfoEvent } from 'views';
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
			} catch(err) {
				console.log(err);
			}
		}
	}, []);

	const addEvent = (event: Event) => {
		setEvents(prev => [...prev, event])
	}

	const closeModal = () => {
		setOpen(false)
	}

	return (
		<HomeLayout>
			<ColumnView>
				<Switch>
					<Route path="/home" exact>
						<EventList events={events}/>
						<AddEventButton color="primary" aria-label="add" onClick={() => setOpen(true)}>
        	<AddIcon />
      	</AddEventButton>
					</Route>
					<Route path="/home/info/:id" component={InfoEvent}/>
					<Route path="/home/meeting/:id">
						<div>meeting</div>
					</Route>
					<Route path="/home/trade-offer/:id">
						<div>Offer</div>
					</Route>
				</Switch>
			</ColumnView>
			<ColumnView>
				<EventMap />
			</ColumnView>
			<Modal open={open} onClose={closeModal}>
				<AddEventForm onAddEvent={addEvent} closeModal={closeModal}/>
			</Modal>
		</HomeLayout>
	);
};

export default Home;
