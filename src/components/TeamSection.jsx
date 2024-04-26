import React from 'react'
import TeamMember from './TeamMembers'

function TeamSection() {
  return (
    <div className=' bg-zinc-100'>

       

        <div className='flex flex-col justify-center items-center'>

       {/* <div className='pt-10 '>
       <h1 className="font-bold text-base text-zinc-600 tracking-tighter">MEET OUR AMAZING TEAM</h1>
          </div> */}


<div className='py-10 flex flex-col justify-center items-center'>
        <h1 className="font-bold text-base text-zinc-800 tracking-tighter">OUR TEAM</h1>
            <h2 className="font-black uppercase text-2xl tracking-tight py-4 text-[#406D83] text-center">Meet Our Dedicated Team</h2>
            <h3 className='text-center text-sm px-10 lg:w-1/2'>At WanderWave & Co, our success is built upon the expertise, dedication, and collaborative spirit of our talented team. Meet the individuals who bring passion and professionalism to every project.</h3>
        </div>

          <div className=''>
          <TeamMember />
          </div>
        </div>

     
      </div>

  )
}

export default TeamSection
