import { z } from "zod";
import { loginMessages } from "../messages/login.messages";

export const loginFormSchema = z.object({
  email: z
    .string({ invalid_type_error: loginMessages.invalid_type_email })
    .email(loginMessages.invalid_email),
  password: z
    .string({
      invalid_type_error: loginMessages.invalid_type_password,
    })
    .min(1, { message: loginMessages.invalid_type_password }),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
