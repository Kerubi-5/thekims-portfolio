import { API_URL } from "hooks/keys";

const fetcherApi = async <T>(query: string, variables?: any): Promise<T> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CONTENT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await res.json();
  // ?? is checking if left hand expression is null or undefined -> if it is go with right expression
  // || is checking if left hand expression is null, undefined, "", 0, false
  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return data;
};

export default fetcherApi;
