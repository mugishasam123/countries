import { useState, useEffect } from "react";
import FormInput from "./Input";
import useAddCountry from "../../hooks/useAddCountry";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useUpdateCountry from "../../hooks/useUpdateCountry";

const Form = ({ label, Country }) => {
  const [country, setCountry] = useState(null);
  const [area, setArea] = useState(null);
  const [totalPopulation, setTotalPopulation] = useState(null);
  const [year, setYear] = useState(null);
  const router = useRouter();

  const { addCountry } = useAddCountry();
  const { updateCountry } = useUpdateCountry();

  useEffect(() => {
    if (Country) {
      setCountry(Country.country);
      setArea(Country.area);
      setTotalPopulation(Country.totalPopulation);
      setYear(Country.year);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country || !area || !totalPopulation || !year) {
      toast.info("Please first fill all details");
      return "";
    }
    if (Country) {
      const countryData = {
        country: country,
        area: parseInt(area),
        totalPopulation: parseInt(totalPopulation),
        year: year,
        id: Country.id,
      };

      updateCountry(countryData).then(() => {
        router.push("/");
      });
      return "";
    }
    const countryData = {
      country: country,
      area: parseInt(area),
      totalPopulation: parseInt(totalPopulation),
      year: year,
    };

    addCountry(countryData).then(() => {
      router.push("/");
    });
  };

  return (
    <form
      action=""
      className="flex flex-col  font-semibold space-y-6 border px-8 py-8 shodow-lg bg-gray-50"
    >
      <div className="flex space-x-5 items-center">
        <label htmlFor="country" className="text-lg text-gray-800 w-[30%]">
          Country
        </label>
        <FormInput Value={country} onChange={setCountry} type="text" />
      </div>
      <div className="flex space-x-5 items-center">
        <label
          className="text-lg text-gray-800 w-[30%]"
          htmlFor="totalPopulation"
        >
          Total Population
        </label>
        <FormInput
          Value={totalPopulation}
          onChange={setTotalPopulation}
          type="number"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <label className="text-lg text-gray-800" htmlFor="area">
          Area (square kilometres)
        </label>
        <FormInput Value={area} onChange={setArea} type="number" />
      </div>
      <div className="flex space-x-5 items-center">
        <label className="text-lg text-gray-800" htmlFor="year" type="text">
          Year
        </label>
        <FormInput Value={year} onChange={setYear} />
      </div>
      <button
        className="bg-green-500 rounded-lg px-4 py-2 text-center w-32 text-white hover:bg-green-700"
        type="submit"
        onClick={handleSubmit}
      >
        {label}
      </button>
    </form>
  );
};

export default Form;
