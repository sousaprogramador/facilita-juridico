import { z } from "zod";
import { userMessages } from "../messages/user.messages";

export const addUserFormSchema = z
  .object({
    name: z
      .string({ invalid_type_error: userMessages.required })
      .min(1, userMessages.invalid_email),
    email: z
      .string({ invalid_type_error: userMessages.invalid_type_email })
      .email(userMessages.invalid_email),
    password: z
      .string({
        invalid_type_error: userMessages.invalid_type_password,
      })
      .min(1, { message: userMessages.invalid_type_password }),

    confirmPassword: z
      .string({
        invalid_type_error: userMessages.invalid_type_password,
      })
      .min(1, { message: userMessages.invalid_type_password }),
    role: z
      .string({
        invalid_type_error: userMessages.required,
      })
      .min(1, userMessages.required),
    profession: z
      .string({
        invalid_type_error: userMessages.required,
      })
      .min(1, userMessages.required),
    occupation: z
      .string({
        invalid_type_error: userMessages.required,
      })
      .min(1, userMessages.required),
    phone: z
      .string({
        invalid_type_error: userMessages.required,
      })
      .refine((value) => !value || value.replace(/\D/g, "").length === 11, {
        message: userMessages.invalid_phone,
      }),
    cpf: z
      .string({
        invalid_type_error: userMessages.required,
      })
      .min(1, userMessages.required)
      .refine((value) => value && value.replace(/\D/g, "").length === 11, {
        message: userMessages.invalid_cpf,
      }),
    birthdate: z
      .string({
        invalid_type_error: userMessages.required,
      })
      .min(1, userMessages.required),
    dashboard: z.array(z.string()),
    process: z.array(z.string()),
    users: z.array(z.string()),
    tasks: z.array(z.string()),
    schedule: z.array(z.string()),
    reports: z.array(z.string()),
    processSituation: z.array(z.string()),
    processFinancialSituation: z.array(z.string()),
    processNature: z.array(z.string()),
    people: z.array(z.string()),
    typeOfPeople: z.array(z.string()),
    keywords: z.array(z.string()),
    judicialDistrict: z.array(z.string()),
    history: z.array(z.string()),
    financial: z.array(z.string()),
    documents: z.array(z.string()),
    objectExpert: z.array(z.string()),
    statusImpeachment: z.array(z.string()),
  })
  .superRefine((arg, ctx) => {
    if (
      arg.password &&
      arg.confirmPassword &&
      arg.password !== arg.confirmPassword
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: userMessages.invalid_match_password,
        path: ["confirmPassword"],
      });
    }
  });

export type AddUserFormData = z.infer<typeof addUserFormSchema>;
