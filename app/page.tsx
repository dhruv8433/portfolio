import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
