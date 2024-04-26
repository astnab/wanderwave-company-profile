import "../index.css";
import Milestone from "./milestone";

export default function CompanyOverview() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-100 py-10">

      <div className="flex flex-col gap-4 mt-28 items-center">
        <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800 block">
          ABOUT US
        </h1>

        <div className="text-center py-8 text-[#86aebf] tracking-tighter">
          <h1 className="text-[30px] lg:text-8xl font-black">
            WanderWave & Co
          </h1>
          <h2 className="font-bold text-zinc-600 pt-4">
            Leading the Way in Adventure Travel Since 2014
          </h2>
        </div>

        <div className="lg:flex flex-col items-center justify-center lg:mx-10 lg:px-10 hidden">
          <img
            className="rounded-3xl object-center brightness-110 saturate-0 lg:h-[400px] lg:w-screen object-cover"
            src="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>


        <div className="flex flex-col items-center justify-center px-10 lg:hidden">
          <img
            className="rounded-full object-center brightness-110 saturate-0 lg:h-[400px] lg:w-screen object-cover"
            src="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=2371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="flex flex-col lg:px-20 items-center">
          <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800 py-8">
            COMPANY HISTORY
          </h1>

          <h2 className="lg:px-80 px-10 text-center font-semibold tracking-tight leading-relaxed lg:text-xl">
            Established in 2014, WanderWave burst onto the travel scene with a
            daring ambition
            <span className="text-[#4f8095] font-bold">
              {" "}
              to redefine the very essence of adventure.{" "}
            </span>
            Born from the restless spirits of intrepid explorers, our agency
            quickly carved a niche as a trailblazer in the industry. Fuelled by
            our passion for the unknown and driven by an insatiable thirst for
            discovery, WanderWave has navigated uncharted territories and
            conquered formidable landscapes since day one.
          </h2>
        </div>

      </div>
    </div>
  );
}
