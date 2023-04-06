import { gql, DocumentNode } from "@apollo/client";
import { TSearchParams } from "@/types/commonTypes";

export const getQueryString = ({
  option,
}: {
  option: TSearchParams;
}): DocumentNode => {
  switch (option) {
    case "City":
      const queryByCity = gql`
        query getClinicsByCity($input: String!) {
          cityClinic(city: $input) {
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
      return queryByCity;
    case "State":
      const queryByState = gql`
        query getClinicsByState($input: String!) {
          stateClinic(state: $input) {
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
      return queryByState;

    case "ZIP":
      const queryByZip = gql`
        query getClinicsByZip($input: String!) {
          postalClinic(postal: $input) {
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
      return queryByZip;
    case "Clinic name":
      const queryByName = gql`
        query getClinicsByName($input: String!) {
          nameClinic(clinicName: $input) {
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
      return queryByName;
    case "Suburb":
      const queryBySuburb = gql`
        query getClinicsBySuburb($input: String!) {
          suburbClinic(suburb: $input) {
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
      return queryBySuburb;
  }
};
