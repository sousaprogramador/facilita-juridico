import { differenceInDays } from "./difference-in-days";

export const columnProcessColor = (date?: string) => {
  if (!date) return "bg-white";
  const days = differenceInDays(date);
  if (days <= 5) return "bg-red-200";
  if (days <= 15) return "bg-yellow-200";

  return "bg-green-200";
};
