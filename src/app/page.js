import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
