import {DELETE_COUNTRY } from "../graphQl/mutations/deleteCountry";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";

const useDeleteCountry = () => {
  const [mutate, { loading, error, data }] = useMutation(DELETE_COUNTRY );

  const deleteCountry = async (id) => {
    return await toast.promise(mutate({variables:{deleteCountryId: id}}), {
      pending: "Deleting country...",
      success: "Country successfully Deleted",
      error: "failed to delete a country",
    });
  };

  return { deleteCountry, loading, error, data };
};

export default useDeleteCountry;
