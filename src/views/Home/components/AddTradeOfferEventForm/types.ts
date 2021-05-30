export interface TradeOfferEventAttributes {
	name: string;
	expiryDate: string;
	longitude: number;
	latitude: number;
  description: string
  offer: string;
  price: string;
}

export interface AddTradeOfferEventFormProps {
	closeModal(): void;
  onAddEvent(event: StudentifyEvent): void;
  goBack(): void;
}

