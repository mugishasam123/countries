import { gql } from "@apollo/client";


export const GET_COUNTRY = gql`
  query getCountry($countryId: ID!) {
    country(id: $countryId) {
      country {
        id
        area
        country
        totalPopulation
        year
      }
      message
    }
  }
`;