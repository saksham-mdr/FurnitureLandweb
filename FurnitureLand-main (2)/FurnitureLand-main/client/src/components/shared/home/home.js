import { Link } from "react-router-dom";
import Catalogue from "../../../image/Catalogue.svg";

import Catagory from "./catagory";
import Footer from "./footer";
import Reviews from "./reviews";
export default function Home() {
  return (
    <div>
     
      <div class="container px-6 py-2 mx-auto">
        <div class="items-center lg:flex text-center">
          <div class="w-full lg:w-1/2">
            <div>
              <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                Best Place To Choose Your Furniture
              </h1>
              <p class="my-3 text-gray-600 dark:text-gray-400">
                Shop here for Furniture to match every style and budget. Enjoy{" "}
                <b>Free Shipping</b> on most stuff, even big stuff.
              </p>
              <Link to="/shop" class="w-full  px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </Link>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full lg:max-w-2xl"
              src={Catalogue}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
      <Catagory />
      <Reviews />
      <Footer />
    </div>
  );
}
