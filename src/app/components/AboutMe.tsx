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

const aboutTabs = [
  { title: "Beginning", caption: "From markup basics to React product work." },
  { title: "Logs", caption: "Summary, capabilities, and delivery experience." },
  { title: "Achievements", caption: "Web, mobile, and DApp work across teams." },
  { title: "Creations", caption: "Frontend systems built with product focus." },
  { title: "Next", caption: "Keep improving depth, speed, and collaboration." },
];

export function AboutMe() {
  return (
    <section
      className="about-dossier portfolio-section-anchor"
      id="about-section"
      aria-labelledby="about-dossier-title"
    >
      <div className="about-dossier__scanline" aria-hidden="true" />
      <div className="about-dossier__layout">
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

          {/*<div className="about-records__tabs" aria-label="Career tabs">*/}
          {/*  {aboutTabs.map((tab, index) => (*/}
          {/*    <article*/}
          {/*      className={*/}
          {/*        index === 1*/}
          {/*          ? "about-records__tab about-records__tab--active"*/}
          {/*          : "about-records__tab"*/}
          {/*      }*/}
          {/*      key={tab.title}*/}
          {/*    >*/}
          {/*      <strong>{tab.title}</strong>*/}
          {/*      <span>{tab.caption}</span>*/}
          {/*    </article>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </section>
      </div>
    </section>
  );
}
