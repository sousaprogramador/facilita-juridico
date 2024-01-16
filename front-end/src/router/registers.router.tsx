import { PAGES } from "~/constants/pages";
import { PeopleListPage } from "~/pages/PeopleList";

export const registerRouters = [
  {
    path: PAGES.peopleList,
    element: (
      <PeopleListPage />
    ),
  }
];