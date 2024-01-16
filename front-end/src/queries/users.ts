import { ENDPOINTS } from "~/constants/endpoints";
import { api } from "~/services/api";

export type User = {
  id: string;
  name: string;
  email: string;
  cpf?: string;
  birthdate?: string;
  phone?: string;
  role: string;
  profession?: string;
  occupation?: string;
  permissions?: {
    [key: string]: string[];
  };
};

export const listUsersQuery = async (
  search?: string,
  page = 1,
  limit = 10
): Promise<{ totalPages: number; data: User[] }> => {
  const { data } = await api.get(ENDPOINTS.users, {
    params: {
      page,
      limit,
      search: search ? search : null,
    },
  });

  const { count, rows } = data ?? {};
  const totalPages = count ? Math.ceil(count / limit) : 1;

  return { totalPages, data: rows };
};

type CreateOrUpdateUserDTO = {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  phone?: string;
  role: string;
  profession: string;
  occupation: string;
  password: string;
  confirmPassword: string;
  dashboard: string[];
  process: string[];
  users: string[];
  tasks: string[];
  schedule: string[];
  reports: string[];
  processNature: string[];
  processSituation: string[];
  processFinancialSituation: string[];
  people: string[];
  typeOfPeople: string[];
  keywords: string[];
  judicialDistrict: string[];
  objectExpert: string[];
  statusImpeachment: string[];
  history: string[];
  financial: string[];
  documents: string[];
};

export const upsertUserMutate = async (data: CreateOrUpdateUserDTO) => {
  const body = {
    name: data.name,
    email: data.email,
    cpf: data.cpf,
    birthdate: data.birthdate,
    phone: data.phone,
    role: data.role,
    profession: data.profession,
    occupation: data.occupation,
    password: data.password,
    permissions: {
      dashboard: data.dashboard || [],
      process: data.process || [],
      users: data.users || [],
      tasks: data.tasks || [],
      schedule: data.schedule || [],
      reports: data.reports || [],
      processSituation: data.processSituation || [],
      processFinancialSituation: data.processFinancialSituation || [],
      processNature: data.processNature || [],
      people: data.people || [],
      typeOfPeople: data.typeOfPeople || [],
      keywords: data.keywords || [],
      judicialDistrict: data.judicialDistrict || [],
      objectExpert: data.objectExpert || [],
      statusImpeachment: data.statusImpeachment || [],
      history: data.history || [],
      financial: data.financial || [],
      documents: data.documents || [],
    },
  };

  if (data.id) {
    return api.put(`${ENDPOINTS.users}/${data.id}`, body);
  }

  return api.post(ENDPOINTS.users, body);
};

export const deleteUserMutate = async (id: string) => {
  return api.delete(`${ENDPOINTS.users}/${id}`);
};

export const queryKeys = {
  list: "users-list",
};
