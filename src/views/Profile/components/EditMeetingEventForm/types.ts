export interface MeetingEventAttributes {
	name: string;
	expiryDate: string;
	description: string;
	longitude: number;
	latitude: number;
	address: {
		country?: string;
		town?: string;
		postalCode?: string;
		street?: string;
		houseNumber?: string;
	};
	maxNumberOfParticipants: number;
}

export interface EditMeetingEventFormProps {
	closeModal(): void;
	onEditEvent(event: StudentifyEvent): void;
	goBack(): void;
	toEditEvent: StudentifyEvent;
}

export interface MeetingEvent extends StudentifyEvent {
	maxNumberOfParticipants: number;
}
