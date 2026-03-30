import Image from "next/image";

const profileFields = [
  { label: "Name", value: "Dinh Nguyen", compact: true },
  { label: "Occupation", value: "Frontend Engineer" },
  { label: "Stack", value: "Next.js / React / TS", compact: true },
];

const heroChips = ["Next 16", "React 19", "Motion UI", "Design Systems"];

const tabs = [
  { title: "Beginning", caption: "The story behind the work and the process." },
  { title: "Projects", caption: "Selected product builds with clear outcomes." },
  { title: "Systems", caption: "Reusable UI foundations for fast shipping." },
  { title: "Experiments", caption: "Bold visual studies and interaction tests." },
  { title: "Connect", caption: "Open channels for freelance and product teams." },
];

const rewards = [
  { label: "Polish", value: "+05" },
  { label: "Speed", value: "+21" },
];

const controls = [
  { label: "Motion System", state: "✓", tone: "positive" },
  { label: "Sound FX", state: "×", tone: "muted" },
  { label: "Visual Tuning", state: "⚙", tone: "accent" },
];

export default function Home() {
  return (
    <main className="landing-shell">
      <section className="cyber-banner" aria-labelledby="hero-title">
        <div className="cyber-banner__scanline" aria-hidden="true" />

        <header className="cyber-banner__topbar">
          <div className="topbar-metrics">
            <div className="topbar-metric">
              <span className="topbar-metric__value">12</span>
              <span className="topbar__tiny">Selected Cases</span>
            </div>

            <div className="plus-box" aria-hidden="true">
              +
            </div>

            <div className="topbar-metric">
              <span className="topbar-metric__value topbar-metric__value--accent">
                08
              </span>
              <span className="topbar__tiny">Systems Deployed</span>
            </div>
          </div>

          <div className="topbar-flags">
            <span>Status: Available</span>
            <span>Base: HCMC / Remote</span>
            <span>Stack: Next / TS</span>
          </div>
        </header>

        <div className="cyber-banner__layout">
          <aside className="cyber-panel profile-panel">
            <div className="profile-panel__portrait" aria-hidden="true">
              <span className="profile-panel__portrait-tag">DN</span>
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
              <p className="cyber-badge">Open For Select Projects</p>
            </div>

            <div className="profile-panel__field">
              <p className="profile-panel__label">Signal</p>
              <p className="cyber-badge">
                Product UI / Motion
                <span aria-hidden="true">»</span>
              </p>
            </div>

            <div className="profile-panel__motto">
              <p className="profile-panel__label">Motto</p>
              <p className="profile-panel__quote">
                Build fast.
                <br />
                Stay sharp.
                <br />
                Ship with taste.
              </p>
            </div>
          </aside>

          <section className="hero-panel">
            <div className="hero-panel__copy">
              <p className="hero-panel__eyebrow">
                Portfolio Transmission / App Router
              </p>


              <p className="hero-panel__description">
                I design and build frontend experiences for teams that want
                product UI with motion, structure, and a clear visual point of
                view.
              </p>

              <div className="hero-panel__chips" aria-label="Core strengths">
                {heroChips.map((chip) => (
                  <span className="hero-panel__chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>

              <span className="hero-panel__sub">
                Featured artwork / local asset / images/banner.png
              </span>
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
            <p className="mission-panel__title">Active Quest</p>
            <p className="mission-panel__subtitle">Portfolio Signal Line</p>

            <div className="mission-panel__group">
              <p className="mission-panel__label">Quest Name</p>
              <p className="mission-panel__name">Cyber Banner</p>
            </div>

            <div className="mission-panel__group">
              <p className="mission-panel__label">Goal</p>
              <p className="mission-panel__goal">
                Translate a cinematic concept into a responsive Next.js hero
                with strong art direction, clean implementation, and zero visual
                dead weight.
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
    </main>
  );
}
