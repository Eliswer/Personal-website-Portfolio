import { useState } from "react";

import MainNavigation from "@/components/layout/MainNavigation";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [visiting, setVisited] = useState({
    aboutMe: true,
    skills: false,
    projects: false,
    contactMe: false,
  });

  const setAboutMeToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: true,
      skills: false,
      projects: false,
      contactMe: false,
    });
  };

  const setSkillsToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: false,
      skills: true,
      projects: false,
      contactMe: false,
    });
  };

  const setProjectsToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: false,
      skills: false,
      projects: true,
      contactMe: false,
    });
  };

  const setContactMeToVisited = () => {
    setVisited({
      ...visiting,
      aboutMe: false,
      skills: false,
      projects: false,
      contactMe: true,
    });
  };

  return (
    <>
      <MainNavigation
        setAboutMeToVisited={setAboutMeToVisited}
        setContactMeToVisited={setContactMeToVisited}
        setProjectsToVisited={setProjectsToVisited}
        setSkillsToVisited={setSkillsToVisited}
        visiting={visiting}
      />
      <AboutMe setAboutMeToVisited={setAboutMeToVisited} />
      <Skills setSkillsToVisited={setSkillsToVisited} />
      <Projects setProjectsToVisited={setProjectsToVisited} />
      <ContactMe setContactMeToVisited={setContactMeToVisited} />
      <Footer />
    </>
  );
}
