import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { LuPlane } from "react-icons/lu";
import { PiAirplaneTiltFill } from "react-icons/pi";

export default function Hero() {
  return (
    <>
      <div className="flex w-screen justify-center items-center">
        {/* <img
          className="w-screen h-screen object-cover brightness-50 saturate-100 relative"
          src="https://images.unsplash.com/photo-1607867283465-d6792016b481?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
        <img
          className="w-screen h-screen object-cover brightness-70 saturate-80 relative"
          src="https://i.imgur.com/DX9GOjC.jpeg"
          alt=""
        />

        <div className=" absolute mt-10 text-zinc-800 flex flex-col px-10 lg:px-60 gap-6 lg:gap-10 text-center justify-center items-center lg:mb-48">
          <div className="text-4xl lg:text-6xl font-semibold tracking-tighter flex flex-col gap-4 ">
            <div>Ride the wave of wander</div>
            <div>with WanderWave!</div>
          </div>

          <h1 className="md:text-3xl text-zinc-800 tracking-tight">
            Experience life through travel and enjoyment, let's get started to
            become an explorer.
          </h1>

          <Link to="/tours">
            <button className="flex gap-2 items-center px-8 py-3 rounded-3xl font-semibold tracking-tight shadow-md lg:mt-0 bg-zinc-100 text-zinc-800 cursor-pointer hover:bg-[#C9D7DD] hover:text-black md:text-xl">
              <div>Plan a trip</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
