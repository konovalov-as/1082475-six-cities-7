const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatDate(date) {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${MONTHS[monthIndex]} ${year}`;
}
