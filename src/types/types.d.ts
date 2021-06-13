interface StudentifyEvent {
	id: number;
	eventType: string;
	name: string;
	creationDate: string;
	expiryDate: string;
	description: string;
	authorId: number;
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
	};
}

interface User {
	id: number;
	userName: string;
	firstName: string;
	lastName: string;
	email: string;
}
interface Skill {
	id: number;
	name: string;
	rate: number;
	ownerId: number;
}
