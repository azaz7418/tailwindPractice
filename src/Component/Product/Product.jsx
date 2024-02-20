import axios from "axios";
import { useQuery } from "react-query";

const getCategories = async () => {
  const { data } = await axios.get("/categories.php");
  return data.categories;
};

// check main.jsx, and this file//

const Product = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 60000,
  });

  

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    //ekhane categories.map dichili//
    <div>
      {data?.map((category) => (
        <div key={category?.idCategory}>
          <h2>{category?.strCategory}</h2>
        </div>
      ))}
    </div>
  );
};

export default Product;
