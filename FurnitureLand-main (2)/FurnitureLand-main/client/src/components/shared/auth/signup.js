import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  const SubmitData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          phoneNumber: phone,
          username: fname + " " + lname,
          location: address,
          gender: gender,
          role: role,
        }),
      });

      const responseData = await response.json();
      if (responseData.status === 200) {
        setEmail("");
        setPassword("");
        setFname("");
        setLname("");
        setPhone("");
        setAddress("");
        setRole("");
        setGender("");

        alert(responseData.message);
      } else {
        alert(responseData.message + ": " + responseData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <figure className="h-screen flex bg-gray-100 items-center	">
      <div className="m-auto bg-white rounded-3xl border border-primaryBorder shadow-default py-10 px-1">
        <form action="#" method="POST">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={fname}
                  placeholder="Firstname"
                  onChange={(e) => setFname(e.target.value)}
                  required
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastname"
                  value={lname}
                  name="lastname"
                  placeholder="Lastname"
                  onChange={(e) => setLname(e.target.value)}
                  required
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-md font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="Id"
                  name="email"
                  value={email}
                  placeholder="Gmail ID"
                  size="30"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Gender"
                  className="block text-md font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  onChange={(e) => setGender(e.target.value)}
                  className="mt-1 block border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="role"
                  className="block text-md font-medium text-gray-700"
                >
                  User Type
                </label>
                <select
                  id="role"
                  name="role"
                  autoComplete="role"
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1 block border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Set A Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-md font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Set A Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 "
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-md font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  value={phone}
                  name="phone"
                  placeholder="Contact Number"
                  maxlength="10"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-36 text-md pt-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-md font-medium text-gray-700"
                >
                  Address
                </label>
                <textarea
                  id="message"
                  rows="3"
                  onChange={(e) => setAddress(e.target.value)}
                  class="block mt-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-4 py-3  text-right sm:px-6">
            <button
              type="submit"
              onClick={SubmitData}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    </figure>
  );
}
