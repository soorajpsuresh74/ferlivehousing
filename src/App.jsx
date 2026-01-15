import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // <-- added
import splashImage from "./assets/ferlivehousingcom-high-resolution-logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ThankYou from "./pages/ThankYou";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>FerliveHousing.com - Your Property, Our Passion | Property Management Trivandrum</title>
        <meta
          name="description"
          content="Ferlive Housing provides hassle-free property rental management and tenant services in Trivandrum."
        />
        <meta property="og:title" content="Ferlive Housing – Property Rental Management in Trivandrum" />
        <meta
          property="og:description"
          content="Ferlive Housing provides hassle-free property rental management and tenant services in Trivandrum."
        />
        <meta property="og:url" content="https://www.ferlivehousing.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="overflow-x-hidden">
        {showSplash ? (
          <div className="splash-screen">
            <img src={splashImage} alt="Splash Logo" />
          </div>
        ) : (
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
