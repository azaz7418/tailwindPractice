import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [theme, setTheme] = useState(true);
  const themeHandler = (value) => {
    if (value) {
      document.body.setAttribute("data-theme", "garden");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
    setTheme(value);
  };

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Profile", path: "/profile" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className=" bg-gradient-to-r from-sky-800 to-slate-800 flex items-center justify-between p-5 mt-auto shadow-md z-10 top-0 sticky w-full ">
      <div className=" font-bold text-slate-800 text-shadow text-4xl">Logo</div>
      <div className=" flex  gap-8 text-zinc-500 text-2xl">
        {navItem.map((item, index) => {
          return (
            <NavLink
            key={index}
              className={({ isActive }) =>
                ` hover:text-slate-300 transition duration-700 ease-in-out navItem p-0 hover:scale-y-1 hover:origin-bottom hover:-translate-y-2 ${
                  isActive ? "text-stone-300 scale-y-1" : " text-zinc-500"
                }  `
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          );
        })}

        <button onClick={() => themeHandler(!theme)} className="btn">
          Theme
        </button>
      </div>
    </div>
  );
};

export default Header;
