import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import "./search.css";
export default function Search() {
  const [query, setQuery] = useState("");
  const [loadedData, setLoadedData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/furniture");
        const responseData = await response.json();
        setLoadedData(responseData.furnitures);
        
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setQuery(searchWord);
    const newFilter = loadedData?.filter((value) => {
      return (
        value.name.toLowerCase().includes(query.toLowerCase()) ||
        value.catagory.toLowerCase().includes(query.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setQuery("");
  };
  console.log(filteredData);
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleFilter}
          class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
        />
        <div className="searchIcon absolute py-2 pl-3">
          {query.length !== 0 && (
            <div id="clearBtn" onClick={clearInput}>
              X
            </div>
          )}
        </div>
      </div>
      {filteredData?.length != 0 && (
        <div className="dataResult">
          {filteredData?.slice(0, 15).map((value, key) => {
            return (
              <Link className="dataItem" to={`/furniture/${value._id}`}>
                <p>{value.name} </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
