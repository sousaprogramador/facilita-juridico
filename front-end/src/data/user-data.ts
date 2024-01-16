export const rolesSelect = [
  { key: "user", label: "Usuário" },
  { key: "admin", label: "Administrador" },
];

export const professionSelect = [
  { key: "Assistente Técnico", label: "Assistente Técnico" },
  {
    key: "Auxiliar do assistente técnico",
    label: "Auxiliar do assistente técnico",
  },
  { key: "Perito e Assistente", label: "Perito e Assistente" },
  { key: "Perito", label: "Perito" },
  { key: "Auxiliar do Perito", label: "Auxiliar do Perito" },
  { key: "Outro", label: "Outro" },
];

export const occupationSelect = [
  { key: "Administração", label: "Administração" },
  { key: "Aeronáutica", label: "Aeronáutica" },
  {
    key: "Agronomia, Ambiental e Rural",
    label: "Agronomia, Ambiental e Rural",
  },
  { key: "Comunicação", label: "Comunicação" },
  { key: "Contábil", label: "Contábil" },
  { key: "Economia", label: "Economia" },
  { key: "Engenharia ambiental", label: "Engenharia ambiental" },
  { key: "Engenharia Civil", label: "Engenharia Civil" },
  { key: "Engenharia Mecânica", label: "Engenharia Mecânica" },
  { key: "Financeira", label: "Financeira" },
  { key: "Jurídica", label: "Jurídica" },
  { key: "Médica", label: "Médica" },
  { key: "Tecnologia", label: "Tecnologia" },
  { key: "Veterinária", label: "Veterinária" },
  { key: "Outra", label: "Outra" },
];

export const permissionsEmptyData = {
  dashboard: [],
  process: [],
  users: [],
  tasks: [],
  schedule: [],
  reports: [],
  processSituation: [],
  processFinancialSituation: [],
  processNature: [],
  people: [],
  typeOfPeople: [],
  keywords: [],
  judicialDistrict: [],
  history: [],
  financial: [],
  documents: [],
  objectExpert: [],
  statusImpeachment: [],
} as const;

export const permissionsFilledData = {
  dashboard: ["READ"],
  process: ["READ", "READ_WRITE"],
  users: ["READ", "READ_WRITE"],
  tasks: ["READ", "READ_WRITE"],
  schedule: ["READ"],
  reports: ["READ"],
  processSituation: ["READ", "READ_WRITE"],
  processFinancialSituation: ["READ", "READ_WRITE"],
  processNature: ["READ", "READ_WRITE"],
  people: ["READ", "READ_WRITE"],
  typeOfPeople: ["READ", "READ_WRITE"],
  keywords: ["READ", "READ_WRITE"],
  judicialDistrict: ["READ", "READ_WRITE"],
  history: ["READ"],
  financial: ["READ", "READ_WRITE"],
  documents: ["READ", "READ_WRITE"],
  objectExpert: ["READ", "READ_WRITE"],
  statusImpeachment: ["READ", "READ_WRITE"],
};

export type PermissionField = keyof typeof permissionsEmptyData;

export const permissionForm = [
  {
    name: "dashboard",
    label: "Dashboard",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
    ],
  },
  {
    name: "process",
    label: "Processos",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "users",
    label: "Usuários",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "tasks",
    label: "Tarefas",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "schedule",
    label: "Agenda",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
    ],
  },
  {
    name: "reports",
    label: "Relatório",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
    ],
  },
  {
    name: "processSituation",
    label: "Situação do Processo",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "processFinancialSituation",
    label: "Situação Financeira do Processo",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "processNature",
    label: "Natureza do Processo",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "people",
    label: "Pessoas",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "typeOfPeople",
    label: "Tipo de Pessoa",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "keywords",
    label: "Palavra Chave",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "judicialDistrict",
    label: "Comarca",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "objectExpert",
    label: "Ação/Objeto do Processo",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "statusImpeachment",
    label: "Status de Impugnação",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "history",
    label: "Histórico",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
    ],
  },
  {
    name: "financial",
    label: "Financeiro",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
  {
    name: "documents",
    label: "Documentos",
    options: [
      {
        key: "READ",
        label: "Apenas leitura",
      },
      {
        key: "READ_WRITE",
        label: "Leitura & Escrita",
      },
    ],
  },
];
