import React, { useContext } from "react";
import { SearchXIcon, Settings2Icon, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "./CardContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="bg-purple-500 flex gap-10 justify-between p-3 text-white">
      <div className="flex gap-10">
        <h1 className="text-stone-300 text-xl hover:text-white">
          Shopping Cart
        </h1>
        <div>
          <h2>Inventory</h2>
        </div>

        <div className="flex">
          <ShoppingBag />

          <span className="ml-1">{cartItems.length}</span>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex bg-purple-400 items-center p-1">
          <input
            type="search"
            className="bg-transparent border-none outline-none"></input>

          <SearchXIcon />
        </div>

        <Settings2Icon />
        <Link to="/cart">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
