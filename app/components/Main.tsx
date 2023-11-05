import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Cover from "./Cover";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main() {
  return (
    <main className="bg-neutral-950 border-opacity-10 border-b border-b-white">
      <Cover />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
