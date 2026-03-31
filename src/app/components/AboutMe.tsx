const aboutProfileFields = [
  { label: "Name", value: "Dinh Nguyen" },
  { label: "Occupation", value: "Frontend Developer" },
  { label: "Core Stack", value: "Next.js / React / TypeScript", compact: true },
];

const aboutStatusBadges = [
  { label: "Availability", value: "Open for frontend roles", marker: "◁" },
  { label: "Network", value: "Remote-friendly collaboration", marker: "⟫" },
];

const aboutLogCards = [
  {
    title: "Who I Am",
    body: "Frontend-focused engineer with four years of experience translating product ideas into polished web interfaces.",
  },
  {
    title: "How I Work",
    body: "I care about information hierarchy, motion restraint, performance budgets, and components that stay maintainable after handoff.",
  },
  {
    title: "What I Build",
    body: "I ship marketing sites, dashboards, internal tools, and web3 surfaces that need clear UX instead of generic templates.",
  },
  {
    title: "What I Want Next",
    body: "Join a team that values strong product thinking, close design collaboration, and high standards for implementation detail.",
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
  { title: "Logs", caption: "Personal notes, process, and delivery style." },
  { title: "Achievements", caption: "Interfaces shipped with product impact." },
  { title: "Creations", caption: "Selected builds across web and web3." },
  { title: "Next", caption: "Sharper systems, better motion, stronger teams." },
];

const aboutRewards = [
  { label: "Systems", value: "+UI" },
  { label: "Clarity", value: "+DX" },
];

const aboutControls = [
  { label: "Responsive by default", state: "✓", tone: "positive" },
  { label: "Design-system mindset", state: "✓", tone: "positive" },
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
              FE
            </span>
            <span className="about-dossier__tiny">Frontend Specialist</span>
          </div>
        </div>

        <div className="about-dossier__signals">
          <span>Ho Chi Minh City / Vietnam</span>
          <span>Remote-ready workflow</span>
          <span>Product teams / Startup pace</span>
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
              <span className="about-records__date">Date: 2026.03.31</span>
            </div>

            <p className="about-records__meta">
              Location: Ho Chi Minh City, Vietnam
              <br />
              Status: Open to frontend and product-facing opportunities
            </p>

            <div className="about-records__cards">
              {aboutLogCards.map((card) => (
                <article className="about-card" key={card.title}>
                  <h3 className="about-card__title">{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>

            <div className="about-records__preview" aria-hidden="true">
              <span>Portfolio snapshot loaded</span>
              <span className="about-records__preview-icon" />
            </div>

            <div className="about-records__archive">
              <p className="about-records__archive-title">Older logs</p>

              <div className="about-records__archive-list">
                {aboutArchive.map((entry) => (
                  <div className="about-records__archive-item" key={entry.title}>
                    <span>{entry.title}</span>
                    <span>{entry.date}</span>
                  </div>
                ))}
              </div>
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
            <p className="about-sidebar__name">Product-grade UI</p>
          </div>

          <div className="about-sidebar__group">
            <p className="about-sidebar__label">Goal</p>
            <p className="about-sidebar__goal">
              Build interfaces that feel intentional, load fast, stay
              maintainable, and communicate product value without visual noise.
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
