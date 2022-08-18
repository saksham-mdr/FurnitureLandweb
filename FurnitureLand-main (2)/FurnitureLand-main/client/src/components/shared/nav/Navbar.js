import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth-context";

import logo from "../../../image/furnitureland.png";

import { Link } from "react-router-dom";
import "./Navbar";
import Search from "./search";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const Logout = () => {
    auth.logout();
  };

  return (
    <nav class="bg-white shadow dark:bg-gray-800 pt-4 ">
      <div class="container px-6 py-3 mx-auto">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <div class="flex items-center ">
              <Link
                class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
                <img
                  class="inline"
                  width="250px"
                  src={logo}
                  alt="FurnitureLand"
                />
              </Link>

              <div class="hidden mx-10 md:block">
                <div class="absolute">
                  <Search />
                </div>
              </div>
            </div>

            <div class="flex md:hidden">
              <button
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="items-center md:flex">
            <div class="flex flex-col lg:flex-row lg:mx-6">
              <Link
                class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                to="/"
              >
                Home
              </Link>
              <Link
                class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0 "
                to="/shop"
              >
                Shop
              </Link>
              {auth.isLoggedIn && (
                <span>
                  <Link
                    class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                    to="/MyProfile"
                  >
                    Profile
                  </Link>
                  <Link
                    class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                    to="/MyCart"
                  >
                    MyCart
                  </Link>
                  <Link
                    class="my-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"
                    to="/MyOrders"
                  >
                    MyOrders
                  </Link>
                </span>
              )}

              {auth.isLoggedIn && (
                <span>
                  <Link
                    class="w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-red-900	 md:mx-2 md:w-auto"
                    onClick={Logout}
                  >
                    Logout
                  </Link>
                </span>
              )}
              {!auth.isLoggedIn && (
                <span>
                  <Link
                    class=" w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    class=" w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                    to="/signup"
                  >
                    Register
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
