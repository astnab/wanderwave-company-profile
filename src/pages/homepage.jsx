import Navbar from "../components/Navbar_2"
import Hero from "../components/HomeHero"
import CompanyOverview from "../components/AboutOverview"
import Footer from "../components/Footer_2"
import Reviews from "../components/reviews"
import Destination from "../components/destination"
import ProductOverview from "../components/HomeProduct"
import HeroAbout from "../components/HomeTeam"
import Milestone from "../components/milestone"
import Subscribe from "../components/subscribe"
import MilestoneSection from "../components/milestonesection"
import HomeReviews from "../components/HomeReviews"

export default function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <MilestoneSection />
        <HeroAbout />
        {/* <Subscribe /> */}
        <ProductOverview />
        <HomeReviews /> 
        <Footer />
        </>
    )
}