interface StudentifyEvent {
	id: number;
	eventType: string;
	name: string;
	creationDate: string;
	expiryDate: string;
	description: string;
	authorId: number;
	author: StudentifyAccount;
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

interface StudentifyAccount {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	userName: string;
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
