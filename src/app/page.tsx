import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="landing-shell">
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
