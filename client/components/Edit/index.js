import Form from "../common/Form";
import { useRouter } from "next/router";
import useGetCountry from "../../hooks/useGetCountry";

const Edit = () => {
  const router = useRouter();
  const id = router.query.id;
  const { loading, country } = useGetCountry(id);
  return (
    <>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div className="flex flex-col space-y-6 items-center mt-12">
          <h1 className="text-3xl font-bold text-gray-800">Edit Details</h1>
          <Form label="Update" Country={country} />
        </div>
      )}
    </>
  );
};

export default Edit;
