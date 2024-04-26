import React from 'react';
import Reviews from './reviews';

function ToursReview() {
  return (
    <div className='w-screen bg-zinc-800 py-10'>
         <div className="lg:px-[88px] px-10 py-10">
            <h1 className="font-black text-xl text-zinc-100 tracking-tighter">FROM OUR TRAVELERS</h1>
            <h2 className="font-semibold tracking-tight pt-2 text-zinc-400">What they say about our tours.</h2>
          </div>
      <Reviews />
    </div>
  )
}

export default ToursReview
