import { api } from "~/services/api";
import { toast } from "./toast";

type Config = {
  valueField: string;
  labelField: string;
};

export type FilterType = {
  label: string;
  value: string;
  [key: string]: any;
};

export const loadDataEntityFilter = async (
  endpoint: string,
  entityName: string,
  config: Config,
  custom = {}
): Promise<FilterType[]> => {
  try {
    const { data } = await api.get(endpoint);
    if (data.rows) {
      return data.rows.map((d: any) => ({
        value: d[config.valueField],
        label: d[config.labelField],
        ...custom,
      }));
    }
    return data.map((d: any) => ({
      value: d[config.valueField],
      label: d[config.labelField],
      ...custom,
    }));
  } catch {
    toast(`Erro ao buscar dados do filtro de ${entityName}`, { type: "error" });
    return [];
  }
};
