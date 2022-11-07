import { gql } from "@apollo/client";



export const DELETE_COUNTRY = gql`
mutation DeleteCountry($deleteCountryId: ID!) {
  deleteCountry(id: $deleteCountryId) {
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