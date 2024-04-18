import React, {useState,} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_image/logo_kitab_dan.png";
import menu from "../../assets/logo_image/menu-img.png";
import cross from "../../assets/logo_image/menu-close.png";

function Header() {

   const [isMenuVisible, setIsMenuVisible] = useState(true);

   const toggleMenu = () => {
     const mobileMenu = document.getElementById("mobile-menu-2");
     mobileMenu.classList.toggle("hidden");
     setIsMenuVisible(!isMenuVisible);
   };



  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-green-300 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto ">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-2 h-20 border rounded-2xl "
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="login"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="signUp"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Create Account
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            {/* <button
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu-2");
                mobileMenu.classList.toggle("hidden");
              }}
            >
              <img src={menu} alt="Menu" />
            </button> */}
            <button
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuVisible ? (
                <img src={menu} alt="Menu" />
              ) : (
                <img src={cross} alt="Menu" />
              )}
            </button>
          </div>
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col justify-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to={"/vision"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Vision/Motto
                </NavLink>
              </li> */}

              <li>
                <NavLink
                  to={"/donors-list"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Proud Donors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/booksAvailable"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Books Available
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contactus"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Carousel/> */}
      {/* <Footer /> */}
    </header>
  );
}

export default Header;
