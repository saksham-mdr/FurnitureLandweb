import { useState, useContext, useEffect } from "react";

import { AuthContext } from "../../../context/auth-context";
import MyProfile from "./dashboard";
import Product from "./product";
import Bought from "./BoughtProduct";
import Add from "./addProduct";

export default function SellerNav() {
  const auth = useContext(AuthContext);
  const [view, setView] = useState("Dashboard");

  const [loadedData, setLoadedData] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await fetch(`http://localhost:5000/myprofile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        });

        const responseData = await response.json();
        setLoadedData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);

  const Dashboard = () => {
    setView("Dashboard");
  };

  const ViewProduct = () => {
    setView("ViewProduct");
  };
  const AddProduct = () => {
    setView("AddProduct");
  };
  const BoughtProduct = () => {
    setView("BoughtProduct");
  };
  const Logout = () => {
    auth.logout();
  };
  return (
    <div>
      <div className="flex w-full h-screen ">
        <div className="flex-col w-1/4 place-content-center mt-6 px-8">
          <nav>
            <span
              className="flex items-center place-content-center px-4 py-2 mt-5 mb-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400   "
              href="#"
            >
              
              <p className="text-xl ml-3 font-semibold text-blue-600">
                {loadedData?.username}
              </p>
              
            </span>
            
            <button
              className="flex items-center place-content-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 "
              onClick={Dashboard}
            >
              <span className="mx-4 font-medium ">Dashboard</span>
            </button>

            <button
              className="flex items-center place-content-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              onClick={ViewProduct}
            >
              <span className="mx-4 font-medium">View My Product</span>
            </button>

            <button
              className="flex items-center place-content-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              onClick={AddProduct}
            >
              <span className="mx-4 font-medium">Add Product</span>
            </button>

            <button
              className="flex items-center place-content-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              onClick={BoughtProduct}
            >
              <span className="mx-4 font-medium">Ordered Product</span>
            </button>
            <button
              className="flex items-center place-content-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 "
              onClick={Logout}
            >
              <span className="px-3 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-red-600 rounded-md  md:mx-2 md:w-auto">
                Logout
              </span>
            </button>
          </nav>
        </div>
        <div className="border-r"></div>
        <div className="flex-col w-full mt-6 ">
          {view === "Dashboard" && (
            <div>
              <MyProfile />
            </div>
          )}
          {view === "ViewProduct" && (
            <div>
              <Product />
            </div>
          )}
          {view === "AddProduct" && (
            <div>
              <Add />
            </div>
          )}
          {view === "BoughtProduct" && (
            <div>
              <Bought />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
