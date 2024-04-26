import { HiDocumentDuplicate } from "react-icons/hi2";
import { TiThList } from "react-icons/ti";
import { FaHouse } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdRecommend } from "react-icons/md";

export const trips = [{
    place: "",
    price: "",
    rate:  "",
    loc: "",
    duration:  "",
    acc: "",
}]

export const tripPackages = [
    {
      title: "Desert Expedition",
      pic: "https://images.unsplash.com/photo-1606036685180-d6187349ab23?q=80&w=3301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destinations: "Morocco - Egypt",
      duration: "7 days",
      airline: "Royal Air Maroc",
      departureDate: "May 15, 2024",
      price: "IDR 15.000.000",
      rating: 4.7,
    },
    {
      title: "Island Paradise",
      pic: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destinations: "Maldives - Seychelles",
      duration: "10 days",
      airline: "Emirates",
      departureDate: "June 20, 2024",
      price: "IDR 24.000.000",
      rating: 5,
    },
    {
      title: "Mountain Trekking",
      pic: "https://images.unsplash.com/photo-1587001667907-8d0b44c898cb?q=80&w=3116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      destinations: "Nepal - Bhutan",
      duration: "14 days",
      airline: "Bhutan Airlines",
      departureDate: "September 5, 2024",
      price: "IDR 21.000.000",
      rating: 4.8,
    },
    {
        title: "Africa Safari",
        pic: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        destinations: "Kenya - Tanzania",
        duration: "12 days",
        airline: "Kenya Airways",
        departureDate: "October 5, 2024",
        price: "IDR 38.000.000",
        rating: 4.5,
      },
    {
      title: "Explore Europe",
      destinations: "France - Italy - Spain",
      pic: "https://plus.unsplash.com/premium_photo-1688479428007-658f1abb8c33?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "12 days",
      airline: "Lufthansa",
      departureDate: "October 10, 2024",
      price: "IDR 28.000.000",
      rating: 5,
    },
    {
        title: "Scandinavian Trip",
        destinations: "Norway - Sweden - Denmark",
        pic: "https://plus.unsplash.com/premium_photo-1688069977094-1727f9dff7c0?q=80&w=3350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: "10 days",
        airline: "SAS Scandinavian Airlines",
        departureDate: "November 12, 2024",
        price: "IDR 24.500.000",
        rating: 5,
      },
      {
        title: "Magical Asia",
        pic: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        destinations: "India - Sri Lanka - Nepal",
        duration: "14 days",
        airline: "Air India",
        departureDate: "March 20, 2025",
        price: "IDR 35.000.000",
        rating: 4.6,
      }
  ];
  
export const servicesData = [{
    icon: <TiThList />,
    name: "Trip Planning",
    desc: "Including accommodations, transportation, and activities, based on the client's preferences and budget.",
},
{
    icon: <FaHouse />,
    name: "Accommodation Booking",
    desc: "Providing options of hotels, rentals, and meals to ensure comfortable and suitable lodging during the trip.",
},
{
    icon: <FaMapLocationDot />,
    name: "Tour Packages",
    desc: "Packaged tour itineraries, including guided tours, accommodations, to provide convenience and value for travelers.",
},
{
    icon: <HiDocumentDuplicate />,
    name: "Documentation Assistance",
    desc: "Support with obtaining travel insurance and assistance with visa applications, passport renewals, and other travel documentation.",
}
]