export interface MeetingEventAttributes {
	name: string;
	expiryDate: string;
	longitude: number;
	latitude: number;
	description: string;
	address: {
		country?: string;
		town?: string;
		postalCode?: string;
		street?: string;
		houseNumber?: string;
	};
	maxNumberOfParticipants: number;
}

export interface AddMeetingEventFormProps {
	closeModal(): void;
	onAddEvent(event: StudentifyEvent): void;
	goBack(): void;
}
