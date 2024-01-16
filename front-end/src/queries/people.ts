import { ENDPOINTS } from "~/constants/endpoints";
import { api } from "~/services/api";

type People = {
  id: string;
  name: string;
  birthday?: string;
  businessEmail?: string;
  personalEmail?: string;
  busunessContact?: string;
  personalContact?: string;
  cep?: string;
  state?: string;
  city?: string;
  address?: string;
  type?: string;
  documents?: string;
  agency?: string;
  bankAccount?: string;
  pix?: string;
  obs?: string;
};

export const listPeopleQuery = async (
  page = 1,
  limit = 10,
  search?: string
): Promise<{ totalPages: number; data: People[] }> => {
  const { data } = await api.get(ENDPOINTS.people, {
    params: {
      page,
      limit,
      search,
    },
  });

  const { count, rows } = data ?? {};
  const totalPages = count ? Math.ceil(count / limit) : 1;

  return { totalPages, data: rows };
};

export const deletePeopleMutate = async (id: string) => {
  await api.delete(`${ENDPOINTS.people}/${id}`);
};

export type PeopleData = {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  cep?: string;
  state?: string;
  city?: string;
  address?: string;
  complement?: string
  latitude?: string
  longitude?: string
};

export const upsertPeopleMutate = async ({ id, ...data }: PeopleData) => {
  if (id) {
    return await api.put(`${ENDPOINTS.people}/${id}`, { ...data, cood_x: data.latitude, cood_y: data.longitude });
  }

  return await api.post(`${ENDPOINTS.people}`, { ...data, cood_x: data.latitude, cood_y: data.longitude });
};

export const queryKeys = {
  list: "people-list",
};
