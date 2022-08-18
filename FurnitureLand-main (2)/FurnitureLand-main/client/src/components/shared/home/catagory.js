import { Link } from "react-router-dom";
import bedroom from "../../../image/bedroom.jpg";
import kitchen from "../../../image/kitchen.jpg";
import living from "../../../image/livingroom.jpg";
import office from "../../../image/office.jpg";
import dining from "../../../image/dining.jpg";

export default function Catagory() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl  tracking-tight text-gray-900 text-center">
          Category
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 justify-center		">
          <div className="group relative">
            <Link to="/shop">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={bedroom}
                  alt="bedroom"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-center	">
                <div>
                  <h3 className="text-sm text-gray-700 text-center">
                    <p className="text-lg font-medium text-gray-900 ">
                      Bedroom
                    </p>
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link to="/shop">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={living}
                  alt="Living Room"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-center	">
                <div>
                  <h3 className="text-sm text-gray-700 text-center">
                    <p className="text-lg font-medium text-gray-900 ">
                      Living Room
                    </p>
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link to="/shop">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={kitchen}
                  alt="Kitchen"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-center	">
                <div>
                  <h3 className="text-sm text-gray-700 text-center">
                    <p className="text-lg font-medium text-gray-900 ">
                      Kitchen
                    </p>
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link to="/shop">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={dining}
                  alt="Dining"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-center	">
                <div>
                  <h3 className="text-sm text-gray-700 text-center">
                    <p className="text-lg font-medium text-gray-900 ">Dining</p>
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link to="/shop">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={office}
                  alt="Office"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-center	">
                <div>
                  <h3 className="text-sm text-gray-700 text-center">
                    <p className="text-lg font-medium text-gray-900 ">Office</p>
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
