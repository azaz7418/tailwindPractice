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
          <div className=" w-96 h-96  text-orange-600 hover:bg-orange-500  hover:text-slate-300 hover:pt-10... shadow-lg rounded-md p-5 align-middle text-center ">
            <img className=" m-auto rounded-md w-80 h-60" src={cp.strMealThumb} alt="" />
            <h3 className=" text-xl mt-4 truncate">{cp.strMeal}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryProduct;
