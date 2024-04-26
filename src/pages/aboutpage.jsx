import React, { useEffect } from "react";
import Navbar from "../components/Navbar_2"
import Hero from "../components/HomeHero"
import CompanyOverview from "../components/AboutOverview"
import CompanyValue from "../components/CompanyValue"
import AboutTeam from "../components/AboutTeam"
import Footer from "../components/Footer_2"
import Award from "../components/award"

export default function Aboutpage() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
        <Navbar />
        <CompanyOverview />
        <AboutTeam />
        {/* <Award /> */}
        <Footer />
        </>
    )
}