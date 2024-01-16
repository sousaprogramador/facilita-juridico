import { z } from "zod";
import { typeOfPersonMessages } from "../messages/typeOfPerson.messages";

export const addTypeOfPersonFormSchema = z.object({
  typeOfPerson: z
    .string({ invalid_type_error: typeOfPersonMessages.required })
    .min(1, { message: typeOfPersonMessages.required }),
});

export type AddTypeOfPersonFormData = z.infer<typeof addTypeOfPersonFormSchema>;
