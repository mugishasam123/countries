import CountryCard from "../common/CountryCard";
import useGetCountry from "../../hooks/useGetCountry";
import Button from "../common/Button";
import { useRouter } from "next/router";
const Details = () => {
  const router = useRouter();
  const id = router.query.id;

  const { loading, country } = useGetCountry(id);
  return (
    <>
      {loading ? (
        <span>loading..</span>
      ) : (
        <div className="flex flex-col space-y-6 items-center mt-12">
            <h1 className="text-3xl font-bold text-gray-800">Country Details</h1>
          <CountryCard country={country} show={true} />
          <Button label="Go Back" url="/" />
        </div>
      )}
    </>
  );
};

export default Details;
