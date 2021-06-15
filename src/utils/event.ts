export function stringifyEventAddress(event?: StudentifyEvent): string {
  if (!event) {
    return "";
  }
  
  const address = event.location.address;
  return `${address?.street} ${address?.houseNumber}, ${address?.town} ${address?.postalCode}`;
}