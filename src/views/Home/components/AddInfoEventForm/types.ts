export interface InfoEventAttributes {
	name: string;
	expiryDate: string;
	longitude: number;
	latitude: number;
  description: string
  category: number;
}

export interface AddInfoEventFormProps {
	closeModal(): void;
  onAddEvent(event: StudentifyEvent): void;
  goBack(): void;
}

