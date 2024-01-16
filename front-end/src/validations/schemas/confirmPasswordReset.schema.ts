import { z } from "zod";
import { confirmPasswordResetMessages } from "../messages/confirmPasswordReset.messages";

export const confirmPasswordResetFormSchema = z
  .object({
    password: z
      .string({
        invalid_type_error: confirmPasswordResetMessages.invalid_type_password,
      })
      .min(1, { message: confirmPasswordResetMessages.invalid_type_password }),

    confirmPassword: z
      .string({
        invalid_type_error: confirmPasswordResetMessages.invalid_type_password,
      })
      .min(1, { message: confirmPasswordResetMessages.invalid_type_password }),
  })
  .superRefine((arg, ctx) => {
    if (
      arg.password &&
      arg.confirmPassword &&
      arg.password !== arg.confirmPassword
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: confirmPasswordResetMessages.invalid_match_password,
        path: ["confirmPassword"],
      });
    }
  });

export type ConfirmPasswordResetFormData = z.infer<
  typeof confirmPasswordResetFormSchema
>;
