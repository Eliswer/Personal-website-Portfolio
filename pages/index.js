import MainNavigation from "@/components/layout/MainNavigation";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}
