const aboutProfileFields = [
  { label: "Name", value: "DINH VO" },
  { label: "Occupation", value: "Frontend Developer" },
  { label: "Focus", value: "Web / Mobile / Blockchain", compact: true },
];

const aboutStatusBadges = [
  { label: "Availability", value: "Open for frontend roles", marker: "◁" },
  { label: "Network", value: "Remote-friendly collaboration", marker: "⟫" },
];

const aboutSummary =
  "A dedicated Frontend Developer with over 4 years of experience building websites and mobile applications, complemented by 3 years specializing in blockchain and DApp development. Proficient in modern JavaScript frameworks and blockchain technologies, I am passionate about delivering innovative solutions, enhancing user experiences, and continuously advancing my technical expertise to contribute effectively to team success.";

const aboutSkillCards = [
  {
    title: "Languages",
    body: "JavaScript, TypeScript.",
  },
  {
    title: "Frameworks / Library",
    body: "ReactJS, NextJS, React Native, NestJS, Tailwind CSS, Zustand, React Query, and more.",
  },
  {
    title: "Blockchain",
    body: "Web3.js, Wagmi, WalletConnect, Remix IDE, and DApp-oriented workflows.",
  },
  {
    title: "Other",
    body: "Code splitting, lazy loading, prefetching, preloading.",
  },
  {
    title: "Soft Skills",
    body: "English conversation.",
  },
];

const aboutArchive = [
  { title: "UI Foundations Online", date: "2019.09" },
  { title: "First React Production Build", date: "2021.03" },
  { title: "Web3 Dashboard Work", date: "2022.08" },
  { title: "Next.js Product Interfaces", date: "2023.11" },
  { title: "Design System Discipline", date: "2024.06" },
  { title: "Portfolio Rebuild", date: "2026.03" },
];

const aboutTabs = [
  { title: "Beginning", caption: "From markup basics to React product work." },
  { title: "Logs", caption: "Summary, capabilities, and delivery experience." },
  { title: "Achievements", caption: "Web, mobile, and DApp work across teams." },
  { title: "Creations", caption: "Frontend systems built with product focus." },
  { title: "Next", caption: "Keep improving depth, speed, and collaboration." },
];

const aboutRewards = [
  { label: "Frontend", value: "+WEB" },
  { label: "Blockchain", value: "+DAPP" },
];

const aboutControls = [
  { label: "Responsive by default", state: "✓", tone: "positive" },
  { label: "DApp experience", state: "✓", tone: "positive" },
  { label: "Always iterating", state: "⚙", tone: "accent" },
];

export function AboutMe() {
  return (
    <section className="about-dossier" aria-labelledby="about-dossier-title">
      <div className="about-dossier__scanline" aria-hidden="true" />

      <header className="about-dossier__topbar">
        <div className="about-dossier__metrics">
          <div className="about-dossier__metric">
            <span className="about-dossier__metric-value">04</span>
            <span className="about-dossier__tiny">Years Shipping UI</span>
          </div>

          <div className="plus-box" aria-hidden="true">
            +
          </div>

          <div className="about-dossier__metric">
            <span className="about-dossier__metric-value about-dossier__metric-value--accent">
              03
            </span>
            <span className="about-dossier__tiny">Years Blockchain / DApp</span>
          </div>
        </div>

        <div className="about-dossier__signals">
          <span>Ho Chi Minh City / Vietnam</span>
          <span>Websites / Mobile Apps / DApps</span>
          <span>Remote-ready workflow</span>
        </div>
      </header>

      <div className="about-dossier__layout">
        <aside className="about-panel about-profile">
          <div className="about-profile__avatar" aria-hidden="true">
            <span className="about-profile__avatar-tag">DN</span>
          </div>

          {aboutProfileFields.map((field) => (
            <div className="about-profile__field" key={field.label}>
              <p className="about-profile__label">{field.label}</p>
              <p
                className={
                  field.compact
                    ? "about-profile__value about-profile__value--compact"
                    : "about-profile__value"
                }
              >
                {field.value}
              </p>
            </div>
          ))}

          {aboutStatusBadges.map((badge) => (
            <div className="about-profile__field" key={badge.label}>
              <p className="about-profile__label">{badge.label}</p>
              <p className="about-profile__badge">
                {badge.value}
                <span aria-hidden="true">{badge.marker}</span>
              </p>
            </div>
          ))}

          <div className="about-profile__motto">
            <p className="about-profile__label">Motto</p>
            <p className="about-profile__quote">
              Clean systems.
              <br />
              Sharp interfaces.
              <br />
              Reliable delivery.
            </p>
          </div>
        </aside>

        <section
          className="about-records about-panel"
          aria-labelledby="about-dossier-title"
        >
          <div className="about-records__inner">
            <p className="about-records__eyebrow">Data log dump initialized.</p>

            <div className="about-records__header">
              <h2 className="about-records__title" id="about-dossier-title">
                Log Entry: About Me / Frontend Track
              </h2>
              <span className="about-records__date">Date: 2026.04.01</span>
            </div>

            <p className="about-records__meta">
              Location: Ho Chi Minh City, Vietnam
              <br />
              Experience: 4+ years frontend, 3 years blockchain / DApp development
            </p>

            <div className="about-records__cards">
              <article className="about-card about-card--summary">
                <h3 className="about-card__title">Summary</h3>
                <p>{aboutSummary}</p>
              </article>

              {aboutSkillCards.map((card) => (
                <article className="about-card" key={card.title}>
                  <h3 className="about-card__title">{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>

            <div className="about-records__preview" aria-hidden="true">
              <span>Skills matrix loaded</span>
              <span className="about-records__preview-icon" />
            </div>


          </div>

          <div className="about-records__tabs" aria-label="Career tabs">
            {aboutTabs.map((tab, index) => (
              <article
                className={
                  index === 1
                    ? "about-records__tab about-records__tab--active"
                    : "about-records__tab"
                }
                key={tab.title}
              >
                <strong>{tab.title}</strong>
                <span>{tab.caption}</span>
              </article>
            ))}
          </div>
        </section>

        <aside className="about-panel about-sidebar">
          <p className="about-sidebar__title">
            <span>Active Quest</span>
            <span aria-hidden="true">◁</span>
          </p>
          <p className="about-sidebar__subtitle">The Frontend Skill Tree</p>

          <div className="about-sidebar__group">
            <p className="about-sidebar__label">Quest Name</p>
            <p className="about-sidebar__name">Frontend + DApp Builder</p>
          </div>

          <div className="about-sidebar__group">
            <p className="about-sidebar__label">Goal</p>
            <p className="about-sidebar__goal">
              Deliver websites, mobile applications, and DApps with modern
              JavaScript tooling, strong UX thinking, and reliable team
              collaboration.
            </p>
          </div>

          <div className="about-sidebar__group">
            <p className="about-sidebar__label">Rewards</p>
            <div className="about-sidebar__rewards">
              {aboutRewards.map((reward) => (
                <div className="reward-card" key={reward.label}>
                  <div className="reward-card__icon" aria-hidden="true" />
                  <span className="reward-card__value">{reward.value}</span>
                  <span className="reward-card__label">{reward.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-sidebar__controls">
            {aboutControls.map((control) => (
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
