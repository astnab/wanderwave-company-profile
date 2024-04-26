import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { TbUserQuestion } from "react-icons/tb";

function HeroAbout() {
  return (
    <div className="w-screen bg-white">

      <div className="flex flex-col lg:justify-center lg:items-center justify-start">

        <div className="flex flex-col py-8 lg:py-0  lg:px-32 text-center">

          <h1 className="py-10 tracking-tighter font-semibold text-xs lg:text-sm text-zinc-600 lg:hidden block">
            MEET THE TEAM
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:py-10">

            <h1 className="lg:text-2xl text-md px-10 lg:px-0 font-bold tracking-tight text-zinc-600 lg:hidden">
              <span className="text-[#4f8095]">
                We turn travel dreams into reality.{" "}
              </span>
              With a focus on breathtaking landscapes and cultural immersion,
              we're your compass to extraordinary experiences.
            </h1>


            <img
              src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="saturate-0 w-60 my-8 lg:w-1/3 rounded-full aspect-square object-cover mx-10"
              alt=""
            />


            <div className="lg:flex hidden flex-col gap-10 items-center">

            <h1 className=" tracking-tighter font-semibold text-xs lg:text-sm text-zinc-600 lg:block hidden">
            MEET THE TEAM
          </h1>
          

              <h1 className="lg:text-xl text-md px-10 font-bold tracking-tight text-zinc-600 text-center">
                <span className="text-[#4f8095]">
                  We turn travel dreams into reality.{" "}
                </span>
                </h1>
{/* 
                {/* <h1 className="lg:text-xl text-md px-10 lg:px-20 font-bold tracking-tight text-zinc-600 text-center">
                Our team of travel enthusiasts fosters a culture of
                </h1> */}
{/* 
                <div className="flex flex-row gap-10 lg:px-20 text-[#4f8095]">

                    <div className="flex flex-col gap-2 items-center text-xl">
                    <TbUserQuestion className="text-3xl" /> 
                    <h1 className="px-4 font-bold">Curiousity</h1>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-xl">
                    <HiOutlineLightBulb className="text-3xl" /> 
                    <h1 className="px-4 font-bold">Creativity</h1>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-xl">
                    <BsPeople className="text-3xl" /> 
                    <h1 className="px-4 font-bold">Collaboration</h1>
                    </div>
                </div>  */}

                <h1 className="lg:text-xl text-md px-10 lg:px-20 font-semibold tracking-tight text-zinc-600 text-center">
                With a focus on breathtaking landscapes and cultural immersion, we're your compass to extraordinary experiences.
                Join
                us as we set sail on a journey of exploration, inspiring fellow
                adventurers to wander fearlessly alongside us.

                </h1>
                

              <Link to="/about">
              <button className="hidden lg:block px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
                About Us
              </button>
            </Link>
            </div>

            <Link to="/about">
              <button className="px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black lg:hidden">
                About Us
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
