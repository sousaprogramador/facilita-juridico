import { z } from "zod";
import { taskMessages } from "../messages/task.messages";

export const addTaskFormSchema = z.object({
  title: z
    .string({ invalid_type_error: taskMessages.required })
    .min(1, { message: taskMessages.required }),
  desc: z
    .string({ invalid_type_error: taskMessages.required })
    .min(1, { message: taskMessages.required }),
  dueDate: z
    .string({ invalid_type_error: taskMessages.required })
    .min(1, { message: taskMessages.required }),

  process: z.string({ invalid_type_error: taskMessages.invalid }).nullable(),
  responsible: z
    .string({ invalid_type_error: taskMessages.invalid })
    .nullable(),
  natureProcess: z
    .string({ invalid_type_error: taskMessages.invalid })
    .nullable(),
  starting: z.boolean(),
  finished: z.boolean(),
});

export type AddTaskFormData = z.infer<typeof addTaskFormSchema>;
