import React, { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const SubmtData = async (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData"));
    const formData = new FormData();
    formData.append("image", image);
    formData.append("creatorID", storedData.userId);
    formData.append("name", name);
    formData.append("catagory", category);
    formData.append("desc", description);
    formData.append("location", location);
    formData.append("price", price);
    console.log(image);
    try {
      const response = await fetch("http://localhost:5000/addFurniture", {
        method: "POST",
        headers: {
          Authorization: "Bearer+" + storedData.token,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.status == 200) {
        alert(responseData.message);
        window.location.href = "/";
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="m-auto bg-white py-10 px-32">
        <form action="#" method="POST">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="Name"
                  className="block text-xl font-medium text-gray-700"
                >
                  Furniture Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xl pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Description"
                  className="block text-lg font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="Description"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="Location"
                  className="block text-xl font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="Location"
                  id="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-xl pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="Category"
                  name="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  class="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="0">Select Category:</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Living">Livingroom</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Dining">Dining</option>
                  <option value="Office">Office</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="Price"
                  className="block text-lg font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="Price"
                  id="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-36 text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="col-span-6 ">
                <label className="block text-lg font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3  text-right sm:px-6">
            <button
              onClick={SubmtData}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Furniture
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
