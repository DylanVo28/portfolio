import Image from "next/image";
import type { CSSProperties } from "react";

const experienceProfileFields = [
  { label: "Name", value: "Dinh Nguyen" },
  { label: "Role", value: "Frontend / Fullstack Developer" },
  { label: "Timeline", value: "2021 / 2026 Career Track", compact: true },
];

const experienceStatusBadges = [
  { label: "Availability", value: "Open for frontend roles", marker: "◁" },
  { label: "Signal", value: "Product teams / Remote-friendly", marker: "⟫" },
];

const featuredExperiences = [
  {
    role: "Fullstack Developer",
    company: "What Exchange",
    period: "05/2025 - 04/2026",
    image: "/images/what.png",
    highlights: [
      "Implemented Hyperliquid to build a crypto exchange.",
      "Implemented the OKX API to build the Swap Dex.",
    ],
    footer: "Current role as of April 1, 2026",
    tier: "legendary",
  },
  {
    role: "Frontend Developer",
    company: "Coin98 Finance",
    period: "06/2023 - 03/2025",
    image: "/images/c98.png",
    highlights: [
      "Proposed and implemented innovative features to enhance user experience across DApp platforms.",
      "Integrated cutting-edge blockchain technologies for multi-chain DApp development.",
      "Collaborated with backend, DevOps, and business teams to deliver optimized solutions.",
      "Developed a high-impact fundraising platform, contributing to raising nearly $1 million.",
    ],
    footer: "Completed role",
    tier: "epic",
  },
];

const earlierExperiences = [
  {
    role: "Frontend Developer",
    company: "PVS Solution",
    period: "08/2022 - 03/2023",
    image: "/images/pvs.png",
    highlights: [
      "Delivered outsourced projects for partners like Mobifone, focusing on eCommerce platforms.",
      "Mentored interns, improving their technical skills and project contributions.",
      "Optimized website performance using server-side rendering (SSR) techniques.",
    ],
    footer: "Completed role",
    tier: "rare",
  },
  {
    role: "Frontend Fresher",
    company: "Mediastep",
    period: "07/2021 - 07/2022",
    image: "/images/mediastep.png",
    highlights: [
      "Built and optimized landing pages to boost user engagement and conversion rates.",
      "Worked closely with backend teams to develop new admin dashboard features.",
    ],
    footer: "Career foundation",
    tier: "uncommon",
  },
];

const experienceTabs = [
  { title: "Beginning", caption: "Early web foundations and first React builds." },
  { title: "Logs", caption: "Skills, strengths, and technical direction." },
  { title: "Experience", caption: "Milestones across frontend and DApp work." },
  { title: "Creations", caption: "Interfaces shipped with product intent." },
  { title: "Next", caption: "More ownership, sharper systems, better communication." },
];

const experienceRewards = [
  { label: "Roles", value: "+04" },
  { label: "Impact", value: "$1M" },
];

const experienceControls = [
  { label: "React ecosystem", state: "✓", tone: "positive" },
  { label: "Blockchain delivery", state: "✓", tone: "positive" },
  { label: "Cross-team execution", state: "⚙", tone: "accent" },
];

const trackedRoles = featuredExperiences.length + earlierExperiences.length;
const progressCurrent = trackedRoles;
const progressTotal = trackedRoles;
const progressAngle = `${(progressCurrent / progressTotal) * 360}deg`;

const progressRingStyle = {
  "--experience-progress": progressAngle,
} as CSSProperties;

