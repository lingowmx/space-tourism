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
    setMenuClicked(false)
  }
  const activeStyle = "sm:underline sm:underline-offset-16 md:underline md:underline-offset-16 lg:underline lg:underline-offset-16"
  return (
    <nav>
      <NavLink to="/" className="absolute top-4 left-4">
        <img src={logo} alt="main-logo" />
      </NavLink>
      <ul
        className={`z-10 absolute w-72 h-48 flex flex-col place-content-around left-0 right-0 mx-auto top-32 bg-blue-950 place-items-center rounded-lg sm:flex sm:flex-row sm:max-w-80 sm:h-20 sm:absolute sm:top-0 sm:left-[320px] lg:bg-white/30 lg:backdrop-blur-4xl ${
          menuClicked ? "flex" : "hidden" 
        }`}
      >
        <li className="cursor-pointer">
          <NavLink to="/home"
          className={({isActive}) => (isActive ? activeStyle : undefined)}
          onClick={handleMenuClicked}>
            <div className="flex gap-1">
              <span className="sm:hidden">00</span>
              <h2>Home</h2>
            </div>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/destination"
          className={({isActive}) => (isActive ? activeStyle : undefined)}
          onClick={handleMenuClicked}>
            <div className="flex gap-1">
              <span className="sm:hidden">01</span>
              <h2>Destination</h2>
            </div>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/crew"
          className={({isActive}) => (isActive ? activeStyle : undefined)}
          onClick={handleMenuClicked}>
            <div className="flex gap-1">
              <span className="sm:hidden">02</span>
              <h2>Crew</h2>
            </div>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="/technology"
          className={({isActive}) => (isActive ? activeStyle : undefined)}
          onClick={handleMenuClicked}>
            <div className="flex gap-1">
              <span className="sm:hidden">04</span>
              <h2>Technoloy</h2>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className="absolute top-7 right-4 sm:hidden" onClick={handleClick}>
        <img src={burguerMenu} alt="burguer-menu" />
      </div>
    </nav>
  );
};
