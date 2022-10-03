import { WorkCollection } from "hooks/types";
import fetcherApi from "hooks/utils/fetch-api";
import getAllWorksQueries from "hooks/utils/queries/get-all-works";

export const getAllWorks = async () => {
  const res = await fetcherApi<WorkCollection>(getAllWorksQueries);

  return res.worksCollection.items;
};
