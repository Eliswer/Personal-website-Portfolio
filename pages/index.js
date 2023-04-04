import MainNavigation from "@/components/layout/MainNavigation";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
