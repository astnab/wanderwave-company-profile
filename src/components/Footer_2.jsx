import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok, FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
    <div className="bg-zinc-800 flex flex-row lg:gap-20 gap-5 lg:px-20 px-8 lg:py-10 py-4 border-t">

      {/* INFO COMPANY */}

      <div className="text-white">
        
        <img src="https://i.ibb.co/tBRzmFZ/WANDERWAVE.png" className="w-14 py-5" alt="" />

        <div className="text-sm">
          <h1 className="font-bold text-base">WanderWave & Co</h1>
          <h1>123 Adventure Avenue</h1>
          <h1>WANDR 12345</h1>

          <div className="flex gap-3 pt-3">
            <span><IoIosMail /> </span>
            <span>info@wanderwave.com</span>
            </div>
          <div className="flex gap-3">
            <span><FaPhoneAlt /> </span>
            <span>+123-456-7890</span>
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-6 lg:pl-0 text-white">

        <p className="font-bold text-sm lg:text-base">Follow Us</p>
        <div className="flex flex-row flex-wrap text-white gap-4 text-xs lg:text-sm">
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaInstagram />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaTiktok />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaYoutube />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaFacebookF />
          </p>
          <p className="border border-white p-2 rounded-3xl cursor-pointer hover:bg-[#406D83] hover:text-black">
            <FaXTwitter />
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm lg:text-sm">
          <p className=" cursor-pointer hover:text-[#406D83]">
            Terms & Condition
          </p>
          <p className=" cursor-pointer hover:text-[#406D83]">Privacy Notice</p>
          <p className=" cursor-pointer hover:text-[#406D83]">Blog</p>
        </div>
      </div>

      <div className="flex-col gap-4 py-6 lg:pl-0 text-white hidden lg:flex">
        
        <p className="font-bold text-sm lg:text-base">Company</p>

        <div className="flex flex-col gap-2 text-sm lg:text-sm">
          <a href="/" className="cursor-pointer hover:text-[#406D83]">
            Home
          </a>
          <a href="/about" className=" cursor-pointer hover:text-[#406D83]">Why us?</a>
          <a href="/tours" className=" cursor-pointer hover:text-[#406D83]">Tours</a>
          <a href="/team" className=" cursor-pointer hover:text-[#406D83]">Team</a>
        </div>
      </div>


   
    </div>

    <div className="text-xs lg:text-sm text-center py-4">
          <p>
            Copyright © 2024
            <span className="font-semibold"> WanderWave.</span> All rights
            reserved.
          </p>
        </div>
    </>
  );
}

export default Footer;
