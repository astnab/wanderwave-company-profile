import React from "react";
import { aboutTeam } from "../sources/reviewdata";
import { Link } from "react-router-dom";

function AboutTeam() {
  return (
    <>
      <div className="flex flex-col lg:justify-center justify-start items-center lg:px-40 px-12 gap-0 
      bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#d5e4ea] via-zinc-100 to-zinc-100
      
      ">
        <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800 p-5">
          MEET THE TEAM
        </h1>

        <div className="flex lg:flex-row flex-col lg:justify-center justify-start items-center lg:py-10 lg:px-12 lg:gap-10 gap-5 lg:w-full w-full pt-8 ">
          
          {aboutTeam.map((member, index) => (
            <div
              key={index}
              className="w-[340px] lg:w-full py-10 rounded-3xl shadow-lg flex flex-col items-center justify-center font-semibold tracking-tight lg:gap-3 gap-2 bg-white/80 backdrop-blur-md"
            >
              <img
                src={member.pic}
                className="lg:w-28 w-20 lg:h-28 h-20 object-cover object-top saturate-0 rounded-full shadow-lg"
                alt=""
              />

              <h2 className="font-black text-[#4f8095] text-lg">{member.name}</h2>

              <h3 className="font-bold text-md">{member.position}</h3>

              <h4 className="lg:text-justify text-center text-sm px-10 h-full">
                {member.desc}
              </h4>
            </div>
          ))}
        </div>

        <Link to="/team"> 
        <button className="px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black mb-14">
          Read More
        </button>
        </Link>

      </div>
    </>
  );
}

export default AboutTeam;
