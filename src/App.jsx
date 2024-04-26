import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import Home from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Teampage from "./pages/teampage";
import Tourspage from "./pages/tourspage";
import { useEffect } from "react";

function App() {
  
  const { pathname } = useLocation();
  useEffect(()=>{
window.scrollTo(0,0)
  },[pathname])

  return (
    <>
      <ChakraProvider>  
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tours" element={<Tourspage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/team" element={<Teampage />} />
          </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
