import React from "react";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { servicesData } from "../sources/toursdata";
import { Link } from "react-router-dom"

function ToursHero() {
  return (
    <div className="w-screen bg-zinc-100">

      <div className="flex lg:flex-row flex-col pt-28 px-10">

        <div className="lg:basis-1/2 flex flex-col justify-center items-center">

          <div className="text-center py-8">
            <h1 className="font-black text-xl text-zinc-700 tracking-tighter">OUR SERVICES</h1>
            <h2 className="font-semibold tracking-tight pt-2 text-zinc-700">Tailored solutions for your travel needs.</h2>
          </div>

          <div className="flex flex-row flex-wrap justify-center lg:gap-8 gap-5 py-6  text-sm lg:text-base overflow-x-scroll">

            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-row items-center bg-white shadow-md rounded-2xl p-5 gap-4 lg:w-[350px] w-80 hover:scale-[1.02]">

                <div className="bg-[#406D83] shadow-lg text-white p-3 rounded-full">
                  {service.icon}
                </div>

                <div>
                  <h1 className="font-bold tracking-tight text-lg text-[#406D83] pb-2">{service.name}</h1>

                  <h2 className="tracking-tight font-semibold text">{service.desc}</h2>
                </div>

              </div>
            ))}
            
            <Link to="/tours"> 
        <button mailto="astnab@gmail.com" className="px-6 py-3 mx-28 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
          Contact Us
        </button>
        </Link>
          </div>
        </div>

        <div className="lg:basis-1/2 p-5 hidden lg:block">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-3xl object-cover object-top lg:h-full lg:w-full shadow-inner" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ToursHero;
