import { z } from "zod";
import { financialCategoryMessages } from "../messages/financialCategory.messages";

export const addFinancialCategoryFormSchema = z.object({
  name: z
    .string({ invalid_type_error: financialCategoryMessages.required })
    .min(1, { message: financialCategoryMessages.required }),
});

export type AddFinancialCategoryFormData = z.infer<
  typeof addFinancialCategoryFormSchema
>;
