import { RiTeamFill } from "react-icons/ri";
import { MdOutlineEditCalendar, MdOutlinePeople, MdOutlineCardTravel } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiCustomerServiceLine, RiPlantFill } from "react-icons/ri";
import { FaAward, FaHandsHelping } from "react-icons/fa";
import { IoAirplaneOutline, IoMapOutline  } from "react-icons/io5";
import { TbAward } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";
import { GiMountaintop } from "react-icons/gi";
import { FaPersonHiking } from "react-icons/fa6"
import { BsFillAwardFill } from "react-icons/bs";

export const reviewData = [
  {
    name: "Emily S.",
    feedback:
      "My journey with WanderWave through the vibrant streets of Tokyo during cherry blossom season was an absolute dream come true. From the bustling markets of Shibuya to the tranquil gardens of Shinjuku, every moment was expertly curated to immerse me in the beauty and culture of Japan. WanderWave's attention to detail and seamless logistics made this trip unforgettable.",
    season: "Spring 2023",
    rating: "★ ★ ★ ★ ★ ",
    pic: "https://images.unsplash.com/photo-1629137440336-fa7790b40530?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex M.",
    feedback:
      "Exploring the ancient ruins of Machu Picchu with WanderWave was an experience I'll cherish forever. From the awe-inspiring vistas of the Sacred Valley to the mystical atmosphere of the Inca Trail, WanderWave's knowledgeable guides and eco-conscious approach made this adventure truly remarkable.",
    season: "Summer 2022",
    rating: "★ ★ ★ ★ ★ ",
    pic: "https://images.unsplash.com/photo-1476846097969-46bc4cd7da07?q=80&w=2460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah L.",
    feedback:
      "WanderWave took me on a magical journey through the enchanting landscapes of Iceland under the dancing Northern Lights. From chasing waterfalls along the Golden Circle to soaking in the geothermal wonders of the Blue Lagoon, every day was a new adventure. WanderWave's commitment to sustainability and local immersion made this trip not only unforgettable but also deeply meaningful.",
    season: "Winter 2021",
    rating: "★ ★ ★ ★ ★ ",
    pic: "https://images.unsplash.com/photo-1473425021274-58232d06e88b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const planData = [
  {
    title: "Alpine Expedition",
    destination: "Switzerland | Interlaken, Lucerne, Zurich",
    price: "$3000",
    activities: "Hiking, paragliding, panoramic train ride",
    days: 10,
  },
  {
    title: "Land of the Rising Sun",
    destination: "Japan | Osaka, Kyoto, Tokyo",
    price: "$3500",
    activities: "Exploring, sushi-making, temples",
    days: 12,
  },
  {
    title: "Safari Adventure",
    destination: "Kenya | Maasai Mara, Amboseli, Mombasa",
    price: "$5000",
    activities: "Safari, balloon ride, beach",
    days: 14,
  },
  {
    title: "Maldivian Getaway",
    destination: "Maldives | Malé, Maafushi, Biyadhoo",
    price: "$4500",
    activities: "Snorkeling, Scuba Diving, Beach Relaxation",
    days: 10,
  },
  {
    title: "Moroccan Escape",
    destination: "Morocco | Marrakech, Fez, Chefchaouen",
    price: "$2800",
    activities: "Exploring, Camel Ride, Shopping",
    days: 8,
  },
];

export const productData = [
  {
    type: "Metropolis Expedition",
    activities: "Sightseeing, Shopping, Culinary Tours",
    priceRange: "$ - $$",
    accommodation: "Boutique hotels, metro passes included",
    seasonality: "Year-round",
    pic: "https://images.unsplash.com/photo-1549041490-f64d74264d25?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "IDR 5.000.000",
  },
  {
    type: "Cultural Odyssey",
    activities: "Museum, Local Cuisine, Workshops",
    priceRange: "$$ - $$$",
    accommodation: "Authentic guesthouses, private mini-van",
    seasonality: "Summer/Autumn",
    pic: "https://images.unsplash.com/photo-1602479185195-32f5cd203559?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "IDR 10.000.000",
  },
  {
    type: "Extreme Quest",
    activities: "Rock Climbing, Rafting, Skydiving",
    priceRange: "$$$ - $$$$",
    accommodation: "Adventure lodges, off-road vehicles",
    seasonality: "Summer",
    pic: "https://images.unsplash.com/photo-1597250861267-429663f244a8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "IDR 15.000.000",
  },
  {
    type: "Desert Discovery",
    activities: "Camel Trekking, Sandboarding, Oasis Towns, Desert Camping",
    priceRange: "$$$ - $$$$$",
    accommodation: "Bedouin tents, local homestays, campsites",
    seasonality: "Spring/Autumn",
    pic: "https://plus.unsplash.com/premium_photo-1697729969603-1155a03ee785?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "IDR 20.000.000",
  },
  {
    type: "Polar Adventure",
    activities: "Aurora borealis, Iceberg Cruises, Hiking",
    priceRange: "$$$$ - $$$$$$",
    accommodation: "Cozy lodges, ice hotels, ships",
    seasonality: "Winter/Summer",
    pic: "https://images.unsplash.com/photo-1593378026483-2a1fd46a35bd?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "IDR 50.000.000",
  },
];

export const milestone = [
  {
    icon: <IoAirplaneOutline />,
    total: "350",
    desc: "Total Destinations",
  },
  {
    icon: <IoMapOutline />, 
    total: "1400",
    desc: "Amazing Tours",
  },
  {
    icon: <MdOutlinePeople />,
    total: "7000",
    desc: "Happy Customers",
  },
  {
    icon: <TbAward />,
    total: "7",
    desc: "Travel Awards",
  }
];

export const companyValue = [{
    icon: <RiTeamFill />,
    title: "Expertise",
    desc: "Our team of experienced travelers and local experts curates experiences withattention to detail.",
},
{
    icon: <MdOutlineEditCalendar />,
    title: "Flexibility",
    desc: "We offer flexible booking options and customizable itineraries to suit individual preferences and needs.",
},
{
    icon: <AiOutlineSafetyCertificate />,
    title: "Safety and Security",
    desc: "Your safety is our top priority, and we adhere to the highest standards of safety and security in all our operations.",
},
{
    icon: <RiCustomerServiceLine />,
    title: "Customer Satisfaction",
    desc: "We are dedicated to ensuring that every traveler has a seamless and unforgettable experience from start to finish.",
},
]

export const aboutTeam = [
    {
      name: "Sarah Johnson",
      pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Known for her adept management of travel logistics, Sarah brings expertise in expedition planning and coordination, ensuring seamless journeys, drawing from her expertise in expedition planning and management.",
      position: "Head of Operations",
    },
    {
        name: "John Smith",
        pic: "https://images.unsplash.com/photo-1682748347932-a6a38923426c?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "With over 15 years of experience, John has navigated diverse terrains worldwide, including iconic peaks like Everest and K2, establishing himself as a seasoned adventurer and respected leader in the industry.",
        position: "CEO",
      },
    {
      name: "David Lee",
      pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "With a passion for exploration and a focus on safety, David's experience in outdoor pursuits and wilderness travel has enriched WanderWave's adventures, earning him recognition as a trusted guide and adventurer.",
      position: "Head Guide",
    }
  ];

  export const awardData = [
    {
      title: "Adventure Travel Company of the Year",
      year: 2023,
      icon: <FaPersonHiking />
    },
    {
      title: "Travel Innovation Award",
      year: 2022,
      icon: <FaAward />
    },
    {
      title: "Sustainable Tourism Champion",
      year: 2021,
      icon: <ImLeaf />
    },
    {
      title: "Best Expedition Planning Service",
      year: 2020,
      icon: <MdOutlineCardTravel />
    },
    {
      title: "Excellence in Customer Satisfaction",
      year: 2019,
      icon: <FaHandsHelping />
    },
    {
      title: "Outstanding Leadership in Adventure Travel",
      year: 2018,
      icon: <BsFillAwardFill />
    },
    {
      title: "Innovator in Sustainable Travel",
      year: 2017,
      icon: <RiPlantFill />
    }
  ];
  