import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center rounded-lg p-5 bg-[#131313] shadow-lg shadow-[#000000]">
        <h1 className="text-3xl mb-5">Sign up</h1>
        <input className="w-80 border border-[#202020] mb-2 p-2 rounded-lg" type="text" placeholder="First name" />
        <input className="w-80 border border-[#202020] mb-2 p-2 rounded-lg" type="text" placeholder="Last name" />
        <input className="w-80 border border-[#202020] mb-2 p-2 rounded-lg" type="text" placeholder="Username" />
        <input className="w-80 border border-[#202020] mb-2 p-2 rounded-lg" type="text" placeholder="Email" />
        <input className="w-80 border border-[#202020] mb-2 p-2 rounded-lg" type="password" placeholder="Password" />
        <input className="w-80 border border-[#202020] mb-2 p-2 rounded-lg" type="password" placeholder="Password Confirm" />
        <button className="bg-blue-600 w-full rounded-lg py-2 mt-3 hover:bg-blue-800 duration-300">Sign Up</button>
      </form>
    </div>
  );
};

export default page;
