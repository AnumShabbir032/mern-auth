import React from "react";
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-teal-800 text-3xl text-center font-semibold p-6">
        SignUp
      </h1>
      <form className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-teal-100 p-3  rounded-lg placeholder:text-teal-800"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-teal-100 p-3  rounded-lg placeholder:text-teal-800"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-teal-100 p-3  rounded-lg placeholder:text-teal-800"
        />
        <button className="bg-teal-800 text-teal-100 font-bold p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
