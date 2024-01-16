export const startDate = (date: Date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  return date;
};
