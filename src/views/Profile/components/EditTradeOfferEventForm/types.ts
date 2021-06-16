export interface TradeOfferEventAttributes {
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
	offer: string;
	price: string;
}

export interface EditTradeOfferEventFormProps {
	closeModal(): void;
	onEditEvent(event: StudentifyEvent): void;
	goBack(): void;
	toEditEvent: StudentifyEvent;
}

export interface TradeOfferEvent extends StudentifyEvent {
	offer: string;
	price: string;
}
