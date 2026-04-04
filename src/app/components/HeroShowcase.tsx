export const heroSections = [
  {
    title: "About",
    caption: "Who I am and how I approach frontend work.",
    detail: "Profile summary, skills, and delivery mindset.",
    href: "#about-section",
  },
  {
    title: "Experience",
    caption: "4 years shipping interfaces for real products.",
    detail: "Career timeline across frontend, DApp, and exchange work.",
    href: "#experience-section",
  },
  {
    title: "Projects",
    caption: "Selected case studies with clear product impact.",
    detail: "Product builds, technical scope, and implementation details.",
    href: "#projects-section",
  },
  {
    title: "Contact",
    caption: "Available for teams building thoughtful web apps.",
    detail: "Ways to connect for roles, products, and collaboration.",
    href: "#contact-section",
  },
] as const;

const heroChips = ["4 Years", "Next.js", "React", "React Native", "NestJS"];

type HeroShowcaseProps = {
  activeHref?: (typeof heroSections)[number]["href"];
  className?: string;
};

export function HeroShowcase({
  activeHref = "#about-section",
  className,
}: HeroShowcaseProps) {
  const classes = ["hero-panel", className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      <div className="hero-panel__copy">
        <h1 className="hero-panel__title">FRONTEND / WEB3 DEVELOPER</h1>

        <div className="hero-panel__chips" aria-label="Core strengths">
          {heroChips.map((chip) => (
            <span className="hero-panel__chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-panel__art" aria-hidden="true">
        <div className="hero-panel__image-frame">
          <video
            aria-hidden="true"
            autoPlay
            className="hero-panel__media"
            loop
            muted
            playsInline
            poster="/images/banner.png"
            preload="metadata"
          >
            <source src="/media/banner.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <nav className="hero-tabs" aria-label="Portfolio sections">
        {heroSections.map((section) => (
          <a
            className={
              section.href === activeHref ? "hero-tab hero-tab--active" : "hero-tab"
            }
            href={section.href}
            key={section.title}
          >
            <strong>{section.title}</strong>
            <span>{section.caption}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
