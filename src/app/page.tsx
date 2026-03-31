import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";

export default function Home() {
  return (
    <main className="landing-shell">
      <Banner />
      <AboutMe />
      <Experience />
    </main>
  );
}
