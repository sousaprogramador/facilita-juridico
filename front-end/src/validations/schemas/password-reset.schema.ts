import { z } from "zod";
import { passwordResetMessages } from "../messages/passwordReset.messages";

export const passwordResetFormSchema = z.object({
  email: z
    .string({ invalid_type_error: passwordResetMessages.invalid_type_email })
    .email(passwordResetMessages.invalid_email),
});

export type PasswordResetFormData = z.infer<typeof passwordResetFormSchema>;
