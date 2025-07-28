import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import "./Home.css";
import { Link } from "react-router-dom";
import { getCarouselItem } from "../../ApiList";

const getRandomMeal = async () => {
  const { data } = await axios.get("/list.php?a=list");
  return data.meals;
};

const Home = () => {

  // const queryClient = useQueryClient();
  
  const {
    data: countryName,
    // isLoading: countryLoading,
    // isError: countryError,
  } = useQuery({
    queryKey: ["country"],
    queryFn: getRandomMeal,
    staleTime: 60000,
  });
  const {
    data: carouselData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["random"],
    queryFn: getCarouselItem,
    refetchInterval: 20000,
  });

  // setInterval(() => {
  //   queryClient.invalidateQueries(['random'])
  // }, 10000);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Anything wrong...</>;
  }

  return (
    <div>
      {/* carousel */}
      <div className="">
        {carouselData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.strMealThumb})` }}
            className="bg-cover bg-no-repeat brightness-75"
          >
            <div className="w-full backdrop-blur-md px-10 py-11 flex justify-between items-center overflow-hidden">
              <div className="">
                <h1 className="text-4xl font-bold text-primary-800">{item.strMeal}</h1>
                <h2 className="text-primary-600 mt-2 ml-[2px]">
                  <span>{item.strArea} </span> || <span> {item.strCategory}</span>
                </h2>
                <div className="mt-2">
                  <Link className="bg-accent-500 hover:bg-accent-600 text-white rounded py-1 px-3 transition-colors" to={item.strYoutube}>
                    Watch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid pt-40 px-6 grid-cols-2 gap-8	">
        {countryName?.map((country, index) => (
          <div key={index}>
            <Link className="cn text-xl bg-zinc-600" to={`/countryProduct/${country.strArea}`}>
              <h2 className=" text-xl font-bold border-solid border-sky-600 border-4 text-center p-3 rounded-md">
                {country.strArea}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
