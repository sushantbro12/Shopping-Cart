import React, { useContext } from "react";
import { SearchXIcon, Settings, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "./CardContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-purple-700 flex gap-10 justify-between text-white">
      <div className="flex gap-10">
        <h1 className="text-stone-300 text-xl hover:text-white p-3">
          Shopping Cart
        </h1>
        <Link to="/" className="p-3">
          <h2>Inventory</h2>
        </Link>

        <Link to="/cart" className="flex p-3">
          <ShoppingBag />

          <span className="ml-1">{cartItems.length}</span>
        </Link>
      </div>

      <div className="flex gap-10 p-2">
        <div className="flex bg-purple-600 items-center p-2">
          <input
            type="search"
            className="bg-transparent border-none outline-none"></input>

          <SearchXIcon />
        </div>
        <Settings className="mt-2" />
        <Link to="/login" className="p-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
