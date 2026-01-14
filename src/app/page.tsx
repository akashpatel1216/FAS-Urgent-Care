import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Insurances from "@/components/Insurances";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <CTABanner />
      <Pricing />
      <Services />
      <Gallery />
      <About />
      <Insurances />
      <Contact />
    </>
  );
}
