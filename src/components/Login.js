import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleClick = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
          alt="backgroundimg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-3 w-full bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="my-2 p-3 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="my-2 p-3 w-full bg-gray-700"
        />
        <button className="my-4 p-4 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleClick} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
