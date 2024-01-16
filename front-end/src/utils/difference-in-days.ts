export function differenceInDays(date: string): number {
  const current = Date.now();
  const compareDate = new Date(date).getTime();
  const difference = current - compareDate;
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  if (days < 0) {
    return 0;
  } else {
    return days;
  }
}
