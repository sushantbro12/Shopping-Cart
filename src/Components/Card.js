import React, { useContext } from "react";
import { CartContext } from "./CardContext";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-5/6 rounded overflow-hidden shadow-lg border m-4">
      <div className="flex items-center bg-gray-100 p-2 border-b">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-600 mr-2 hover:bg-gray-200 p-1 rounded flex items-center">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.5em"
            width="1.5em">
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </svg>
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="text-blue-600 text-sm hover:bg-gray-200 p-1 rounded hover:underline">
          Add to Cart
        </button>
      </div>

      <div className="flex justify-center p-4">
        <img
          className="w-60 h-60 object-contain "
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 text-blue-600 hover:underline cursor-pointer">
          {product.title}
        </div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
