import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <>
      <Intro />

      <main className="landing-shell landing-shell--fixed-asides">
        <Banner />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
