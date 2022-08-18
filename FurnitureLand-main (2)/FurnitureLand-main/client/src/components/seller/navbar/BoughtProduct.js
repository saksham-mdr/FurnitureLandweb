import { useState, useEffect } from "react";

const SERVER = "http://localhost:5000/";
export default function Product() {
  const [loadedData, setLoadedData] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await fetch(`http://localhost:5000/tobedilivered`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        });

        const responseData = await response.json();
        console.log(responseData);
        setLoadedData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
    console.log(loadedData);
  }, []);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {loadedData?.map((product) => (
            <div
              key={product._id}
              className="group"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={SERVER+product.img}
                  alt={product.name}
                  className="w-80 h-80 object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
          {loadedData?.length === 0 && (
            <div className="text-2xl">No orders yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
