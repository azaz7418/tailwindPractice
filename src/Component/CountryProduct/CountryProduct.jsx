import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// import "./CountryProduct.css";
const CountryProduct = () => {
  const { name } = useParams();
  const getRandomMeal = async () => {
    const { data } = await axios.get(`/filter.php?a=${name}`);
    return data.meals;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["countryData", name],
    queryFn: getRandomMeal,
    staleTime: 5000,
  });
  //   console.log({ name, data });
  if (isLoading) {
    return <>Loading... </>;
  }
  if (isError) {
    return <>...Page Error...</>;
  }
  return (
    <div className="countryProducts  pt-40 px-6 grid grid-cols-3 gap-6 ">
      {data?.map((cp) => (
        <div className=" " key={cp.idMeal}>
          <div className=" w-96 h-96  text-zinc-700 shadow-lg bg-gray-200 rounded-md p-5 align-middle text-center ">
            <img className=" m-auto rounded-md w-80 h-60" src={cp.strMealThumb} alt="" />
            <h3 className=" text-xl mt-4 truncate">{cp.strMeal}</h3>
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-lg rounded-md">Add Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryProduct;
