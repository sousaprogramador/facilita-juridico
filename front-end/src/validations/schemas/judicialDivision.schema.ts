import { z } from "zod";
import { judicialDivisionMessages } from "../messages/judicialDivision.messages";

export const addJudicialDivisionFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: judicialDivisionMessages.required })
    .min(1, { message: judicialDivisionMessages.required }),
});

export type AddJudicialDivisionFormData = z.infer<
  typeof addJudicialDivisionFormSchema
>;
