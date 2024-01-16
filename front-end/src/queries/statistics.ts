import { ENDPOINTS } from "~/constants/endpoints";
import { api } from "~/services/api";

type ItemStats = {
  _id: string;
  total: number;
  value: {
    $numberDecimal: string;
  };
};

export type ChartData = {
  legend: string;
  label: string;
  total: number;
};


export type Statistics = {
  totalClients: string;
  rows: {
    name: string;
    latitude: string;
    longitude: string;
    distance: number;
  }[],
  sum: string,
  firstDelivery: string
};

export const listStatisticsQuery = async (): Promise<Statistics> => {
  const { data } = await api.get<Statistics>(ENDPOINTS.statistics);
  const firstDelivery = data.rows.length ? data.rows[0].name : "-";

  return ({ ...data, firstDelivery })
};

export const queryKeys = {
  list: "statistics-list",
};
