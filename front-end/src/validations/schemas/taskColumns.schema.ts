import { z } from "zod";
import { taskColumnMessages } from "../messages/taskColumn.messages";

export const addTaskColumnFormSchema = z.object({
  desc: z
    .string({ invalid_type_error: taskColumnMessages.required })
    .min(1, { message: taskColumnMessages.required }),
});

export type AddTaskColumnFormData = z.infer<typeof addTaskColumnFormSchema>;
