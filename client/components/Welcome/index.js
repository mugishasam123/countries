import Button from "../common/Button";
import useGetCountries from "../../hooks/useGetCountries";
import CountryCard from "../common/CountryCard";

const Welcome = () => {
  const { loading, err, countries, count } = useGetCountries();

  return (
    <>
      {loading ? (
        <span>loading..</span>
      ) : (
        <div className="flex flex-col mt-5 p-2">
          <header className="flex justify-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Country Statistics
            </h1>
          </header>
          <div className="flex justify-end mr-44">
            <Button label="Add" url="add" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {countries.length == 0 ? (
              <span className="text-xl text-gray-600">
                No Statistics available
              </span>
            ) : (
              countries.map((country) => (
                <CountryCard key={country.id} country={country} show={false} />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
