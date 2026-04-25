import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PotentialSection } from "@/components/PotentialSection";
import { Services } from "@/components/Services";
import { ServicePackages } from "@/components/ServicePackages";
import { TestCatalog } from "@/components/TestCatalog";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Booking } from "@/components/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PotentialSection />
      <Services />
      <ServicePackages />
      <TestCatalog />
      <Testimonials />
      <Faq />
      <Booking />
    </>
  );
}
