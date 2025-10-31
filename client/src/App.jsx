import React from "react";
import Menu from "./pages/Menu";
import Landing from "./pages/Landing";
import Footer from "./pages/Footer";
import AboutPage from "./pages/AboutPage";
import Service from "./pages/Service";
import Fleet from './pages/Fleet'
import PortFolio from "./pages/PortFolio";
import Contactus from "./pages/Contactus";
import HSE from "./pages/HSE";
import Subpage1 from "./pages/Subpage1";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Menu></Menu>
      {/* <Landing></Landing> */}
      {/* <AboutPage></AboutPage> */}
      {/* <Service></Service>
      <Fleet></Fleet>
      <PortFolio></PortFolio>
      <Contactus></Contactus> */}
      {/* <HSE></HSE> */}
      <Routes>
        <Route path="/" element={<Landing></Landing>}/>
        <Route path="/about" element={<AboutPage></AboutPage>}/>
        <Route path="/services" element={<Service></Service>}/>
        <Route path="/fleet" element={<Fleet></Fleet>}/>
        <Route path="/portfolio" element={<PortFolio></PortFolio>}/>
        <Route path="/contact" element={<Contactus></Contactus>}/>
        <Route path="/hse" element={<HSE></HSE>}/>
        
      </Routes>
      {/* <Subpage1></Subpage1> */}
      {/* <Footer></Footer> */}
    </>
  );
};

export default App;
