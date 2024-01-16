import { z } from "zod";
import { keywordMessages } from "../messages/keyword.messages";

export const addKeywordFormSchema = z.object({
  keyword: z
    .string({ invalid_type_error: keywordMessages.required })
    .min(1, { message: keywordMessages.required }),
});

export type AddKeywordFormData = z.infer<typeof addKeywordFormSchema>;
