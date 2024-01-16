import { z } from "zod";
import { importProcessMessages } from "../messages/importProcess.messages";

export const addProcessFormSchema = z.object({
  processNumber: z
    .string({ invalid_type_error: importProcessMessages.invalid })
    .min(25, { message: importProcessMessages.invalid }),
  internalCode: z
    .string({ invalid_type_error: importProcessMessages.invalid })
    .nullable(),
  /** Dados do processo */
  author: z
    .object({
      // polo ativo
      type: z.string(),
      people: z.string(),
    })
    .array(),
  defendants: z
    .object({
      // polo passivo
      type: z.string(),
      people: z.string(),
    })
    .array(),
  expertorAssistant: z
    .object({
      // perito/assistente
      type: z.string(),
      people: z.string(),
    })
    .array(),
  people: z
    .object({
      // pessoas
      type: z.string(),
      people: z.string(),
    })
    .array(),
  appointmentDate: z.string().optional(), // data da nomeacao
  judicialDistrictId: z.string().optional(), // comarca
  stickId: z.string().optional(), // vara
  processSituationId: z.string().optional(), // situacao do processo
  financialSituationProcessId: z.string().optional(), // situacao financeira do processo
  natureProcessId: z.string().optional(), // natureza do processo
  actionObjProcessId: z.string().optional(), // acao/obj pericia ou assistencia
  caseValue: z.string().nullable().optional(), // valor do processo
  honorariumPresented: z.string().nullable().optional(), // honorarios apre.
  arbitraryFee: z.string().nullable(), // honorarios arb.
  freeJustice: z.string().optional(), // justica gratuita
  acceptedAppointment: z.string().optional(), // aceitou nomeacao
  favorite: z.string().optional(),
  processUrl: z.string().optional(),
  password: z.string().optional(),
  obs: z.string().optional(),

  /** Dados da pericia ou assistencia */
  expertId: z.string().nullable().optional(),
  date: z.string().optional(), // data do laudo
  hour: z.string().optional(),
  local: z.string().optional(),

  /** Laudo */
  daysReports: z.string().nullable().optional(), // dias laudo
  workingDays: z.string().nullable().optional(), // dias corridos ou uteis
  deliveryForecast: z.string().optional(), // previsao
  deliveryReport: z.string().optional(), // entrega
  limitClarified: z.string().optional(), // limite esclarecimento
  clarifiedDelivery: z.string().optional(), // entrega esclarecimento

  /** Laudo */
  dateObjection: z.string().optional(), // data da impugnacao
  dayObjection: z.string().nullable().optional(), // dias impug
  workingDaysObjection: z.string().nullable().optional(), // dias corridos ou uteis
  challengeStatusId: z.string().optional(), // id do status da impugnacao
  deliveryForecastObjection: z.string().optional(), // previsao de entrega
  deliveryObjection: z.string().optional(), // entrega
  limitClarifiedObjection: z.string().optional(), // limite esclarecimento
  clarifiedDeliveryObjection: z.string().optional(), // entrega esclarecimento
});

export type AddProcessFormData = z.infer<typeof addProcessFormSchema>;
