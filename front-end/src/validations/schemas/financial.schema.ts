import { z } from "zod";
import { financialMessages } from "../messages/financial.messages";

export const addFinancialFormSchema = z.object({
  isPaid: z.boolean().optional(),
  category: z
    .string({ invalid_type_error: financialMessages.required })
    .min(1, { message: financialMessages.required }),
  expirationDate: z
    .string({ invalid_type_error: financialMessages.required })
    .min(1, { message: financialMessages.required }),
  movementType: z
    .string({ invalid_type_error: financialMessages.required })
    .min(1, { message: financialMessages.required }),
  process: z
    .string({ invalid_type_error: financialMessages.required })
    .optional()
    .nullable(),
  people: z
    .string({ invalid_type_error: financialMessages.required })
    .optional()
    .nullable(),
  total: z
    .string({ invalid_type_error: financialMessages.required })
    .min(1, { message: financialMessages.required }),
  discount: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),
  additions: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),
  financialAccount: z
    .string({ invalid_type_error: financialMessages.required })
    .optional()
    .nullable(),
  recepetPartial: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),
  emissionDate: z
    .string({ invalid_type_error: financialMessages.required })
    .optional()
    .nullable(),
  numberNoteFiscal: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),

  partialReceipt: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),
  porcentReceptValue: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),
  observation: z
    .string({ invalid_type_error: financialMessages.required })
    .optional(),
});

export type AddFinancialFormData = z.infer<typeof addFinancialFormSchema>;
