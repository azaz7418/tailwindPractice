import axios from "axios";
import { useQuery } from "react-query";
import "./Home.css";
import { Link } from "react-router-dom";

const getRandomMeal = async () => {
  const { data } = await axios.get("/list.php?a=list");
  return data.meals;
};
const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["random"],
    queryFn: getRandomMeal,
    staleTime: 60000,
  });
  console.log(data);
  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Anything wrong...</>;
  }

  return (
    <div className="bg-zinc-600	">
      {data?.map((country) => (
        <div key={country.id}>
          <Link className="cn text-xl" to={`/countryProduct/${country.strArea}`}>
            <h2 className="">{country.strArea}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
