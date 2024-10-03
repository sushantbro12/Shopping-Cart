import React, { useContext, useState } from "react";
import { Menu, SearchXIcon, Settings, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "./CardContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-purple-700 flex flex-col sm:flex-row gap-4 sm:gap-10 justify-between text-white p-4">
      <div className="flex justify-between items-center sm:items-center w-full sm:w-auto">
        <Link to="/">
          <h1 className="text-stone-300 text-xl hover:text-white cursor-pointer mr-5">
            Shopping Cart
          </h1>
        </Link>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4 sm:gap-10">
          <Link to="/" className="p-2 sm:p-3 hover:bg-purple-900">
            <h1>Inventory</h1>
          </Link>

          <Link
            to="/cart"
            className=" hidden sm:flex items-center p-2 sm:p-3 hover:bg-purple-900">
            <ShoppingCart />
            <span className="ml-1">{cartItems.length}</span>
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <div className="flex items-center bg-purple-600 p-2 rounded w-full sm:w-auto">
          <input
            placeholder="Search"
            type="search"
            className="bg-transparent border-none outline-none text-white placeholder:text-white w-full sm:w-auto"
          />
          <SearchXIcon className="ml-2  hover:bg-purple-900" />
        </div>

        <Settings className="mt-2 sm:mt-0 cursor-pointer  hover:bg-purple-900" />

        <Link to="/login" className="p-2 text-lg hover:underline">
          Login
        </Link>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col mt-4 ">
          <Link to="/" className="p-2 hover:bg-purple-900 flex justify-center">
            Inventory
          </Link>
          <Link
            to="/cart"
            className="flex items-center  p-2 hover:bg-purple-900 justify-center">
            <ShoppingCart />
            <span className="ml-1">{cartItems.length}</span>
          </Link>
          <Link
            to="/login"
            className="p-2 hover:bg-purple-900 flex justify-center hover:underline">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
