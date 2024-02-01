import { ENDPOINTS } from "~/constants/endpoints";
import { UserLoggedIn } from "~/providers/user-logged-in-provider";
import { api } from "~/services/api";

export const loadUserLoggedInQuery = async (): Promise<UserLoggedIn> => {
  try {
    const { data } = await api.post(`${ENDPOINTS.users}/auth`, { email: "bruno@gmail.com", password: "123456" });
    return data;
  } catch {
    return { authenticationFailure: true } as UserLoggedIn;
  }
};

export const queryKeys = {
  list: "user-logged-in",
};
