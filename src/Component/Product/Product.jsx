import { useQuery } from "react-query";
import { getCategories } from "../../ApiList";



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
    <div className="pt-40 px-6">
      {data?.map((category) => (
        <div key={category?.idCategory}>
          <h2>{category?.strCategory}</h2>
        </div>
      ))}
    </div>
  );
};

export default Product;
