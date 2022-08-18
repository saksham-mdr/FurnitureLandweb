import React from "react";
import { Link } from "react-router-dom";
const SERVER = "http://localhost:5000/";
export default function Product(props) {
  
  return (
    <Link
      key={props.data._id}
      to={`/furniture/${props.data._id}`}
      className="group"
    >
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={SERVER+props.data.img}
          alt={props.data.name}
          className="w-80 h-80 object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{props.data.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {props.data.price}
      </p>
      
    </Link>
  );
}
