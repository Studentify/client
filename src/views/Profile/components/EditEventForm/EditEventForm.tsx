import React from "react";

import { EditInfoEventForm, EditMeetingEventForm, EditTradeOfferEventForm } from "../";
import { Container } from "./EditEventForm-style";

function getEventFormByEventType(eventType: string) {
	switch (eventType) {
		case "INFO":
			return EditInfoEventForm;
		case "MEETING":
			return EditMeetingEventForm;
		case "TRADEOFFER":
			return EditTradeOfferEventForm;
		default:
			return EditInfoEventForm;
	}
}

interface EditEventFormProps {
	onEditEvent(event: StudentifyEvent): void;
	closeModal(): void;
	toEditEvent: StudentifyEvent;
}

const EditEventForm = React.forwardRef<HTMLElement, EditEventFormProps>(
	({ onEditEvent, closeModal, toEditEvent }) => {
		const EventForm = getEventFormByEventType(toEditEvent.eventType);

		return (
			<Container>
				<EventForm
					goBack={closeModal}
					onEditEvent={onEditEvent}
					closeModal={closeModal}
					toEditEvent={toEditEvent}
				/>
			</Container>
		);
	}
);

export default EditEventForm;
