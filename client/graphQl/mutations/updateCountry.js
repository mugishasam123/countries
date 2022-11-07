import { gql } from "@apollo/client";


export const UPDATE_COUNTRY = gql`
mutation UpdateCountry($country: CountryUpdate) {
  updateCountry(country: $country) {
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