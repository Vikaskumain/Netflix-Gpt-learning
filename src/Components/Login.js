import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [issignfrom, setSignform] = useState(true);

  const togglesignform = () => {
    setSignform(!issignfrom);
  };

  return (
    <div className="">
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimage"
        />
      </div>
      <form className="w-3/12 bg-black my-36 p-12 mx-auto  right-0 left-0 text-white absolute rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {issignfrom ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!issignfrom && (<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm"
        />)}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 rounded-sm "
        />
        <button className="bg-red-700 p-3 my-3 w-full rounded-lg">
          {issignfrom ? "Sign In " : "Sign Up"}
        </button>
        <input className="" type="checkbox" />
        <span className="ml-1">Remember Me</span>
        <h2>
          <span className="cursor-pointer " onClick={togglesignform}>
            {issignfrom
              ? "New to Netflix ? Sign Up Now  "
              : "Already Registered ? Sign In Now  "}
          </span>
        </h2>
        <p className="my-5 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot{" "}
          <span className="text-blue-600 cursor-pointer">Learn more...</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
