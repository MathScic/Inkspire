import Presentation from "@/components/Presentation";
import Hero from "../components/Hero";
import FlashGrid from "@/components/FlashGrid";
import Testimonials from "@/components/Testimonials";
import InfosPratique from "@/components/InfosPratique";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <Presentation />
      <FlashGrid />
      <Testimonials />
      <InfosPratique />
      <CallToAction />
    </main>
  );
}
