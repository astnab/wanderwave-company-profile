import React from "react";
import { planData } from "../sources/reviewdata";

function Destination() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-100">
      <div className="flex justify-center py-10">
        <h1 className="text-xl">
          Our multi-level approach to travel management goes further than
          booking to provide a full-scale program based upon efficiency, safety,
          and savings.
        </h1>
      </div>

      <div className="flex flex-row">
        {productData.map((plan, index) => (
          <div key={index} className="p-10">
            <div className="bg-red-400">
              <h1>{plan.title}</h1>
              <div>
                <img src="" alt="" />
              </div>
              <h2>{plan.destination}</h2>
              <h3>{plan.activities}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
