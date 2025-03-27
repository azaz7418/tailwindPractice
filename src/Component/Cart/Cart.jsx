import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      {cartItems.map((item, index) => {
        return <div key={index}>
            <div className=" w-96 h-96  text-zinc-700 shadow-lg bg-gray-200 rounded-md p-5 align-middle text-center ">
            <img className=" m-auto rounded-md w-80 h-60" src={item.strMealThumb} alt="" />
            <h3 className=" text-xl mt-4 truncate">{item.strMeal}</h3>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Cart;
