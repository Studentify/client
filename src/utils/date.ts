export function isDateToday(dateISOString: string) {
  const lastMessageDate = new Date(dateISOString);
  const today = new Date();
  
  return (
    lastMessageDate.getFullYear() === today.getFullYear() &&
    lastMessageDate.getMonth() === today.getMonth() &&
    lastMessageDate.getDate() === today.getDate()
  );
}