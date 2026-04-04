import { HeroShowcase, heroSections } from "./HeroShowcase";

const profileFields = [
  { label: "Name", value: "DINH VO", compact: true },
  { label: "Role", value: "Frontend Developer" },
  { label: "Experience", value: "4 Years Building Web UI", compact: true },
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

        <HeroShowcase />

        <aside className="cyber-panel contact-panel">
          <p className="contact-panel__title">Navigate</p>
          <p className="contact-panel__subtitle">Jump to key portfolio sections</p>

          <div className="contact-panel__list">
            {heroSections.map((section) => (
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
