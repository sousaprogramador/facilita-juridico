import { z } from "zod";
import { statusImpeachmentsMessages } from "../messages/statusImpeachment.messages";

export const addStatusImpeachmentFormSchema = z.object({
  name: z
    .string({ invalid_type_error: statusImpeachmentsMessages.required })
    .min(1, { message: statusImpeachmentsMessages.required }),
});

export type AddStatusImpeachmentsFormData = z.infer<
  typeof addStatusImpeachmentFormSchema
>;
