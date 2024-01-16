import { formatter } from "./formatter.util";

const translateProcessField: { [key: string]: string } = {
  processNumber: "Número do processo alterado",
  internalCode: "Código interno alterada",
  author: "Polo ativo foi atualizado",
  defendants: "Polo passivo foi atualizado",
  expertorAssistant: "Perito/Assistente foi atualizado",
  people: "Pessoas foi atualizado",
  appointmentDate: "Data de nomeação alterado",
  password: "Senha do processo alterado",
  judicialDistrictId: "Comarca foi atualizado",
  stickId: "Vara foi atualizado",
  processSituationId: "Situação do processo foi atualizado",
  financialSituationProcessId: "Situação financeira do processo foi atualizado",
  natureProcessId: "Natureza do processo foi atualizado",
  actionObjProcessId:
    "ação/objeto da pericia ou assistencia do processo foi atualizado",
  honorariumPresented: "Honorario apresentado foi alterado",
  arbitraryFee: "Honorario arb. foi alterado",
  freeJustice: "Justiça gratuita foi alterado",
  acceptedAppointment: "Aceitou a nomeação foi alterado",
  processUrl: "URL do processo foi alterado",
  favorite: "Favorito foi alterado",
  obs: "Observação foi alterado",
  distributionDate: "Data de distribuição foi alterado",
  justiceSecret: "Segredo de justiça foi alterado",
  costs: "Custos foi alterado",
  date: "Data da pericia foi alterado",
  hour: "Hora foi alterado",
  local: "Lugar foi alterado",
  deliveryForecast: "Previsão de entrega do laudo foi alterado",
  deliveryReport: "Entrega do laudo foi alterado",
  limitClarified: "Data limite para esclarecimento foi alterado",
  clarifiedDelivery: "Data entrega do esclarecimento foi alterado",
  dateObjection: "Data da impugnação foi alterado",
  deliveryForecastObjection: "Previsão de entrega da impugnação foi alterado",
  deliveryObjection: "Data entrega da impugnação foi alterado",
  limitClarifiedObjection:
    "Data limite para esclarecimento da impugnação foi alterado",
  clarifiedDeliveryObjection:
    "Data Entrega do esclarecimento da impugnação foi alterado",
};

const translateTaskField: { [key: string]: string } = {
  title: "Título alterado",
  desc: "Descrição alterada",
  column: "A tarefa foi movida da coluna",
  responsible: "A tarefa foi atribuída",
  natureProcess: "Alteração da natureza do processo",
  process: "Alteração do processo",
  starting: "Alteração do status",
  finished: "Alteração do status",
  dueDate: "Data entrega alterou",
};

function makeProcessLog(before: any, after: any): Array<{ desc: string }> {
  const log: Array<{ desc: string }> = [];
  Object.keys(before).forEach((key) => {
    switch (key) {
      case "processNumber":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key]}`,
        });
        break;

      case "internalCode":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "author":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "defendants":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "expertorAssistant":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "people":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "judicialDistrictId":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "stickId":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "processSituationId":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "financialSituationProcessId":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "natureProcessId":
        log.push({
          desc: translateProcessField[key],
        });
        break;
      case "actionObjProcessId":
        log.push({
          desc: translateProcessField[key],
        });
        break;

      case "honorariumPresented":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "arbitraryFee":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "freeJustice":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;
      case "acceptedAppointment":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "processUrl":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "favorite":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "obs":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "password":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "justiceSecret":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "costs":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "hour":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "local":
        log.push({
          desc: `${translateProcessField[key]} de ${
            before[key] || "vazio"
          } para ${after[key].desc || "vazio"}`,
        });
        break;

      case "appointmentDate":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "distributionDate":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "date":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "deliveryForecast":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "deliveryReport":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "limitClarified":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "clarifiedDelivery":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "dateObjection":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "deliveryForecastObjection":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "deliveryObjection":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "limitClarifiedObjection":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;

      case "clarifiedDeliveryObjection":
        log.push({
          desc: `${translateProcessField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;
      default:
        break;
    }
  });

  return log;
}

function makeTaskLog(before: any, after: any): Array<{ desc: string }> {
  const log: Array<{ desc: string }> = [];
  Object.keys(before).forEach((key) => {
    switch (key) {
      case "title":
        log.push({
          desc: `${translateTaskField[key]} de ${before[key] || "vazio"} para ${
            after[key]
          }`,
        });
        break;

      case "desc":
        log.push({
          desc: `${translateTaskField[key]} de ${before[key] || "vazio"} para ${
            after[key].desc || "vazio"
          }`,
        });
        break;

      case "column":
        log.push({
          desc: `${translateTaskField[key]} de ${
            before[key]?.desc || "vazio"
          } para ${after[key]?.desc || "vazio"}`,
        });
        break;

      case "responsible":
        log.push({
          desc: `${translateTaskField[key]} de ${
            before[key]?.name || "nenhum responsável"
          } para ${after[key]?.name || "nenhum responsável"}`,
        });
        break;

      case "process":
        log.push({
          desc: `${translateTaskField[key]} de ${
            before[key]?.processNumber || "vazio"
          } para ${after[key]?.processNumber || "vazio"}`,
        });
        break;

      case "natureProcess":
        log.push({
          desc: `${translateTaskField[key]} de ${
            before[key]?.desc || "vazio"
          } para ${after[key]?.desc || "vazio"}`,
        });
        break;

      case "dueDate":
        log.push({
          desc: `${translateTaskField[key]} de ${
            formatter.date(before[key]) || "vazio"
          } para ${formatter.date(after[key]) || "vazio"}`,
        });
        break;
      case "starting":
        log.push({
          desc: `${translateTaskField[key]} de ${
            before[key] ? "Iniciado" : "Não iniciado"
          } para ${after[key] ? "Iniciado" : "Não iniciado"}`,
        });
        break;

      case "finished":
        log.push({
          desc: `${translateTaskField[key]} de ${
            before[key] ? "Finalizado" : "Não finalizado"
          } para ${after[key] ? "Finalizado" : "Não finalizado"}`,
        });
        break;
      default:
        break;
    }
  });

  return log;
}

export const toTranslateLogFields = (
  before: any,
  after: any,
  moduleName: string
) => {
  if (moduleName === "tasks") {
    return makeTaskLog(before, after);
  }

  return makeProcessLog(before, after);
};
