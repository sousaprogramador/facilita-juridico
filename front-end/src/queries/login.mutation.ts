import { ENDPOINTS } from "~/constants/endpoints";
import { api } from "~/services/api";

type Credential = {
  email: string;
  password: string;
};

export const loginMutation = async (credential: Credential) => {
  const { data } = await api.post(
    ENDPOINTS.login,
    {
      email: credential.email,
      password: credential.password,
    }
  );
  return data;
};
