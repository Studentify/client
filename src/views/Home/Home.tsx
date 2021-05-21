import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import axios from "api/axiosInstance";

import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";

import { InfoEvent } from 'views';
import { EventList, EventMap, AddEventForm } from "./components";
import { HomeLayout, ColumnView, AddEventButton } from "./Home-styles";

export interface Event {
	id: number;
	eventType: string;
	name: string;
	creationDate: string;
	expiryDate: string;
	description: string;
	studentifyAccountId: number;
	location: {
		coordinates: {
			longitude: number;
			latitude: number;
		};
		address: {
			country?: string;
			town?: string;
			postalCode?: string;
			street?: string;
			houseNumber?: string;
		};
	}
}

const Home: React.FC = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
	const [isEventModalOpen, setIsEventModalOpen] = useState(false);

	useEffect(() => {
		fetchEvents();

		async function fetchEvents() {
			try {
				const res = await axios.get<Event[]>("/Events");
				console.log(res.data)
				setEvents(res.data);
			} catch(err) {
				console.log(err);
			}
		}
	}, []);

	const addEvent = (event: Event) => {
		setEvents(prev => [...prev, event]);
	}

	const closeFiltersModal = () => {
		setIsFiltersModalOpen(false)
	}

	const closeEventModal = () => {
		setIsEventModalOpen(false)
	}

	const openFiltersModal = () => {
		setIsFiltersModalOpen(true)
	}

	const openEventModal = () => {
		setIsEventModalOpen(true)
	}


	return (
		<HomeLayout>
			<ColumnView>
				<Switch>
					<Route path="/home" exact>
						<EventList events={events} openFiltersModal={openFiltersModal}/>
						<AddEventButton color="primary" aria-label="add" onClick={openEventModal}>
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
				<EventMap events={events}/>
			</ColumnView>
			<Modal open={isFiltersModalOpen} onClose={closeFiltersModal}>
				<div>Filter form</div>
			</Modal>
			<Modal open={isEventModalOpen} onClose={closeEventModal}>
				<AddEventForm onAddEvent={addEvent} closeModal={closeEventModal}/>
			</Modal>
		</HomeLayout>
	);
};

export default Home;
