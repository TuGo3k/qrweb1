import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

export const FoodDetail = ({ foods }) => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate(); // Hook for navigating back

  // Find the food item by ID
  const food = foods.find((item) => item.index === parseInt(id));

  if (!food) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <p>Food not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 text-xl font-medium mb-6 hover:text-red-500"
      >
        <FaArrowCircleLeft className="mr-2 text-red-600" size={24} /> БУЦАХ
      </button>

      {/* Food Details Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        {/* Image */}
        <img
          src={food.imgUrl}
          alt={food.title}
          className="rounded-lg w-full h-[300px] object-cover mb-4"
        />

        {/* Food Title */}
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-3">{food.title}</h1>

        {/* Price */}
        <p className="text-center text-2xl text-red-600 font-bold mb-3">{food.price}</p>

        {/* Description */}
        <p className="text-gray-600 text-center mb-4">
          Indulge in our delicious <strong>{food.title}</strong> made with the finest ingredients.
          Perfect for a quick bite or a hearty meal.
        </p>

        {/* QR Code Section (Optional)
        <div className="flex justify-center my-6">
          <img
            src="/qr-placeholder.png" // Replace with an actual QR Code if applicable
            alt="QR Code"
            className="w-[150px] h-[150px]"
          />
        </div> */}

        {/* Order or Add to Cart Button */}
        {/* <button className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-500 transition">
          Захиалах
        </button> */}
      </div>
    </div>
  );
};
