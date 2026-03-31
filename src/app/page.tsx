import { AboutMe } from "./components/AboutMe";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <main className="landing-shell">
      <Banner />
      <AboutMe />
    </main>
  );
}
