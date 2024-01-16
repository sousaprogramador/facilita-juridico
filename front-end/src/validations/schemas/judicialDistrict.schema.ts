import { z } from "zod";
import { judicialDistrictMessages } from "../messages/judicialDistrict.messages";

export const addJudicialDistrictFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: judicialDistrictMessages.required })
    .min(1, { message: judicialDistrictMessages.required }),
});

export type AddJudicialDistrictFormData = z.infer<
  typeof addJudicialDistrictFormSchema
>;
