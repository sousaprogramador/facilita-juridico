import { z } from "zod";
import { processNatureMessages } from "../messages/processNature.messages";

export const addProcessNatureFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: processNatureMessages.required })
    .min(1, { message: processNatureMessages.required }),
});

export type AddProcessNatureFormData = z.infer<
  typeof addProcessNatureFormSchema
>;
