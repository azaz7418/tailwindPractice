import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./CountryProduct.css";


const CountryProduct = () => {
  const { name } = useParams();
  const getRandomMeal = async () => {
    const { data } = await axios.get(`/filter.php?a=${name}`);
    return data.meals;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["countryData"],
    queryFn:  getRandomMeal,
    staleTime: 60000,
  });
  //   console.log({ name, data });
  if (isLoading) {
    return <>Loading... </>;
  }
  if (isError) {
    return <>...Page Error...</>;
  }
  return (
    <div className="countryProducts">
      {data?.map((cp) => (
        <div className="cProduct" key={cp.idMeal}>
          <img src={cp.strMealThumb} alt="" />
          <h3>{cp.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default CountryProduct;
