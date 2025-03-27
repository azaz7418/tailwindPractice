import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/feature/cartSlice";
// import "./CountryProduct.css";
const CountryProduct = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const getRandomMeal = async () => {
    const { data } = await axios.get(`/filter.php?a=${name}`);
    return data.meals;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["countryData", name],
    queryFn: getRandomMeal,
    staleTime: 5000,
  });
    console.log({ name, data });
  if (isLoading) {
    return <>Loading... </>;
  }
  if (isError) {
    return <>...Page Error...</>;
  }

//   useEffect(()=>{
//     if (data){
// const item= data.map((it))
//     }

//   }, [data])

  const handleAddToCart = (item) => {
    // Dispatch addToCart action with the item details
    dispatch(addToCart(item));
  }

  return (
    <div className="countryProducts  pt-10 px-6 grid grid-cols-3 gap-6 scroll-smooth ">
      {data?.map((cp) => (
        <div className=" " key={cp.idMeal}>
          <div className=" w-96 h-96  text-zinc-700 shadow-lg bg-gray-200 rounded-md p-5 align-middle text-center ">
            <img className=" m-auto rounded-md w-80 h-60" src={cp.strMealThumb} alt="" />
            <h3 className=" text-xl mt-4 truncate">{cp.strMeal}</h3>
            <button onClick={() => handleAddToCart(cp)} className="px-6 py-2 bg-blue-600 text-white font-semibold text-lg rounded-md">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryProduct;
