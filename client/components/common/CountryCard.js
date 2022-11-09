import Button from "./Button";
import useDeleteCountry from "../../hooks/useDeleteCountry";
import { useRouter } from "next/router";

const CountryCard = ({ country, show }) => {
  const router = useRouter();
  const { deleteCountry } = useDeleteCountry();
  const handleDelete = () => {
    deleteCountry(country.id).then(() => {
      router.reload();
    });
  };

  return (
    <div className=" flex flex-col justify-center items-center space-y-5 bg-gray-50 border p-12">
      <h3 className="text-xl text-gray-800 font-semibold">
        Country: {country.country}
      </h3>
      <span className="text-lg text-gray-800 font-semibold">
        Year: {country.year}
      </span>
      {show ? (
        <>
          <span className="text-lg text-gray-800 font-semibold">
            Area (square kilometres): {country.area}
          </span>
          <span className="text-lg text-gray-800 font-semibold">
            {" "}
            Total Population: {country.totalPopulation}
          </span>
        </>
      ) : (
        ""
      )}
      <div className="flex space-x-3">
        {!show && <Button label="Details" url={`details/${country.id}`} />}
        <Button label="Edit" url={`edit/${country.id}`} />
        <Button label="Delete" handleClick={handleDelete} />
      </div>
    </div>
  );
};

export default CountryCard;
