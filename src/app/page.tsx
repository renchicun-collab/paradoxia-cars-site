import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import BrandConcept from "@/components/sections/BrandConcept";
import FeaturedCars from "@/components/sections/FeaturedCars";
import Articles from "@/components/sections/Articles";
import ShortVideo from "@/components/sections/ShortVideo";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandConcept />
      <FeaturedCars />
      <Articles />
      <ShortVideo />
      <Contact />
      <Footer />
    </>
  );
}
