import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="landing-shell">
      <Banner />
      <AboutMe />
      <Experience />
        <Projects />

    </main>
  );
}
