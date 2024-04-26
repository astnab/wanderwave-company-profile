import React from "react";
import { Link } from "react-router-dom"
import "../index.css";
import { LuPlane } from "react-icons/lu";

export default function Hero() {
  return (
    <>
      <div className="flex w-screen justify-center items-center">
        <img
          className="w-screen h-screen object-cover brightness-50 saturate-100 relative"
          src="https://images.unsplash.com/photo-1607867283465-d6792016b481?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />


        <div className=" absolute mt-10 text-white flex flex-col px-10 lg:px-60 gap-14 text-center justify-center items-center">

          <h1 className=" text-4xl lg:text-8xl font-black tracking-tight">
          Ride the wave of wander with WanderWave!
          </h1>

          <h1 className="font-semibold text-sm lg:text-3xl text-white tracking-tight">
          Experience life through travel and enjoyment, let's get started to become an explorer.
          </h1>
          
          <Link  to="/tours">
          <button className="px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
            Plan A Trip
          </button> 
          </Link>

        </div>
      </div>
    </>
  );
}
