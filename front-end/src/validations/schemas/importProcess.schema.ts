import { z } from "zod";
import { importProcessMessages } from "../messages/importProcess.messages";

export const addImportProcessFormSchema = z.object({
  processNumber: z
    .string({ invalid_type_error: importProcessMessages.invalid })
    .min(25, { message: importProcessMessages.invalid })
    .refine((val) => val.slice(-8).slice(0, 4) === ".09.", {
      message:
        "No momento, a importação de processos aceita apenas os processos do TJGO",
    }),
  password: z
    .string({
      invalid_type_error: importProcessMessages.invalid_password,
    })
    .optional(),
});

export type AddImportProcessFormData = z.infer<
  typeof addImportProcessFormSchema
>;
