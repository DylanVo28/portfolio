import Image from "next/image";

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

const rewards = [
  { label: "UI", value: "+UX" },
  { label: "Perf", value: "+DX" },
];

const controls = [
  { label: "Responsive UI", state: "✓", tone: "positive" },
  { label: "Accessibility", state: "✓", tone: "positive" },
  { label: "Motion Detail", state: "⚙", tone: "accent" },
];

export function Banner() {
  return (
    <section className="cyber-banner" aria-label="Portfolio hero banner">
      <div className="cyber-banner__scanline" aria-hidden="true" />



      <div className="cyber-banner__layout">
        <aside className="cyber-panel profile-panel">
          <div className="profile-panel__portrait">
            <Image
              alt="Portrait of Dinh Vo"
              className="profile-panel__portrait-image"
              fill
              sizes="(max-width: 820px) 100vw, (max-width: 1180px) 50vw, 280px"
              src="/images/avatar.png"
            />
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
            <p className="hero-panel__eyebrow">
              Frontend Developer / 4 Years Experience
            </p>

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
              <Image
                alt=""
                className="hero-panel__image"
                fill
                priority
                sizes="(max-width: 820px) 100vw, (max-width: 1180px) 80vw, 60vw"
                src="/images/banner.png"
              />
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

        <aside className="cyber-panel mission-panel">
          <p className="mission-panel__title">Current Focus</p>
          <p className="mission-panel__subtitle">To become fullstack developer</p>

          <div className="mission-panel__group">
            <p className="mission-panel__label">Focus Area</p>
            <p className="mission-panel__name">Frontend Portfolio</p>
          </div>

          <div className="mission-panel__group">
            <p className="mission-panel__label">Goal</p>
            <p className="mission-panel__goal">
              Present 4 years of frontend experience through clear positioning,
              selected projects, and a strong visual identity that feels
              product-ready.
            </p>
          </div>

          <div className="mission-panel__group">
            <p className="mission-panel__label">Rewards</p>
            <div className="mission-panel__rewards">
              {rewards.map((reward) => (
                <div className="reward-card" key={reward.label}>
                  <div className="reward-card__icon" aria-hidden="true" />
                  <span className="reward-card__value">{reward.value}</span>
                  <span className="reward-card__label">{reward.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-panel__controls">
            {controls.map((control) => (
              <div className="control-row" key={control.label}>
                <span>{control.label}</span>
                <span className={`control-pill control-pill--${control.tone}`}>
                  {control.state}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
