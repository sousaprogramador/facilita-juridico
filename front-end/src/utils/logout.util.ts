import { ACCESS_TOKEN, USER_LOGGED } from "~/constants/tokens";
import { cache } from "./cache.util";

export const logout = () => {
  cache.clearValue(ACCESS_TOKEN);
  cache.clearValue(USER_LOGGED);
};
