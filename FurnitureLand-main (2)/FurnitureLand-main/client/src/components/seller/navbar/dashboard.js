
import { useState, useEffect } from "react";
import  Modal  from "../../shared/modal";

export default function MyProfile() {
  const [edit, setEdit] = useState(false);
  const [loadedData, setLoadedData] = useState();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const onEdit = (event) => {
    event.preventDefault();
    setEdit((prevState) => !prevState);
  };
  const SubmtData = async (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData"));

    try {
      const response = await fetch("http://localhost:5000/updateProfile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer+" + storedData.token,
        },
        body: JSON.stringify({
          username: username,
          phoneNumber: phone,
          location: address,
        }),
      });

      const responseData = await response.json();

      if (responseData.status === 200) {
        console.log(responseData.message);
        setEdit(false)
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
     
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const sendRequest = async () => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await fetch(`http://localhost:5000/myprofile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        });

        const responseData = await response.json();
        setUsername(responseData.username);
        setPhone(responseData.phoneNumber);
        setAddress(responseData.location);

        setLoadedData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);

  return (
    
    <div class="max-w-2xl relative mx-auto pt-4 pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 font-sans">
      <Modal/>
      <div className="bg-white shadow  sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-2xl leading-6 font-semibold ">My Details</h3>
          <p className="mt-1 max-w-2xl text-lg text-gray-500">
            Personal details and Information.
          </p>
        </div>

        <div className="border-t border-gray-200">
          <div class="flex place-content-end py-2 -mx-1  md:mx-0">
            <button
              class="inline-flex items-center mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              onClick={onEdit}
            >
              Edit
            </button>
          </div>
          <div class="flex w-full justify-center">
            <img
              class="h-48 w-48 rounded-full mt-6 mb-2"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          {edit && (
            <div class="flex w-full justify-center">
              <button
                type="button"
                className="mb-4 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                Change
              </button>
            </div>
          )}

          <dl>
            <div className="bg-slate-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-semibold text-center">Email</dt>
              <dd className="mt-1 text-center text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {loadedData?.email}
              </dd>
            </div>
            <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-semibold text-center">Full Name</dt>
              <dd className="mt-1 text-center text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {!edit && <div>{username}</div>}

                {edit && (
                  <input
                    name="text"
                    class="w-80 text-xl text-center border-b border-slate-300 focus:outline-none focus:border-indigo-500 "
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                )}
              </dd>
            </div>
            <div className="bg-slate-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-semibold text-center">Gender</dt>
              <dd className="mt-1 text-center text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {loadedData?.gender}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-semibold text-center">User Type</dt>
              <dd className="mt-1 text-center text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                <div>{loadedData?.role}</div>
              </dd>
            </div>
            <div className="bg-slate-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-semibold text-center">
                Phone Number
              </dt>
              <dd className="mt-1 text-center text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {!edit && <div>{phone}</div>}
                {edit && (
                  <input
                    name="text"
                    class="w-80 text-xl text-center  bg-slate-300 border-b border-white focus:outline-none focus:border-indigo-500 "
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                )}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-semibold text-center">
                Delivery Address
              </dt>
              <dd className="mt-1 text-center text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {!edit && <div> {address}</div>}
                {edit && (
                  <textarea
                    name="text"
                    class="w-80 text-xl text-center  border-b border-slate-300 focus:outline-none focus:border-indigo-500 "
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                )}
              </dd>
            </div>
          </dl>
          {edit && (
            <div class="flex place-content-center py-2 -mx-1  md:mx-0">
              <button
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={SubmtData}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
