const profileFields = [
  { label: "Name", value: "DINH VO", compact: true },
  { label: "Role", value: "Frontend Developer" },
  { label: "Experience", value: "4 Years Building Web UI", compact: true },
];

const heroChips = ["4 Years", "Next.js", "React", "React Native", "NestJS"];

const sectionLinks = [
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
];

export function Banner() {
  return (
    <section className="cyber-banner cyber-banner--fixed-asides" aria-label="Portfolio hero banner">
      <div className="cyber-banner__scanline" aria-hidden="true" />

      <div className="cyber-banner__layout">
        <aside className="cyber-panel profile-panel">
          <div className="profile-panel__portrait">
            <video
              aria-hidden="true"
              autoPlay
              className="profile-panel__portrait-media"
              loop
              muted
              playsInline
              poster="/images/avatar.png"
              preload="metadata"
            >
              <source src="/media/avatar.mp4" type="video/mp4" />
            </video>
          </div>

          {profileFields.map((field) => (
            <div className="profile-panel__field" key={field.label}>
              <p className="profile-panel__label">{field.label}</p>
              <p
                className={
                  field.compact
                    ? "profile-panel__value profile-panel__value--compact"
                    : "profile-panel__value"
                }
              >
                {field.value}
              </p>
            </div>
          ))}

          <div className="profile-panel__field">
            <p className="profile-panel__label">Availability</p>
            <p className="cyber-badge">#OPENTOWORK</p>
          </div>

          <div className="profile-panel__field">
            <p className="profile-panel__label">FRAMEWORKS</p>
            <p className="cyber-badge">
              React / Next.js / UI Systems
              <span aria-hidden="true">»</span>
            </p>
          </div>

          <div className="profile-panel__motto">
            <p className="profile-panel__label">Motto</p>
            <p className="profile-panel__quote">
              Clean code.
              <br />
              Sharp UI.
              <br />
              Real product impact.
            </p>
          </div>
        </aside>

        <section className="hero-panel">
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
            {sectionLinks.map((section, index) => (
              <a
                className={index === 0 ? "hero-tab hero-tab--active" : "hero-tab"}
                href={section.href}
                key={section.title}
              >
                <strong>{section.title}</strong>
                <span>{section.caption}</span>
              </a>
            ))}
          </nav>
        </section>

        <aside className="cyber-panel contact-panel">
          <p className="contact-panel__title">Navigate</p>
          <p className="contact-panel__subtitle">Jump to key portfolio sections</p>

          <div className="contact-panel__list">
            {sectionLinks.map((section) => (
              <a className="contact-panel__item" href={section.href} key={section.title}>
                <p className="contact-panel__label">{section.title}</p>
                <p className="contact-panel__link">{section.detail}</p>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
