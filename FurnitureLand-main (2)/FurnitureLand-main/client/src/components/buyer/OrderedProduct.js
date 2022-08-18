import { useState, useEffect } from "react";
const SERVER = "http://localhost:5000/";
export default function Product() {
  const [loadedData, setLoadedData] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const storedData = JSON.parse(localStorage.getItem("userData"));

        const response = await fetch("http://localhost:5000/getOrders", {
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
  }, [loadedData]);
  const deleteCartItems = async (id) => {
    console.log(id);
    try {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      const response = await fetch(
        `http://localhost:5000/checkout/${id}/remove`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {loadedData?.map((product) => (
            <div>
              <div
                key={product._id}
                to={`/furniture/${product._id}`}
                className="group"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={SERVER + product.img}
                    alt={product.img}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <button
                className="px-3 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-900	 md:mx-2 md:w-auto"
                onClick={() => deleteCartItems(product._id)}
              >
               Cancel
              </button>
            </div>
          ))}
          {loadedData?.length === 0 && (
            <div>
              <div className="text-2xl text-center">No orders yet</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
