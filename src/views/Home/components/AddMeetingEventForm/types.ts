export interface MeetingEventAttributes {
	name: string;
	expiryDate: string;
	longitude: number;
	latitude: number;
  description: string
  maxNumberOfParticipants: number;
}

export interface AddMeetingEventFormProps {
	closeModal(): void;
  onAddEvent(event: StudentifyEvent): void;
  goBack(): void;
}
