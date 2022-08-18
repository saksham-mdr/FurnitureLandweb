import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const SERVER = "http://localhost:5000/";
const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div class="bg-green-100 rounded-lg pt-6 text-base" role="alert">
      <div class="grid grid-cols-6 gap-4">
        <div>
          <div>
            <img
              class="object-contain w-40 h-40"
              src={SERVER + item.img}
              alt={item.name}
            />
          </div>
        </div>

        <div class="col-span-3 inline-block text-green-700 align-middle">
          <div class="text-xl ">
            <p>{item.name}</p>
          </div>

          <div class="text-sm">
            <h5>{item.desc}</h5>
          </div>
        </div>
        <div class="col-span-1 text-red-600 text-lg">
          <div>
            <p>{`₹${item.price}`}</p>
          </div>
        </div>

        <div>
          <div>
            <button
              type="button"
              onClick={() => deleteCartItems(item._id)}
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1.5 m-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <DeleteForeverIcon sx={{ fontSize: 27 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
