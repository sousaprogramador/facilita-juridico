export const endDate = (date: Date) => {
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);

  return date;
};
