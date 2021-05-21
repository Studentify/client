import { Event } from 'views/Home/Home';


export function stringifyEventAddress(event: Event): string {
  const { location: { address }} = event;
  return `${address?.street} ${address?.houseNumber}, ${address?.town} ${address?.postalCode}`;
}