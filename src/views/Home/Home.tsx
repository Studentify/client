import React, { useState, useEffect, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "api/axiosInstance";

import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";

import { InfoEvent, MeetingEvent, TradeOfferEvent } from "views";
import { EventList, EventMap, AddEventForm, EventFilters } from "./components";
import { HomeLayout, ColumnView, AddEventButton } from "./Home-styles";

const Home: React.FC = () => {
	const [events, setEvents] = useState<StudentifyEvent[]>([]);
	const [isEventModalOpen, setIsEventModalOpen] = useState(false);
	const [eventType, setEventType] = useState<string>("");
	const [city, setCity] = useState<string>("");

	const filteredEvents = useMemo(
		() =>
			events.filter((event) => {
				let result = true;

				if (city && city !== "Polska") {
					result = result && event.location.address.town === city;
				}

				if (eventType && eventType !== "ALL") {
					result = result && event.eventType === eventType;
				}

				return result;
			}),
		[events, city, eventType]
	);

	useEffect(() => {
		fetchEvents();

		async function fetchEvents() {
			try {
				const res = await axios.get<StudentifyEvent[]>("/StudentifyEvents");
				setEvents(res.data);
			} catch (err) {
				console.log(err);
			}
		}
	}, []);

	const addEvent = (event: StudentifyEvent) => {
		setEvents((prev) => [event, ...prev]);
	};

	const closeEventModal = () => {
		setIsEventModalOpen(false);
	};

	const openEventModal = () => {
		setIsEventModalOpen(true);
	};

	return (
		<HomeLayout>
			<ColumnView>
				<Switch>
					<Route path="/home" exact>
						<EventFilters onSetCity={setCity} onSetEventType={setEventType} />
						<EventList events={filteredEvents} />
						<AddEventButton color="primary" aria-label="add" onClick={openEventModal}>
							<AddIcon />
						</AddEventButton>
					</Route>
					<Route path="/home/info/:id" component={InfoEvent} />
					<Route path="/home/meeting/:id" component={MeetingEvent} />
					<Route path="/home/tradeoffer/:id" component={TradeOfferEvent} />
				</Switch>
			</ColumnView>
			<ColumnView>
				<EventMap events={filteredEvents} />
			</ColumnView>
			<Modal open={isEventModalOpen} onClose={closeEventModal}>
				<AddEventForm onAddEvent={addEvent} closeModal={closeEventModal} />
			</Modal>
		</HomeLayout>
	);
};

export default Home;
