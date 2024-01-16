import { z } from "zod";
import { financialAccountMessages } from "../messages/financialAccount.messages";

export const addFinancialAccountFormSchema = z.object({
  name: z
    .string({ invalid_type_error: financialAccountMessages.required })
    .min(1, { message: financialAccountMessages.required }),
});

export type AddFinancialAccountFormData = z.infer<
  typeof addFinancialAccountFormSchema
>;
