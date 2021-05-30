export function stringifyEventAddress(event: StudentifyEvent): string {
  const address = event.location.address;
  return `${address?.street} ${address?.houseNumber}, ${address?.town} ${address?.postalCode}`;
}