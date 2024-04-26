import React from 'react';
import { awardData } from '../sources/reviewdata';

function Award() {
  return (
    <div className='w-screen bg-zinc-800 '>

      <div className='flex flex-row justify-center items-start gap-4 overflow-x-scroll'>

        {awardData.map((award, i) => (
          <div key={i} className="flex flex-col  w-80 gap-2 justify-center items-center">

<div className='text-center text-3xl 
bg-gradient-to-r from-[#E8C872] via-[#ffefc2] to-[#E8C872] bg-clip-text'>{award.icon}</div>
            <div className='text-center text-white text-sm tracking-tight'>{award.year}</div>
            
            <div className='text-center text-white font-bold tracking-tight'>{award.title}</div>

          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Award;
