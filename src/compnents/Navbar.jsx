import { useState, useEffect } from "react";

import { navLinks } from "../constants/index";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`padding-x py-8 absolute z-50 w-full  ${
        isSticky ? "sticky top-0 bg-white-400 shadow-md" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}> {link.label} </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block">
          <img src={hamburger} alt="hamburge" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
