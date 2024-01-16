export const moduleMapTranslate = {
  auth: "Autenticação",
  people: "Pessoas",
  users: "Usuários",
  typeOfPeople: "Tipo de Pessoa",
  keywords: "Palavras Chave",
  processSituations: "Situação do Processo",
  natureProcesses: "Natureza do Processo",
  financialSituationProcesses: "Situação Financeira do Processo",
  actionObjProcess: "Ação/Obj. da Perícia/Assis.",
  challengeStatuses: "Status de Impugnação",
  judicialDistricts: "Comarca",
  sticks: "Vara",
  processData: "Processo",
  notes: "Nota do Processo",
  columns: "Coluna para Tarefa",
  tasks: "Tarefa",
  financials: "Financeiro",
  accounts: "Conta Financeira",
  categories: "Categoria Financeiras",
  documents: "Documento",
} as const;

export type LogModule = keyof typeof moduleMapTranslate;
export type LogActionTitle =
  | "Criação"
  | "Edição"
  | "Exclusão"
  | "Autenticação"
  | "Importação";

const makeCRUDAction = (actTitle: LogActionTitle, module: string) => {
  if (actTitle === "Criação") return `Criar ${module}`;
  if (actTitle === "Edição") return `Editar ${module}`;
  if (actTitle === "Exclusão") return `Deletar ${module}`;
  if (actTitle === "Importação") return `Realizar a importação de um ${module}`;
  return actTitle;
};

export const defineAction = (
  module: LogModule,
  actionTitle: LogActionTitle
) => {
  const moduleDefineAction = {
    auth: (actTitle: LogActionTitle, module: string) => {
      if (actTitle === "Autenticação") return `${module} realizado com sucesso`;
      return `Tententou realizar a ${module} mas falhou`;
    },
    people: makeCRUDAction,
    users: makeCRUDAction,
    typeOfPeople: makeCRUDAction,
    keywords: makeCRUDAction,
    processSituations: makeCRUDAction,
    natureProcesses: makeCRUDAction,
    financialSituationProcesses: makeCRUDAction,
    actionObjProcess: makeCRUDAction,
    challengeStatuses: makeCRUDAction,
    judicialDistricts: makeCRUDAction,
    sticks: makeCRUDAction,
    processData: makeCRUDAction,
    notes: makeCRUDAction,
    columns: makeCRUDAction,
    tasks: makeCRUDAction,
    financials: (actTitle: LogActionTitle, module: string) => {
      if (actTitle === "Criação") return `Criar Movimentação para ${module}`;
      if (actTitle === "Edição") return `Editar Movimentação para ${module}`;
      if (actTitle === "Exclusão") return `Deletar Movimentação para ${module}`;
      return actTitle;
    },
    accounts: makeCRUDAction,
    categories: makeCRUDAction,
    documents: makeCRUDAction,
  };

  const moduleTranslated = moduleMapTranslate[module];
  if (!moduleTranslated) return "";
  return moduleDefineAction[module]?.(actionTitle, moduleTranslated) ?? "";
};
