export interface InfoEventAttributes {
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
	category: number;
}

export interface EditInfoEventFormProps {
	closeModal(): void;
	onEditEvent(event: StudentifyEvent): void;
	goBack(): void;
	toEditEvent: StudentifyEvent;
}
