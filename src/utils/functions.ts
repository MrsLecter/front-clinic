import { gql, DocumentNode } from "@apollo/client";
import { TQueryOptions, TSearchParams } from "@/types/commonTypes";

export const getQueryOption = (option: TSearchParams): TQueryOptions => {
  const optionShorted = option ? option.substring(0, 6) : "";

  switch (optionShorted) {
    case "City":
      return "city";
    case "Clinic":
      return "clinicName";
    case "State":
      return "state";
    case "Suburb":
      return "suburb";
    case "ZIP":
      return "postal";
    default:
      return "city";
  }
};

export const getQueryString = (option: TQueryOptions): DocumentNode => {
  return gql`
    query getClinics($input: String!) {
      findClinic(searchField: $input, searchType: ${option}) {
        clinicName
        adress
        aboutClinic
        zip
        email
        suburb
        state
        city
        website
        phone
        lat
        lng
      }
    }
  `;
};

export const getSearchParamsObject = (
  querySring: string
): { [key: string]: string } => {
  const paramsArr = querySring.substring(2).split("&");
  const paramsObj: { [key: string]: string } = {};

  for (let pair of paramsArr) {
    const [key, value] = pair.split("=");
    paramsObj[key] = value;
  }

  return paramsObj;
};
