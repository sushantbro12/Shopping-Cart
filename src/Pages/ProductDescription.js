import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Components/CardContext";
import Header from "../Components/header";

const ProductDescription = () => {
  const { id } = useParams();
  const [desc, setDesc] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setDesc(json));
  }, [id]);

  if (!desc) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6 flex justify-center items-center min-h-screen border-2">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={desc.image}
              alt={desc.title}
              className="w-full h-auto max-w-full max-h-96 object-contain rounded-lg"
            />
          </div>

          <div className=" flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold border-b-2 mb-4">{desc.title}</h1>
            <div className="sm:w-11/12 flex flex-col sm:items-end m-2 ">
              <span className="text-2xl font-bold text-red-600 sm:mr-5 sm:mb-10">
                ${desc.price}
              </span>
              <button
                onClick={() => addToCart(desc)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mt-2 sm:mb-3">
                Add to Cart
              </button>
            </div>
            <div className="p-4 mb-6">
              <p className="text-gray-700">{desc.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
