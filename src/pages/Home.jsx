import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Features from "../components/Features";
import Mission from "../components/Mission";


const Home = () => {
  return (
  
      
      <div className="flex-grow">
        <Hero />
        <Mission/>
        <Features />
    </div>
  );
};

export default Home;