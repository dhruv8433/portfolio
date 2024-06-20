import AboutMe from "@/components/AboutMe";
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
    </div>
  );
}
