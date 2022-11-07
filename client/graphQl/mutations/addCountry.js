import { gql } from "@apollo/client";

export const ADD_COUNTRY = gql`
  mutation AddCountry($country: CountryInput) {
    addCountry(country: $country) {
      message
      country {
        id
        area
        country
        totalPopulation
        year
      }
    }
  }
`;

