import { z } from "zod";
import { processSituationMessages } from "../messages/processSituation.messages";

export const addProcessSituationFormSchema = z.object({
  descSituation: z
    .string({ invalid_type_error: processSituationMessages.required })
    .min(1, { message: processSituationMessages.required }),
});

export type AddProcessSituationFormData = z.infer<
  typeof addProcessSituationFormSchema
>;
