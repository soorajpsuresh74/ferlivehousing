import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Features from "../components/Features";
import Mission from "../components/Mission";
import RealEstateLanding from "../subui/sample_1"

const Home = () => {
  return (
    <>
      {/* <div><RealEstateLanding></RealEstateLanding></div> */}
      <div className="flex-grow">
        <Hero />
        <Mission />
        <Features />
      </div>
    </>
  );
};

export default Home;
