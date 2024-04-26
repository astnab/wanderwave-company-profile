import React from 'react';
import { milestone } from '../sources/reviewdata';


function MilestoneSection() {
    return (
      <div className='w-screen bg-zinc-800'>
  
        <div className="flex flex-row lg:flex-row justify-center items-center text-center lg:gap-16 py-6">
  
          {milestone.map((stone, index) => (
  
            <div key={index} className="text-white px-3 lg:px-8 flex flex-col items-center gap-2 lg:gap-4">
              <h1 className='text-3xl text-[#86aebf]'>{stone.icon}</h1>
              <h1 className='font-bold lg:text-2xl text-base tracking-tighter'>{stone.total}</h1>
              <h2 className='text-xs lg:text-lg text-wrap tracking-tight'>{stone.desc}</h2>
  
            </div>
          ))}
  
        </div>
      </div>
    );
  }
  
  export default MilestoneSection;
  