export function Experience() {
  return (
    <section
      className="experience-dossier"
      aria-labelledby="experience-dossier-title"
    >
      <div className="experience-dossier__scanline" aria-hidden="true" />

      <header className="experience-dossier__topbar">
        <div className="experience-dossier__metrics">
          <div className="experience-dossier__metric">
            <span className="experience-dossier__metric-value">04</span>
            <span className="experience-dossier__tiny">Years Frontend</span>
          </div>

          <div className="plus-box" aria-hidden="true">
            +
          </div>

          <div className="experience-dossier__metric">
            <span className="experience-dossier__metric-value experience-dossier__metric-value--accent">
              03
            </span>
            <span className="experience-dossier__tiny">Years Blockchain</span>
          </div>
        </div>

        <div className="experience-dossier__signals">
          <span>Career timeline</span>
          <span>What Exchange / Coin98 / PVS / Mediastep</span>
          <span>Updated: 2026.04.01</span>
        </div>
      </header>

      <div className="experience-dossier__layout">
        <aside className="experience-panel experience-profile">
          <div className="experience-profile__avatar" aria-hidden="true">
            <span className="experience-profile__avatar-tag">XP</span>
          </div>

          {experienceProfileFields.map((field) => (
            <div className="experience-profile__field" key={field.label}>
              <p className="experience-profile__label">{field.label}</p>
              <p
                className={
                  field.compact
                    ? "experience-profile__value experience-profile__value--compact"
                    : "experience-profile__value"
                }
              >
                {field.value}
              </p>
            </div>
          ))}

          {experienceStatusBadges.map((badge) => (
            <div className="experience-profile__field" key={badge.label}>
              <p className="experience-profile__label">{badge.label}</p>
              <p className="experience-profile__badge">
                {badge.value}
                <span aria-hidden="true">{badge.marker}</span>
              </p>
            </div>
          ))}

          <div className="experience-profile__motto">
            <p className="experience-profile__label">Motto</p>
            <p className="experience-profile__quote">
              Ship with intent.
              <br />
              Learn in public.
              <br />
              Keep refining.
            </p>
          </div>
        </aside>

        <section
          className="experience-main experience-panel"
          aria-labelledby="experience-dossier-title"
        >
          <div className="experience-main__inner">
            <h2 className="experience-main__page-title" id="experience-dossier-title">
              Experience
            </h2>

            <div className="experience-main__top-area">
              <div className="experience-progress-col">
                <p className="experience-section-label">Progress</p>

                <div className="experience-progress-card">
                  <div
                    className="experience-progress-ring"
                    style={progressRingStyle}
                  >
                    <div className="experience-progress-value">
                      {progressCurrent}/{progressTotal}
                    </div>
                  </div>
                  <div className="experience-progress-text">Roles Tracked</div>
                </div>

                <p className="experience-progress-copy">
                  Career timeline from July 2021 to April 2026 across landing
                  pages, admin dashboards, eCommerce builds, multi-chain DApps,
                  fundraising products, and exchange integrations.
                </p>

                <p className="experience-challenge-btn">Active Since 07 / 2021</p>
              </div>

              <div className="experience-list-col">
                <p className="experience-section-label">Recent Experience</p>

                <div className="experience-achievement-list">
                  {featuredExperiences.map((item) => (
                    <article
                      className={`experience-item experience-item--${item.tier}`}
                      key={`${item.company}-${item.period}`}
                    >
                      <div className="experience-item__thumb-wrap">
                        <div className="experience-item__thumb">
                          <Image
                            alt={`${item.company} logo`}
                            className="experience-item__thumb-image"
                            fill
                            sizes="72px"
                            src={item.image}
                          />
                        </div>
                        <div
                          className={`experience-item__badge experience-item__badge--${item.tier}`}
                        >
                          {item.tier}
                        </div>
                      </div>

                      <div className="experience-item__content">
                        <h3 className="experience-item__title">{item.role}</h3>
                        <p className="experience-item__meta">
                          {item.company} ({item.period})
                        </p>
                        <ul className="experience-item__list">
                          {item.highlights.map((highlight) => (
                            <li className="experience-item__list-item" key={highlight}>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        <div className="experience-item__footer">{item.footer}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="experience-legend-list" aria-label="Experience legend">
                <div className="experience-legend-item">
                  <span className="experience-legend-box experience-legend-box--fill" />
                  <span>Current</span>
                </div>
                <div className="experience-legend-item">
                  <span className="experience-legend-box" />
                  <span>Recent</span>
                </div>
                <div className="experience-legend-item">
                  <span className="experience-legend-box" />
                  <span>Foundation</span>
                </div>
              </div>
            </div>

            <div className="experience-todo-section">
              <p className="experience-section-label">Earlier Experience</p>

              <div className="experience-todo-list">
                {earlierExperiences.map((item) => (
                  <article
                    className={`experience-item experience-item--${item.tier}`}
                    key={`${item.company}-${item.period}`}
                  >
                    <div className="experience-item__thumb-wrap">
                      <div className="experience-item__thumb">
                        <Image
                          alt={`${item.company} logo`}
                          className="experience-item__thumb-image"
                          fill
                          sizes="72px"
                          src={item.image}
                        />
                      </div>
                      <div
                        className={`experience-item__badge experience-item__badge--${item.tier}`}
                      >
                        {item.tier}
                      </div>
                    </div>

                    <div className="experience-item__content">
                      <h3 className="experience-item__title">{item.role}</h3>
                      <p className="experience-item__meta">
                        {item.company} ({item.period})
                      </p>
                      <ul className="experience-item__list">
                        {item.highlights.map((highlight) => (
                          <li className="experience-item__list-item" key={highlight}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="experience-item__footer">{item.footer}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-tabs" aria-label="Experience tabs">
            {experienceTabs.map((tab, index) => (
              <article
                className={
                  index === 2
                    ? "experience-tab experience-tab--active"
                    : "experience-tab"
                }
                key={tab.title}
              >
                <strong>{tab.title}</strong>
                <span>{tab.caption}</span>
              </article>
            ))}
          </div>
        </section>

        <aside className="experience-panel experience-sidebar">
          <p className="experience-sidebar__title">
            <span>Active Quest</span>
            <span aria-hidden="true">◁</span>
          </p>
          <p className="experience-sidebar__subtitle">Career Progression Line</p>

          <div className="experience-sidebar__group">
            <p className="experience-sidebar__label">Quest Name</p>
            <p className="experience-sidebar__name">Frontend to exchange systems</p>
          </div>

          <div className="experience-sidebar__group">
            <p className="experience-sidebar__label">Goal</p>
            <p className="experience-sidebar__goal">
              Keep growing from strong frontend delivery into broader fullstack
              ownership, especially in blockchain products, exchange flows, and
              high-impact product teams.
            </p>
          </div>

          <div className="experience-sidebar__group">
            <p className="experience-sidebar__label">Rewards</p>
            <div className="experience-sidebar__rewards">
              {experienceRewards.map((reward) => (
                <div className="reward-card" key={reward.label}>
                  <div className="reward-card__icon" aria-hidden="true" />
                  <span className="reward-card__value">{reward.value}</span>
                  <span className="reward-card__label">{reward.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-sidebar__controls">
            {experienceControls.map((control) => (
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
