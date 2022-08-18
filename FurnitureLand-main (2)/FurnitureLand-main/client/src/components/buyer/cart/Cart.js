import React, { Fragment, useState, useEffect } from "react";

import CartItemCard from "./CartItemCard";

const Cart = () => {
  const [loadedData, setLoadedData] = useState();

  const SubmtData = async (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData"));
    try {
      const response = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer+" + storedData.token,
        },
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        alert(responseData.message);
        window.location.href = "/MyOrders";
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteCartItems = async (id) => {
    try {
      const storedData = JSON.parse(localStorage.getItem("userData"));

      const response = await fetch(`http://localhost:5000/cart/${id}/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer+" + storedData.token,
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      setLoadedData(loadedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const storedData = JSON.parse(localStorage.getItem("userData"));

        const response = await fetch("http://localhost:5000/user/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        });
        const responseData = await response.json();
        console.log(responseData);
        setLoadedData(responseData.cart);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, [loadedData]);

  const getTotal = () => {
    return loadedData?.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.price;
    }, 0);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
        <Fragment>
          <div
            class="bg-green-100 rounded-lg py-5 px-6 space-y-1 m-10 text-base  mb-3"
            role="alert"
          >
            <div>
              {loadedData?.map((val, i) => {
                return (
                  <div>
                    <CartItemCard
                      item={val}
                      deleteCartItems={deleteCartItems}
                    />
                  </div>
                );
              })}
              {loadedData?.length === 0 && (
                <div class="py-5 text-center">No items in cart</div>
              )}
            </div>
          </div>
          {loadedData?.length !== 0 && (
            <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
              <div className="text-center  text-2xl">
                <p className="text-green-700">Gross Total</p>
                <p>{getTotal()}</p>
              </div>
              <div className="flex align-items-center justify-content-center">
                <button
                  onClick={SubmtData}
                  class="h-10 px-5 m-2 bg-green-400	transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-green-500"
                >
                  Check Out
                </button>
              </div>
            </div>
          )}
        </Fragment>
      </div>
    </div>
  );
};

export default Cart;
