import React, { useEffect, useState,useContext } from "react";
import { useParams,Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
const SERVER = "http://localhost:5000/";
export default function ProductDetail() {
  const productID = useParams().id;
  const [loadedData, setLoadedData] = useState();
  const auth = useContext(AuthContext);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/furniture/${productID}`
        );
        const responseData = await response.json();
        setLoadedData(responseData.furnitures);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  });

  const addToCart = async () => {
    try {
      const storedData = JSON.parse(localStorage.getItem("userData"));

      const response = await fetch(
        `http://localhost:5000/cart/${productID}/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        }
      );
      const responseData = await response.json();

      if (responseData.status === 200) {
        alert(responseData.message);
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key={loadedData?._id}>
              <div className="flex items-center">
                <Link
                  to="/shop"
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {loadedData?.catagory}
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <Link
                href=""
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {loadedData?.name}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={SERVER+loadedData?.img}
              alt={loadedData?.img}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={SERVER+loadedData?.img}
                alt={loadedData?.img}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={SERVER+loadedData?.img}
                alt={loadedData?.img}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={SERVER+loadedData?.img}
              alt={loadedData?.img}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* loadedData? info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {loadedData?.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">loadedData? information</h2>
            <p className="text-3xl text-gray-900"><b>Rs:</b> {loadedData?.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <p className="sr-only">4.2{loadedData?.average} out of 5 stars</p>
                <a
                  href={loadedData?.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {loadedData?.totalCount}4.2 Rating
                </a>
              </div>
            </div>
            {auth.isLoggedIn && (
            <form className="mt-10">
              <button
                type="submit"
                onClick={addToCart}
                className="mt-10 w-full bg-indigo-600  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
            </form>)}

            {!auth.isLoggedIn && (
            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 w-full opacity-50 cursor-not-allowed bg-indigo-600  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
            </form>)}
            


          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{loadedData?.desc}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{loadedData?.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
