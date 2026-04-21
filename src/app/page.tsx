import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
