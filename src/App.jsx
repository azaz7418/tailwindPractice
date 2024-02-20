import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "./Component/LayOut/LayOut";
import Product from "./Component/Product/Product";
import Home from "./Component/Home/Home";
import CountryProduct from "./Component/CountryProduct/CountryProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/product",
          element: <Product></Product>,
        },
        {
          path: "/profile",
          element: <div> This is profile</div>,
        },
        {
          path: "/countryProduct/:name",
          element: <CountryProduct></CountryProduct>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
