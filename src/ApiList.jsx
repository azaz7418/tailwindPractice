import axios from "axios";

export const getCategories = async () => {
    const { data } = await axios.get("/categories.php");
    const countryBaseFood = data.categories
    return countryBaseFood;
  };
export const getCarouselItem = async () => {
    const { data } = await axios.get("/random.php");
    const CarouselItem = data.meals
    return CarouselItem;
  };