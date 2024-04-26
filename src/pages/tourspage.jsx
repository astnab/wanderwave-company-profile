import React from 'react'
import Navbar from '../components/Navbar_2'
import ToursHero from '../components/ToursHero'
import ToursProductCard from '../components/ToursProductCard'
// import Destination from '../components/destination'
import CompanyValue from '../components/CompanyValue'
import Footer from '../components/Footer_2'
import ToursReview from '../components/ToursReview'
// import {useLocation} from "react-router-dom"

function Tourspage() {
  return (
    <>
    <Navbar />
    <ToursHero />
    <ToursProductCard  />
    {/* <CompanyValue /> */}
    <ToursReview />
    <Footer />

    </>
  )
}

export default Tourspage
