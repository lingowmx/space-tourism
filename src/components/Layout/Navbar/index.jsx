import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/shared/logo.svg";
import burguerMenu from "../../../assets/shared/icon-hamburger.svg";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };
  const handleMenuClicked = () => {
    setMenuClicked(false);
  };
  const activeStyle =
    "sm:underline sm:underline-offset-16";
  return (
    <nav className="relative">
      <NavLink to="/" className="absolute top-4 left-4">
        <img src={logo} alt="main-logo" />
      </NavLink>
      <div className="text-white md:border-b-2 lg:w-[432px] md:border-gray-500 absolute left-28 z-20 top-10 xl:left-48"></div>
      {/* opacidad del menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 transition-opacity ${
          menuClicked ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClick}
      ></div>
      <ul
        className={`z-10 absolute w-72 h-96 flex flex-col place-content-center left-0 right-0 mx-auto top-32 bg-white/30 place-items-center rounded-lg sm:bg-white/30 sm:backdrop-blur-4xl sm:rounded-bl-lg sm:rounded-none sm:flex sm:flex-row sm:w-auto md:w-[540px] sm:h-20 sm:absolute sm:top-0 sm:left-[320px] sm:mr-0 xl:text-xl xl:w-[700px] ${
          menuClicked ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col h-60 text-xl place-content-around sm:flex sm:flex-row sm:h-16 sm:items-center  sm:text-base sm:w-72 sm:place-content-between md:w-96">
          <li className="cursor-pointer hover:text-blue-500">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleMenuClicked}
            >
              <div className="flex gap-1">
                <span className="sm:hidden">00</span>
                <h2>Home</h2>
              </div>
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleMenuClicked}
            >
              <div className="flex gap-1">
                <span className="sm:hidden">01</span>
                <h2>Destination</h2>
              </div>
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleMenuClicked}
            >
              <div className="flex gap-1">
                <span className="sm:hidden">02</span>
                <h2>Crew</h2>
              </div>
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleMenuClicked}
            >
              <div className="flex gap-1">
                <span className="sm:hidden">04</span>
                <h2>Technoloy</h2>
              </div>
            </NavLink>
          </li>
        </div>
      </ul>
      <div className="absolute top-7 right-4 sm:hidden" onClick={handleClick}>
        <img src={burguerMenu} alt="burguer-menu" />
      </div>
    </nav>
  );
};
