import React from "react";
import { tripPackages } from "../sources/toursdata";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function ToursProductCard() {
  return (
    <div className="w-screen lg:px-5 bg-[radial-gradient(ellipse_at_left_bottom,_var(--tw-gradient-stops))] from-[#d5e4ea] via-zinc-100 to-zinc-100">
      <div className="text-center lg:py-16 pt-8 lg:pt-10">
        <h1 className="font-black text-xl text-zinc-700 tracking-tighter">
          UPCOMING TOUR PACKAGES
        </h1>
        <h2 className="font-semibold tracking-tight pt-2 text-zinc-700">
          Reserve your spot and secure your experience now!
        </h2>
      </div>

      <div className="flex flex-row lg:flex-wrap lg:justify-center lg:items-center lg:px-10 lg:pb-20 overflow-x-scroll gap-10 px-12 py-16 lg:py-0">
        {tripPackages.map((trip, index) => (
          <div
            key={index}
            className="bg-zinc-100 rounded-lg shadow-lg flex flex-col justify-center items-center lg:w-80 h-[380px] py-2 cursor-pointer hover:scale-[1.02]"
          >
            <div className="relative lg:w-72 lg:h-48 w-60 h-60 rounded p-3 lg:p-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={trip.pic}
                alt=""
              />
              {/* <div className="absolute top-2 right-2">
        <div className="bg-none hover:bg-red-400/70 hover:shadow-lg backdrop-blur-sm p-2 rounded-full border-2 border-zinc-800">
            <FaRegHeart />
        </div>
    </div> */}
            </div>

            <div className="flex flex-col w-full gap-2 justify-center items-start px-5 py-3 text-center text-sm">
              <div className="flex flex-row justify-between w-full">
                <h1 className="font-black text-[#4f8095] tracking-[-0.5px] lg:text-lg text-base">
                  {trip.title}
                </h1>
                <div className="bg-gradient-to-t  from-[#406D83] to-[#7aafca] w-14 rounded-3xl flex items-center justify-center gap-1 text-white font-bold">
                  <h1>{trip.rating}</h1>
                  <h1>
                    <IoStarSharp />
                  </h1>
                </div>
              </div>

              <h3 className="text-sm font-bold tracking-tight">
                {trip.destinations}
              </h3>

              <div className="flex flex-row justify-between w-full lg:text-base text-xs">
                <div className="flex flex-row gap-1 items-center justify-start">
                  <h3 className="lg:text-xl text-base text-zinc-500">
                    <MdDateRange />
                  </h3>
                  <h3 className=" tracking-tight">{trip.departureDate}</h3>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start">
                  <h3 className="text-xl text-zinc-500">
                    <IoTime />
                  </h3>
                  <h2 className="tracking-tight">{trip.duration}</h2>
                </div>
              </div>

              <div className="lg:text-base text-xs flex flex-row gap-2 items-center justify-start">
                <h3 className="text-xl text-zinc-500">
                  <BiSolidPlaneAlt />{" "}
                </h3>
                <h3>{trip.airline}</h3>
              </div>

              <div className="flex flex-row gap-2 items-center justify-start">
                {/* <h3 className="text-xl">
                  <BiSolidPlaneAlt />{" "}
                </h3> */}
                <h3 className="tracking-tight text-md font-bold">
                  {trip.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToursProductCard;
