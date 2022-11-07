import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      data {
        id
        area
        country
        totalPopulation
        year
      }
      count
      message
    }
  }
`;

