import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import splashImage from "./assets/ferlivehousingcom-high-resolution-logo.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";

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
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
