import React from 'react';
import { milestone } from '../sources/reviewdata';

function Milestone() {
  return (

      <div className="flex flex-row lg:flex-row justify-center items-center text-center lg:gap-5 px-10 py-6">

        {milestone.map((stone, index) => (

          <div key={index} className="text-white px-3 lg:px-8 flex flex-col items-center gap-2 lg:gap-2">
            <h1 className='text-xl text-[#86aebf]'>{stone.icon}</h1>
            <h1 className='font-bold text-xl tracking-tighter'>{stone.total}</h1>
            <h2 className='text-sm text-wrap tracking-tight'>{stone.desc}</h2>

          </div>
        ))}

      </div>
  );
}

export default Milestone;
