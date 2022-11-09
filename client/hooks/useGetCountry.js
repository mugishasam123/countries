import { GET_COUNTRY } from "../graphQl/queries/getCountry";
import { useQuery } from "@apollo/react-hooks";

const useGetCountry = (id) => {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { countryId: id },
    fetchPolicy: "cache-and-network",
  });

  const country = data?.country?.country || [];

  return { loading, error, country };
};

export default useGetCountry;
