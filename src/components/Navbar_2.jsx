import React, { useState } from "react"
import "../index.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <div className="flex items-center justify-between shadow-lg py-2 px-10 fixed z-50 w-screen bg-zinc-100">

      {/* LOGO */}
      <a href="/">
        <img src="https://i.ibb.co/tBRzmFZ/WANDERWAVE.png" className="w-14" alt="logo" />
      </a>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >

              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >

                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>


            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-semibold">
            <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Why us?</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/tours">Tours</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/team">Team</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 font-semibold lg:flex">
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tours">Tours</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
    </style>
    </div>
  );
}
