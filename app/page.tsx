import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      {/* Full-viewport wrapper: background covers navbar + hero seamlessly */}
      <div className="relative w-full h-screen bg-[#020617]">
        {/* Background layer: starts from absolute top, spans full 100vh */}
        <HeroBackground />

        {/* 10vh Navbar on top of background */}
        <Navbar />

        {/* Hero content: occupies remaining 90vh */}
        <Hero />
      </div>
    </div>
  );
};

export default page;
