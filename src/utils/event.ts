import { Event } from 'views/Home/Home';


export function stringifyEventAddress(event: Event): string {
  const address = event.location.address;
  return `${address?.street} ${address?.houseNumber}, ${address?.town} ${address?.postalCode}`;
}