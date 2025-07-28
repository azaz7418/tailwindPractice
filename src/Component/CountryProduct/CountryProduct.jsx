import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/feature/cartSlice";
import { Modal, Button, Spin, message } from "antd";
import { useState } from "react";
import { PlayCircleOutlined } from '@ant-design/icons';

const CountryProduct = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const getRandomMeal = async () => {
    const { data } = await axios.get(`/filter.php?a=${name}`);
    return data.meals;
  };

  const getMealDetails = async (id) => {
    try {
      setIsLoadingDetails(true);
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (data.meals && data.meals[0]) {
        setSelectedMeal(data.meals[0]);
        setIsModalOpen(true);
      } else {
        message.error('Failed to load meal details');
      }
    } catch (error) {
      message.error('Error loading meal details');
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["countryData", name],
    queryFn: getRandomMeal,
    staleTime: 5000,
  });

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    message.success({
      content: `${item.strMeal} has been added to your cart`,
      className: 'custom-message',
      style: {
        marginTop: '20vh',
      },
      duration: 2,
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div className="countryProducts pt-10 px-6 grid grid-cols-3 gap-6 scroll-smooth">
        {data?.map((cp) => (
          <div className="" key={cp.idMeal}>
            <div className="w-96 h-96 text-primary-700 shadow-lg bg-primary-50 rounded-md p-5 align-middle text-center hover:bg-primary-100 transition-colors">
              <img 
                className="m-auto rounded-md w-80 h-60 cursor-pointer" 
                src={cp.strMealThumb} 
                alt={cp.strMeal} 
                onClick={() => getMealDetails(cp.idMeal)}
              />
              <h3 className="text-xl mt-4 truncate text-primary-800">{cp.strMeal}</h3>
              <button
                className="px-6 py-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg rounded-md transition-colors"
                onClick={() => handleAddToCart(cp)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title={selectedMeal?.strMeal}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button 
            key="watch" 
            type="primary" 
            danger
            icon={<PlayCircleOutlined />}
            onClick={() => window.open(selectedMeal?.strYoutube, '_blank')}
            disabled={!selectedMeal?.strYoutube}
          >
            Watch Video
          </Button>,
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
          <Button
            key="addToCart"
            // type="primary"
            className="bg-secondary-500! hover:bg-secondary-600! text-white! font-semibold! text-lg! rounded-md! transition-colors!"
            onClick={() => {
              handleAddToCart(selectedMeal);
              setIsModalOpen(false);
            }}
          >
            Add to Cart
          </Button>,
        ]}
        width={800}
      >
        {isLoadingDetails ? (
          <div className="flex justify-center py-8">
            <Spin size="large" />
          </div>
        ) : selectedMeal ? (
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={selectedMeal.strMealThumb} 
                alt={selectedMeal.strMeal} 
                className="w-full h-64 object-cover rounded-lg"
              />
              {selectedMeal.strYoutube && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
                  <Button 
                    type="primary" 
                    danger 
                    icon={<PlayCircleOutlined />}
                    size="large"
                    onClick={() => window.open(selectedMeal.strYoutube, '_blank')}
                  >
                    Watch Video
                  </Button>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Category: {selectedMeal.strCategory}</h3>
              <h3 className="text-lg font-semibold">Area: {selectedMeal.strArea}</h3>
              <div>
                <h3 className="text-lg font-semibold">Instructions:</h3>
                <p className="text-gray-600">{selectedMeal.strInstructions}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ingredients:</h3>
                <ul className="list-disc pl-5">
                  {Array.from({ length: 20 }, (_, i) => i + 1)
                    .filter(i => selectedMeal[`strIngredient${i}`])
                    .map(i => (
                      <li key={i}>
                        {selectedMeal[`strIngredient${i}`]} - {selectedMeal[`strMeasure${i}`]}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500">
            No meal details available
          </div>
        )}
      </Modal>

      <style jsx>{`
        .custom-message {
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default CountryProduct;
