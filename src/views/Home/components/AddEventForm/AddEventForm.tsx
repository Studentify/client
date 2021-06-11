import React, { useState } from "react";

import { SelectEventCategory, AddInfoEventForm, AddMeetingEventForm, AddTradeOfferEventForm } from "../";
import { Container } from './AddEventForm-style';


function getEventFormByEventType(eventType: number) {
	switch(eventType) {
		case 0: return AddInfoEventForm;
		case 1: return AddMeetingEventForm;
		case 2: return AddTradeOfferEventForm;
		default: return AddInfoEventForm
	}
}

interface AddEventFormProps {
  onAddEvent(event: StudentifyEvent): void;
	closeModal(): void;
}


const AddEventForm = React.forwardRef<HTMLElement, AddEventFormProps>(({ onAddEvent, closeModal }) => {
	const [eventCategory, setEventCategory] = useState(-1);

	const goBack = () => {
		setEventCategory(-1);
	}

	const EventForm = getEventFormByEventType(eventCategory);

	return (
		<Container>
			{eventCategory !== -1
			? <EventForm goBack={goBack} onAddEvent={onAddEvent} closeModal={closeModal}/>
			: <SelectEventCategory onSelectCategory={setEventCategory} closeModal={closeModal}/>}
		</Container>
	)
});

export default AddEventForm;
