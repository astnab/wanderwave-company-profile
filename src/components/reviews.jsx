import React from "react";
import { reviewData } from "../sources/reviewdata";

export default function Reviews() {
  return (
    <>
      <div className="h-30 lg:px-12">

        {/* <div className="lg:px-10 px-8">
          <h1 className="text-zinc-300 font-bold text-sm lg:text-3xl">TRAVEL
          <span className="text-[#637A9F]"> EXPERIENCES</span></h1>
          <h1 className="mb-10 mt-2 text-white text-lg font-light">Some feedbacks from our travelers</h1>
        </div> */}

        <div className="flex flex-row lg:flex-row justify-start overflow-x-scroll lg:justify-center">

          {reviewData.map((review, index) => (

            <div key={index} className="relative lg:px-8 px-8 py-2 text-xs w-90 lg:w-full lg:text-sm">

              <div>
                <div className="bg-white/30 backdrop-blur-sm w-28 h-28 ml-8 absolute rounded-full">
                  <img className="w-full h-full object-cover rounded-full p-2" src={review.pic} alt="" />
                </div>

              </div>

              <div className="bg-white shadow-lg border border-transparent w-80 mt-14 pt-16 rounded-2xl p-5 lg:w-full">
                {/* <h3>{review.season}</h3> */}
                <h2 className="tracking-[-0.2px] leading-6 mb-5">{review.feedback}</h2>
                <h3 className="text-[#E8C872] text-sm mb-5">{review.rating}</h3>
                <h1 className="font-bold text-sm">{review.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
