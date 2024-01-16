import { z } from "zod";
import { processFinancialSituationMessages } from "../messages/processFinancialSituation.messages";

export const addProcessFinancialSituationFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: processFinancialSituationMessages.required })
    .min(1, { message: processFinancialSituationMessages.required }),
});

export type AddProcessFinancialSituationFormData = z.infer<
  typeof addProcessFinancialSituationFormSchema
>;
