const profileFields = [
  { label: "Name", value: "DINH VO", compact: true },
  { label: "Role", value: "Frontend Developer" },
  { label: "Experience", value: "4 Years Building Web UI", compact: true },
];

const heroChips = ["4 Years", "Next.js", "React", "React Native", "NestJS"];

const tabs = [
  { title: "About", caption: "Who I am and how I approach frontend work." },
  { title: "Projects", caption: "Selected case studies with clear product impact." },
  { title: "Stack", caption: "React, Next.js, TypeScript, UI systems, motion." },
  { title: "Experience", caption: "4 years shipping interfaces for real products." },
  { title: "Contact", caption: "Available for teams building thoughtful web apps." },
];

const contactItems = [
  {
    label: "Phone",
    links: [{ href: "tel:+84392857487", text: "+84 392 857 487" }],
  },
  {
    label: "Email",
    links: [{ href: "mailto:kedinhvo2000@gmail.com", text: "kedinhvo2000@gmail.com" }],
  },
  {
    label: "LinkedIn",
    links: [
      {
        href: "https://www.linkedin.com/in/dinh-vo-a81835139/",
        text: "linkedin.com/in/dinh-vo-a81835139",
      },
    ],
  },
  {
    label: "GitHub",
    links: [
      { href: "https://github.com/dinhvdk", text: "github.com/dinhvdk" },
      { href: "https://github.com/DylanVo28", text: "github.com/DylanVo28" },
    ],
  },
  {
    label: "My Website",
    links: [{ href: "https://dinhvdk.vercel.app/about", text: "dinhvdk.vercel.app/about" }],
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
            {tabs.map((tab, index) => (
              <button
                className={index === 0 ? "hero-tab hero-tab--active" : "hero-tab"}
                key={tab.title}
                type="button"
              >
                <strong>{tab.title}</strong>
                <span>{tab.caption}</span>
              </button>
            ))}
          </nav>
        </section>

        <aside className="cyber-panel contact-panel">
          <p className="contact-panel__title">Contact</p>
          <p className="contact-panel__subtitle">Direct channels and public profiles</p>

          <div className="contact-panel__list">
            {contactItems.map((item) => (
              <div className="contact-panel__item" key={item.label}>
                <p className="contact-panel__label">{item.label}</p>

                <div className="contact-panel__links">
                  {item.links.map((link) => (
                    <a
                      className="contact-panel__link"
                      href={link.href}
                      key={link.href}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
