interface StudentifyEvent {
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