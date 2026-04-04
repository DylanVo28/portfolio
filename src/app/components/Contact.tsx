const contactHudItems = [
  "STATUS: OPEN TO WORK",
  "TIME ZONE: GMT+7",
  "FOCUS: REACT / NEXT.JS",
];

const contactProfileLines = [
  "DINH VO",
  "FRONTEND DEVELOPER",
  "HO CHI MINH CITY",
];

const contactProfileBadges = [
  { label: "OPEN FOR HIRE", marker: "◁" },
  { label: "REMOTE READY", marker: "⟫" },
];

const contactTabs = [
  {
    title: "Beginning",
    description: "From UI foundations to production-ready interfaces.",
  },
  {
    title: "Logs",
    description: "React, Next.js, TypeScript, motion, and clean systems.",
  },
  {
    title: "Projects",
    description: "Web products, dashboards, DApps, and product websites.",
  },
  {
    title: "Contact",
    description: "Open to frontend roles and thoughtful product work.",
  },
];

const contactControls = [
  { label: "Response window", state: "24H" },
  { label: "Remote workflow", state: "✓" },
  { label: "Visual settings", state: "⚙" },
];

export function Contact() {
  return (
    <section
      className="contact-terminal portfolio-section-anchor"
      id="contact-section"
      aria-labelledby="contact-terminal-title"
    >
      <div className="contact-terminal__scanline" aria-hidden="true" />

      <div className="contact-terminal__stage">
        <div className="contact-terminal__hud" aria-label="Contact section status">
          {contactHudItems.map((item) => (
            <span className="contact-terminal__hud-item" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="contact-terminal__layout">
          <div className="contact-terminal__intro">
            <p className="contact-terminal__eyebrow">CONTACT PROTOCOL</p>
            <h2 className="contact-terminal__title" id="contact-terminal-title">
              CONNECT WITH ME
            </h2>
            <p className="contact-terminal__subtitle">
              WANNA CHAT? OR SHARE A PRODUCT, ROLE, JOB, OR IDEA THAT NEEDS SHARP
              FRONTEND EXECUTION?
            </p>
          </div>

          <form className="contact-form-panel" aria-label="Contact form">
            <div className="contact-form-panel__field">
              <label className="contact-form-panel__label" htmlFor="contact-name">
                HOW SHOULD I CALL YOU?
              </label>
              <input
                autoComplete="name"
                className="contact-form-panel__input"
                id="contact-name"
                name="name"
                placeholder="YOUR NAME"
                type="text"
              />
            </div>

            <div className="contact-form-panel__field">
              <label className="contact-form-panel__label" htmlFor="contact-email">
                SENDING FROM
              </label>
              <input
                autoComplete="email"
                className="contact-form-panel__input"
                id="contact-email"
                name="email"
                placeholder="YOUR.NAME@EXAMPLE.COM"
                type="email"
              />
            </div>

            <div className="contact-form-panel__field contact-form-panel__field--message">
              <label className="contact-form-panel__label" htmlFor="contact-message">
                TRANSMITTED DATA
              </label>
              <textarea
                className="contact-form-panel__textarea"
                id="contact-message"
                name="message"
                placeholder="HI, I WRITE TO YOU ABOUT..."
                rows={8}
              />
            </div>

            <div className="contact-form-panel__actions">
              <button
                className="contact-form-panel__button contact-form-panel__button--primary"
                type="button"
              >
                SEND MESSAGE [ENTER]
              </button>
              <button
                className="contact-form-panel__button contact-form-panel__button--secondary"
                type="reset"
              >
                DISCARD [ESC]
              </button>
            </div>
          </form>

          <section className="contact-viewer" aria-label="Cyberpunk contact preview">
            <div className="contact-viewer__frame">
              <div className="contact-viewer__topbar">
                <div className="contact-viewer__metric">
                  <span className="contact-viewer__metric-value">04</span>
                  <span className="contact-viewer__metric-label">YEARS</span>
                </div>

                <div className="contact-viewer__plus" aria-hidden="true">
                  +
                </div>

                <div className="contact-viewer__metric">
                  <span className="contact-viewer__metric-value">REACT</span>
                  <span className="contact-viewer__metric-label">NEXT / UI SYSTEMS</span>
                </div>
              </div>

              <div className="contact-viewer__profile" aria-hidden="true">
                <div className="contact-viewer__avatar" />

                <div className="contact-viewer__profile-lines">
                  {contactProfileLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}

                  {contactProfileBadges.map((badge) => (
                    <div className="contact-viewer__profile-badge" key={badge.label}>
                      <span>{badge.label}</span>
                      <span>{badge.marker}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-viewer__copy">
                BUILDING INTERFACES THAT FEEL FAST, CLEAR, AND PRODUCT-READY
                <br />
                FROM EARLY IDEA TO POLISHED SHIP
                <span className="contact-viewer__copy-sub">
                  PURE CSS COMPOSITION / CYBERPUNK CONTACT PANEL
                </span>
              </div>

              <div className="contact-viewer__art" aria-hidden="true">
                <div className="contact-viewer__glow-floor" />
                <div className="contact-viewer__wave-lines" />
                <div className="contact-viewer__tail" />
                <div className="contact-viewer__whale">
                  <div className="contact-viewer__eye" />
                </div>
                <div className="contact-viewer__fin" />
              </div>

              <div className="contact-viewer__tabs" aria-label="Contact preview tabs">
                {contactTabs.map((tab, index) => (
                  <article
                    className={
                      index === contactTabs.length - 1
                        ? "contact-viewer__tab contact-viewer__tab--active"
                        : "contact-viewer__tab"
                    }
                    key={tab.title}
                  >
                    <b>{tab.title}</b>
                    <span>{tab.description}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <div className="contact-terminal__controls">
            {contactControls.map((control) => (
              <div className="contact-terminal__control-row" key={control.label}>
                <span>{control.label}</span>
                <span className="contact-terminal__control-pill">{control.state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
