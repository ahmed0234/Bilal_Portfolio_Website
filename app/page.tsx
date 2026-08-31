import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/services/ServicesSection";

const page = () => {
  return (
    <div>
      {/* Viewport wrapper: compact on mobile, full-screen lock on desktop */}
      <div className="relative w-full h-auto md:h-screen md:overflow-hidden bg-[#020617]">
        {/* Background layer: covers hero area seamlessly */}
        <HeroBackground />

        {/* Navbar */}
        <Navbar />

        {/* Hero content */}
        <Hero />
      </div>
      <ServicesSection />
    </div>
  );
};

export default page;
