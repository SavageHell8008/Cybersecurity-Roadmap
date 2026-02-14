
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Roadmap from "./components/sections/Roadmap";
import Footer from "./components/layout/Footer";
import StarField from "./components/canvas/StarField";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#050816] overflow-x-hidden text-white selection:bg-purple-500 selection:text-white">
      <StarField />
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <Roadmap />
        <Footer />
      </div>
    </div>
  );
};

export default App;
