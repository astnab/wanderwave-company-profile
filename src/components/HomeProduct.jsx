import React from "react";
import { productData } from "../sources/reviewdata";
import { Link } from "react-router-dom";

function ProductOverview() {
  return (
    <div className="w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-200">
      
      <div className="flex flex-col lg:justify-center lg:items-center justify-start">

      <div className="flex flex-col py-8 lg:py-0 lg:w-[570px] text-center">

        <h1 className="py-10 tracking-tighter font-semibold text-xs lg:text-sm text-zinc-600">
            POPULAR TOURS
        </h1>


        <h1 className="lg:text-2xl text-md px-10 lg:px-0 font-bold tracking-tight text-zinc-600">
          Our multi-level approach to travel management goes further than
          booking to provide a full-scale program based upon 
          <span className="text-[#4f8095]"> efficiency, safety,
          and savings.</span>
        </h1>
      </div>

      <div className="flex flex-row lg:flex-wrap lg:justify-center justify-start items-center lg:px-40 lg:py-10 overflow-x-scroll px-12">

        {productData.map((product, index) => (
          <div key={index} className="p-5">
            <div className="bg-zinc-100 rounded-lg shadow-md hover:scale-[1.02] flex flex-col justify-center items-center w-60 lg:w-80 h-[400px] gap-2 cursor-pointer">

              <div className="lg:w-60 w-40 rounded h-40">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={product.pic}
                  alt=""
                />
              </div>

              <div className="">
                <h1 className="font-black text-[#4f8095] tracking-[-0.5px] lg:text-xl text-lg">
                  {product.type}
                </h1>
              </div>

              <div className="flex flex-col w-full gap-3 justify-center items-center px-10 text-center">

              <h3 className="text-sm font-bold tracking-tight">
                  {product.seasonality}
                </h3>

                <h2 className="text-stroke text-sm tracking-tight">
                  {product.activities}
                </h2>



                <h3 className="text-xs tracking-tight">Start from</h3>

                <h3 className="font-bold tracking-tight text-[#4f8095]">{product.price}</h3>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-16">

        <Link to="/tours"> 
        <button className=" px-6 py-3 rounded-3xl font-bold tracking-tight shadow-md lg:mt-0 mt-5 bg-[#86aebf] text-white cursor-pointer hover:bg-[#C9D7DD] hover:text-black">
          More Tours
        </button>
        </Link>
         
      </div>
      </div>
    </div>
  );
}

export default ProductOverview;
