import { z } from "zod";
import { peopleMessages } from "../messages/people.messages";

export const addPeopleFormSchema = z.object({
  name: z
    .string({ invalid_type_error: peopleMessages.required })
    .min(1, { message: peopleMessages.required }),

  email: z.string({ invalid_type_error: peopleMessages.invalid }),
  phone: z.string({ invalid_type_error: peopleMessages.invalid }),
  cep: z.string({ invalid_type_error: peopleMessages.invalid }),
  state: z.string({ invalid_type_error: peopleMessages.invalid }),
  city: z.string({ invalid_type_error: peopleMessages.invalid }),
  address: z.string({ invalid_type_error: peopleMessages.invalid }),
  complement: z.string({ invalid_type_error: peopleMessages.invalid }),
  latitude: z.string({ invalid_type_error: peopleMessages.invalid }),
  longitude: z.string({ invalid_type_error: peopleMessages.invalid }),
});

export type AddPeopleFormData = z.infer<typeof addPeopleFormSchema>;
