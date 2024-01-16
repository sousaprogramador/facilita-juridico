import { endDate } from "./endDate";
import { startDate } from "./startDate";

export const formatter = {
  date: (value: string | Date) => {
    if (!value) return "";
    if (new Date(value).toString() === "Invalid Date") return "";
    return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
  },

  dateFull: (value: string | Date) => {
    if (!value) return "";
    if (new Date(value).toString() === "Invalid Date") return "";
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",

      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date(value));
  },
  currency: (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      style: "currency",
    }).format(value);
  },
  dateForInput: (
    value?: string,
    config?: { toEnd?: boolean; toStart?: boolean }
  ) => {
    if (!value) return "";
    const date = new Date(value);
    if (config?.toEnd) {
      endDate(date);
    }

    if (config?.toStart) {
      startDate(date);
    }

    if (date.toTimeString() === "Invalid Date") return "";

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  },
  hourForInput: (value?: string) => {
    if (!value) return "";
    const date = new Date(value);

    if (date.toTimeString() === "Invalid Date") return "";

    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hour}:${minutes}`;
  },
};
