import { useContext } from "react";
import { UserLoggedInContext } from "~/providers/user-logged-in-provider";

export const useUserLoggedIn = () => useContext(UserLoggedInContext);
