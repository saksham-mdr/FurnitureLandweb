import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

export default function SignIn() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmtData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const responseData = await response.json();

      auth.login(responseData.user, responseData.token, responseData.role);
      
      if (responseData.status !== 200) {
        alert(responseData.message + ": " + responseData.error);
      }
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <figure className="h-screen flex bg-gray-100">
        <div className="w-full max-w-md m-auto bg-white rounded-3xl border border-primaryBorder shadow-default py-10 px-1">
          <div className="text-primary m-6">
            <div className="flex items-center mt-3 justify-center">
              <h3
                class="text-center text-lg text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
              >
                Sign In
              </h3>
            </div>
            <div class="mt-12">
              <form>
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </label>
                <input
                  name="email"
                  type="text"
                  onChange={handleEmailChange}
                  placeholder="email@email.com"
                  class={
                    "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-center"
                  }
                />
                <div class="mt-8">
                  <div class="flex justify-between items-center">
                    <div class="text-sm font-bold text-gray-700 tracking-wide ">
                      Password
                    </div>
                    <div>
                      <a
                        class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input
                    name="password"
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-center"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handlePasswordChange}
                  />
                </div>
              </form>
            </div>
            <div class="mt-10">
              <button
                class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg "
                onClick={SubmtData}
              >
                Log In
              </button>
            </div>
            <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              
                <Link to="signup" class="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign Up!</Link>
          
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
