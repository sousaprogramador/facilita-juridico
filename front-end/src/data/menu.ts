import { PAGES } from "~/constants/pages";

export const menu = [
  {
    name: "Dashboard",
    as: "link",
    url: PAGES.dashboard,
    conditionActive: [PAGES.dashboard],
  },
  {
    name: "Cadastros",
    as: "dropdown",
    conditionActive: [
      PAGES.peopleList,
      // PAGES.kindPersonList,
      // PAGES.keywordList,
      // PAGES.judicialDistrict,
      // PAGES.processSituation,
      // PAGES.processNature,
      // PAGES.processFinancialSituation,
      // PAGES.objectExpert,
      // PAGES.statusImpeachments,
      // "/status-impeachments",
    ],
    children: [
      {
        name: "Clientes",
        as: "link",
        url: PAGES.peopleList,
        conditionActive: [PAGES.peopleList],
      },
      // {
      //   name: "Tipo Pessoas",
      //   as: "link",
      //   url: PAGES.kindPersonList,
      //   conditionActive: [PAGES.kindPersonList],
      // },
      // {
      //   name: "Palavra Chave",
      //   as: "link",
      //   url: PAGES.keywordList,
      //   conditionActive: [PAGES.keywordList],
      // },
      // {
      //   name: "Comarca e Vara",
      //   as: "link",
      //   url: PAGES.judicialDistrict,
      //   conditionActive: [PAGES.judicialDistrict],
      // },
      // {
      //   name: "Situação do Processo",
      //   as: "link",
      //   url: PAGES.processSituation,
      //   conditionActive: [PAGES.processSituation],
      // },
      // {
      //   name: "Natureza do Processo",
      //   as: "link",
      //   url: PAGES.processNature,
      //   conditionActive: [PAGES.processNature],
      // },
      // {
      //   name: "Situação Financeira do Processo",
      //   as: "link",
      //   url: PAGES.processFinancialSituation,
      //   conditionActive: [PAGES.processFinancialSituation],
      // },
      // {
      //   name: "Ação/Objeto do Processo",
      //   as: "link",
      //   url: PAGES.objectExpert,
      //   conditionActive: [PAGES.objectExpert],
      // },
      // {
      //   name: "Status de Impugnação",
      //   as: "link",
      //   url: PAGES.statusImpeachments,
      //   conditionActive: [PAGES.statusImpeachments],
      // },
    ],
  },
  // {
  //   name: "Processos",
  //   as: "dropdown",
  //   conditionActive: [
  //     PAGES.processList,
  //     PAGES.processIndicators,
  //     PAGES.processIndicatorsSituation,
  //     PAGES.processIndicatorsFinancial,
  //     PAGES.deadlinesList,
  //   ],
  //   children: [
  //     {
  //       name: "Processos",
  //       as: "link",
  //       url: PAGES.processList,
  //       conditionActive: [PAGES.processList],
  //     },
  //     {
  //       name: "Indicadores",
  //       as: "link",
  //       url: PAGES.processIndicatorsSituation,
  //       conditionActive: [
  //         PAGES.processIndicators,
  //         PAGES.processIndicatorsSituation,
  //         PAGES.processFinancialSituation,
  //       ],
  //     },
  //     {
  //       name: "Prazos",
  //       as: "link",
  //       url: PAGES.deadlinesList,
  //       conditionActive: [PAGES.deadlinesList],
  //     },
  //   ],
  // },
  // {
  //   name: "Agenda",
  //   as: "link",
  //   url: PAGES.schedule,
  //   conditionActive: [PAGES.schedule],
  // },
  // {
  //   name: "Tarefas",
  //   as: "link",
  //   url: PAGES.taskList,
  //   conditionActive: [PAGES.taskList],
  // },
  // {
  //   name: "Financeiro",
  //   as: "dropdown",
  //   conditionActive: [
  //     PAGES.financialList,
  //     PAGES.financialCategoryList,
  //     PAGES.financialAccountList,
  //   ],
  //   children: [
  //     {
  //       name: "Painel",
  //       as: "link",
  //       url: PAGES.financialList,
  //       conditionActive: [PAGES.financialList],
  //     },
  //     {
  //       name: "Categorias",
  //       as: "link",
  //       url: PAGES.financialCategoryList,
  //       conditionActive: [PAGES.financialCategoryList],
  //     },
  //     {
  //       name: "Contas",
  //       as: "link",
  //       url: PAGES.financialAccountList,
  //       conditionActive: [PAGES.financialAccountList],
  //     },
  //   ],
  // },
  // {
  //   name: "Relatórios",
  //   as: "link",
  //   url: PAGES.reportList,
  //   conditionActive: [PAGES.reportList],
  // },
  // {
  //   name: "Histórico",
  //   as: "link",
  //   url: PAGES.history,
  //   conditionActive: [PAGES.history],
  // },
  // {
  //   name: "Documentos",
  //   as: "link",
  //   url: PAGES.documentsList,
  //   conditionActive: [PAGES.documentsList, PAGES.createDocument],
  // },
] as const;
