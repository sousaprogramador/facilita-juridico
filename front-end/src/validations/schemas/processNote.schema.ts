import { z } from "zod";

export const addProcessNoteFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: "Descrição obrigatória" })
    .min(1, { message: "Descrição obrigatória" }),
});

export type AddProcessNoteFormData = z.infer<typeof addProcessNoteFormSchema>;
