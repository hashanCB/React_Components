// This SideNavbar component can be reused across different parts of your application.

import { useRef, useEffect } from "react";
import { useState } from "react";
import logo from "../assets/googlelogo.svg";
import NavLinks from "./NavLinks";

/**
 * SideNavbar component with a sliding navigation bar.
 * @param {Function} openbar - Function to open the slider bar, called from another component.
 */
const SideNavbar = ({ openbar }) => {
  const [nav, setNav] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNav(false);
        openbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <div
        className={
          nav
            ? " fixed  top-0 left-0 bottom-0 lg:left-0 p-0 w-[275px]  text-center bg-white shadow-lg  ease-in-out duration-1000 z-10 "
            : "ease-in-out w-[275px] duration-1000 fixed top-0 bottom-0 left-[-100%] z-10"
        }
      >
        <div className="  flex flex-col w-full mt-0 text-right p pt-5">
          <div className="flex w-full justify-start gap-1 items-center  ml-5 pb-5">
            <img src={logo} alt="google logo" />
            <p className="text-[22px] text-[#5f6368]"> Translate</p>
          </div>
          <NavLinks  />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
