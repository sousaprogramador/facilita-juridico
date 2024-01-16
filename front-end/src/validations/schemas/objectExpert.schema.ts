import { z } from "zod";
import { objectExpertMessages } from "../messages/objectExpert.messages";

export const addObjectExpertFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: objectExpertMessages.required })
    .min(1, { message: objectExpertMessages.required }),
});

export type AddObjectExpertFormData = z.infer<typeof addObjectExpertFormSchema>;
