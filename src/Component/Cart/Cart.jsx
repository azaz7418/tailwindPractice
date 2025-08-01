import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/feature/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
// import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const [numberOfProduct, setNumberOfProduct] = useState(1);
  const dispatch = useDispatch();

  // const incrementHandler = (idMeal) => {
  //   if (idMeal === cartItems.idMeal) {
  //     setNumberOfProduct(numberOfProduct + 1);
  //   }
  //   // dispatch(counter({idMeal, numberOfProduct}));
  // };
  // const dicrementHandler = (idMeal) => {
  //   if (idMeal === cartItems.idMeal) {
  //     setNumberOfProduct(numberOfProduct - 1);
  //   }
  //   // dispatch(counter({idMeal, numberOfProduct}));
  // };
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-primary-900">Shopping Cart</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-primary-50 shadow-md rounded-lg">
          <tr className="bg-primary-100 text-primary-800 text-sm">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Action</th>
          </tr>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 text-center">
                    <img src={item.strMealThumb} alt={item.strMeal} className="w-16 h-16 rounded-md mx-auto" />
                  </td>
                  <td className="py-2 px-4 text-center">{item.strMeal}</td>
                  <td className="py-2 px-4 text-center">${item.price}</td>
                  <td className="py-2 px-4 text-center grid grid-flow-col items-center justify-center gap-5">
                    <span
                    // onClick={() => incrementHandler(item.idMeal)}
                    >
                      <FaPlus />
                    </span>
                    <span>1</span>
                    <span
                    // onClick={() => dicrementHandler(item.idMeal)}
                    >
                      <FaMinus />
                    </span>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => removeHandler(item.idMeal)}
                      className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
