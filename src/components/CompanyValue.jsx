import React from 'react';
import { RiTeamFill } from 'react-icons/ri';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { FaAward } from 'react-icons/fa';
import { companyValue } from '../sources/reviewdata';

function CompanyValue() {
  return (
    <div className="flex flex-row w-full gap-5 justify-center flex-wrap py-6 lg:py-0 lg:bg-zinc-100 bg-[#C9D7DD]">
     
      {companyValue.map((value, index) => (
        <div key={index} className="text-zinc-600 lg:px-10 px-5 flex flex-col gap-2 lg:gap-2 lg:w-64 w-40 py-3 bg-zinc-100 rounded-3xl border border-zinc-300 lg:bg-white hover:shadow-lg">

          <h1 className='text-3xl text-[#86aebf]'>{value.icon}</h1>
          <h1 className='font-bold text-base tracking-tighter'>{value.title}</h1>
          <h2 className='text-xs font-semibold text-wrap tracking-tight'>{value.desc}</h2>
        </div>
      ))}
    </div>
  );
}

export default CompanyValue;
