"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  image: string;
  category: string;
  domain: string;
  published: string;
  description: string;
  role: string;
  technologies: string[];
  team: string;
  menuLeft?: string;
  menuRight?: string;
  heroLabel?: string;
  sideMenu?: string;
  sideHeadingLines?: string[];
  sideHeadlineLines?: string[];
  links?: ProjectLink[];
};

const projectProfileFields = [
  { label: "Name", value: "Dinh Nguyen" },
  { label: "Role", value: "Frontend Developer" },
  { label: "Focus", value: "Next.js / React Native / Web3", compact: true },
];

const projectStatusBadges = [
  { label: "Availability", value: "Open for frontend roles", marker: "◁" },
  { label: "Signal", value: "Web3 / mobile / eCommerce delivery", marker: "⟫" },
];

const projects: Project[] = [
  {
    title: "Starship",
    image: "/images/starship.png",
    category: "DApp Blockchain / Multichain Launchpad",
    domain: "Web3 launchpad connecting startups with investors",
    published: "Coin98 team · 10 members",
    description:
      "Starship is a multichain launchpad connecting startups with investors in Web3.",
    role:
      'Developed the "NFT Fan Card" feature for token claiming across specific phases.',
    technologies: [
      "NextJS",
      "JavaScript",
      "Web3.js",
      "React Query",
      "TailwindCSS",
      "ERC20",
      "ERC721",
    ],
    team: "10 members (Coin98 team)",
    menuLeft: "Launch · Projects · Claim · Fan Card",
    menuRight: "Investors · Wallet · Menu",
    heroLabel: "STARSHIP",
    sideMenu: "Launch · Startup · NFT · Claim",
    sideHeadingLines: ["Star", "ship"],
    sideHeadlineLines: ["Launchpad", "for Web3 rounds"],
  },
  {
    title: "OneID",
    image: "/images/oneid.png",
    category: "DApp Blockchain / Digital Identity",
    domain: "Multi-chain identity solution on Viction blockchain",
    published: "Coin98 team · 10 members",
    description:
      "OneID is a multi-chain digital identity solution built on the Viction blockchain.",
    role:
      'Built KYC feature using Synaps-sdk and developed "Set Primary" for cross-platform Web3 profiles.',
    technologies: [
      "NextJS",
      "JavaScript",
      "React Query",
      "TailwindCSS",
      "Turborepo",
      "Ethereum Provider",
    ],
    team: "10 members (Coin98 team)",
    menuLeft: "Identity · KYC · Profile · Viction",
    menuRight: "Wallet · Primary · Menu",
    heroLabel: "ONEID",
    sideMenu: "Identity · KYC · Profile · Viction",
    sideHeadingLines: ["One", "ID"],
    sideHeadlineLines: ["Identity hub", "across chains"],
  },
  {
    title: "3 Tốt",
    image: "/images/3tot.png",
    category: "Mobile App / AgriTech",
    domain: "Smart shrimp-farming optimization app",
    published: "Outsource team · 8 members",
    description:
      "3 Tốt is an intelligent solution that helps shrimp farmers manage and optimize their farming processes.",
    role:
      "Developed mobile app for shrimp farmers to optimize farming processes.",
    technologies: ["React Native", "JavaScript", "Expo"],
    team: "8 members (outsource)",
    menuLeft: "Farm · Pond · Alerts · Reports",
    menuRight: "Weather · Feed · Menu",
    heroLabel: "3 TOT",
    sideMenu: "Pond · Growth · Costs · Logs",
    sideHeadingLines: ["3", "Tot"],
    sideHeadlineLines: ["Smart tools", "for shrimp farms"],
    links: [
      {
        label: "CH Play",
        href: "https://play.google.com/store/apps/details?id=vns.pre.batot&hl=vi",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ae/app/m%C3%B4-h%C3%ACnh-nu%C3%B4i-t%C3%B4m-3-t%E1%BB%91t/id6720758750",
      },
    ],
  },
  {
    title: "Mobifone",
    image: "/images/mobifone.png",
    category: "Ecommerce / Store Website",
    domain: "SSR commerce platform with dynamic SEO",
    published: "PVS team · 10 members",
    description:
      "Mobifone is an eCommerce store website in the eCommerce domain.",
    role:
      "Built a fully functional eCommerce platform with SSR and dynamic SEO.",
    technologies: ["NextJS", "JavaScript", "ReactJS"],
    team: "10 members (PVS team)",
    menuLeft: "Store · Offers · Devices · Plans",
    menuRight: "Cart · SSR · SEO",
    heroLabel: "MOBIFONE",
    sideMenu: "Phones · Plans · Checkout · Search",
    sideHeadingLines: ["Mobi", "fone"],
    sideHeadlineLines: ["Commerce flow", "with SSR + SEO"],
  },
];

const projectTabs = [
  { title: "Launchpad", caption: "Starship token-claiming flows for Web3 fundraising." },
  { title: "Identity", caption: "OneID profile and KYC work on Viction." },
  { title: "Mobile", caption: "3 Tốt app for shrimp-farming operations." },
  { title: "Creations", caption: "4 shipped case files across Web3, mobile, commerce." },
  { title: "Commerce", caption: "Mobifone SSR storefront with dynamic SEO." },
];

const projectRewards = [
  { label: "Projects", value: "+04" },
  { label: "Domains", value: "+03" },
];

const projectControls = [
  { label: "Web3 products", state: "✓", tone: "positive" },
  { label: "Mobile delivery", state: "✓", tone: "positive" },
  { label: "SSR / SEO", state: "⚙", tone: "accent" },
];

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];
  const leftProject =
    projects[(activeProjectIndex - 1 + projects.length) % projects.length];
  const rightProject = projects[(activeProjectIndex + 1) % projects.length];
  const progressWidth = `${((activeProjectIndex + 1) / projects.length) * 100}%`;

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) =>
      (currentIndex - 1 + projects.length) % projects.length,
    );
  };

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  return (
    <section className="projects-dossier" aria-labelledby="projects-dossier-title">
      <div className="projects-dossier__scanline" aria-hidden="true" />

      <header className="projects-dossier__topbar">
        <div className="projects-dossier__metrics">
          <div className="projects-dossier__metric">
            <span className="projects-dossier__metric-value">04</span>
            <span className="projects-dossier__tiny">Selected Builds</span>
          </div>

          <div className="plus-box" aria-hidden="true">
            +
          </div>

          <div className="projects-dossier__metric">
            <span className="projects-dossier__metric-value projects-dossier__metric-value--accent">
              04
            </span>
            <span className="projects-dossier__tiny">Years Shipping UI</span>
          </div>
        </div>

        <div className="projects-dossier__signals">
          <span>Web3 DApps / mobile apps / SSR commerce</span>
          <span>Coin98 / outsource / PVS delivery track</span>
          <span>Updated: 2026.04.01</span>
        </div>
      </header>

      <div className="projects-dossier__layout">
        <aside className="projects-panel projects-profile">
          <div className="projects-profile__avatar" aria-hidden="true">
            <span className="projects-profile__avatar-tag">PX</span>
          </div>

          {projectProfileFields.map((field) => (
            <div className="projects-profile__field" key={field.label}>
              <p className="projects-profile__label">{field.label}</p>
              <p
                className={
                  field.compact
                    ? "projects-profile__value projects-profile__value--compact"
                    : "projects-profile__value"
                }
              >
                {field.value}
              </p>
            </div>
          ))}

          {projectStatusBadges.map((badge) => (
            <div className="projects-profile__field" key={badge.label}>
              <p className="projects-profile__label">{badge.label}</p>
              <p className="projects-profile__badge">
                {badge.value}
                <span aria-hidden="true">{badge.marker}</span>
              </p>
            </div>
          ))}

          <div className="projects-profile__motto">
            <p className="projects-profile__label">Motto</p>
            <p className="projects-profile__quote">
              Build with clarity.
              <br />
              Style with intent.
              <br />
              Ship what holds up.
            </p>
          </div>
        </aside>

        <section className="projects-main" aria-labelledby="projects-dossier-title">
          <div className="projects-main__inner">
            <p className="projects-main__page-title">Creations</p>

            <div className="projects-carousel" aria-label="Selected project previews">
              <button
                className="projects-carousel__arrow projects-carousel__arrow--left"
                aria-label="Show previous project"
                onClick={showPreviousProject}
                type="button"
              >
                ‹
              </button>

              <article className="project-card-3d project-card-3d--left">
                <p className="project-card__side-published">{leftProject.published}</p>

                <div className="project-card__media-frame project-card__media-frame--side">
                  <Image
                    alt={`${leftProject.title} preview`}
                    className="project-card__image"
                    fill
                    sizes="170px"
                    src={leftProject.image}
                  />
                  <div
                    className="project-card__image-overlay project-card__image-overlay--side"
                    aria-hidden="true"
                  />
                  <p className="project-card__side-menu">{leftProject.sideMenu}</p>
                  <p className="project-card__side-heading">
                    {leftProject.sideHeadingLines?.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>

                <p className="project-card__side-btn">Case File</p>

                <p className="project-card__side-caption">
                  {leftProject.title}
                  <small>{leftProject.category}</small>
                </p>
              </article>

              <article className="project-card-3d project-card-3d--center">
                <p className="project-card__published">{activeProject.published}</p>

                <div className="project-card__media-frame project-card__media-frame--center">
                  <Image
                    alt={`${activeProject.title} preview`}
                    className="project-card__image"
                    fill
                    priority={activeProjectIndex === 0}
                    sizes="370px"
                    src={activeProject.image}
                  />
                  <div
                    className="project-card__image-overlay project-card__image-overlay--center"
                    aria-hidden="true"
                  />
                  <div className="project-card__top-menu">
                    <span>{activeProject.menuLeft}</span>
                    <span>{activeProject.menuRight}</span>
                  </div>
                  {/*<p className="project-card__headline">{activeProject.heroLabel}</p>*/}

                  {/*<div className="project-card__bottom-strip" aria-hidden="true">*/}
                  {/*  <div className="project-card__strip project-card__strip--route" />*/}
                  {/*  <div className="project-card__strip project-card__strip--surface" />*/}
                  {/*  <div className="project-card__strip project-card__strip--accent" />*/}
                  {/*  <div className="project-card__strip project-card__strip--light" />*/}
                  {/*</div>*/}
                </div>

                <p className="project-card__view-live">Case File</p>
              </article>

              <article className="project-card-3d project-card-3d--right">
                <p className="project-card__side-published">{rightProject.published}</p>

                <div className="project-card__media-frame project-card__media-frame--side">
                  <Image
                    alt={`${rightProject.title} preview`}
                    className="project-card__image"
                    fill
                    sizes="170px"
                    src={rightProject.image}
                  />
                  <div
                    className="project-card__image-overlay project-card__image-overlay--side"
                    aria-hidden="true"
                  />
                  <p className="project-card__right-headline">
                    {rightProject.sideHeadlineLines?.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>

                <p className="project-card__side-btn">Case File</p>

                <p className="project-card__side-caption">
                  {rightProject.title}
                  <small>{rightProject.category}</small>
                </p>
              </article>

              <button
                className="projects-carousel__arrow projects-carousel__arrow--right"
                aria-label="Show next project"
                onClick={showNextProject}
                type="button"
              >
                ›
              </button>
            </div>

            <div className="projects-copy">
              <h2 className="projects-copy__title" id="projects-dossier-title">
                {activeProject.title}
              </h2>
              <p className="projects-copy__sub">{activeProject.category}</p>
              <p className="projects-copy__domain">{activeProject.domain}</p>
              <p className="projects-copy__desc">{activeProject.description}</p>

              <div className="projects-copy__meta">
                <div className="projects-copy__meta-row">
                  <span className="projects-copy__meta-label">Role</span>
                  <span className="projects-copy__meta-value">{activeProject.role}</span>
                </div>
                <div className="projects-copy__meta-row">
                  <span className="projects-copy__meta-label">Technologies</span>
                  <span className="projects-copy__meta-value">
                    {activeProject.technologies.join(", ")}
                  </span>
                </div>
                <div className="projects-copy__meta-row">
                  <span className="projects-copy__meta-label">Team Size</span>
                  <span className="projects-copy__meta-value">{activeProject.team}</span>
                </div>
              </div>
            </div>

            <div className="projects-progress">
              <div className="projects-progress__line">
                <div
                  className="projects-progress__fill"
                  style={{ width: progressWidth }}
                />
                <div className="projects-progress__tail" />
              </div>
              <div className="projects-progress__fraction">
                {activeProjectIndex + 1}/{projects.length}
              </div>
            </div>

            <div className="projects-roster">
              <p className="projects-roster__title">Project Logbook</p>

              <div className="projects-roster__list">
                {projects.map((project, index) => (
                  <article
                    className={
                      index === activeProjectIndex
                        ? "projects-roster__item projects-roster__item--active"
                        : "projects-roster__item"
                    }
                    key={project.title}
                  >
                    <div className="projects-roster__head">
                      <div>
                        <h3 className="projects-roster__name">{project.title}</h3>
                        <p className="projects-roster__category">{project.category}</p>
                      </div>
                      <span className="projects-roster__team">{project.team}</span>
                    </div>

                    <p className="projects-roster__description">{project.description}</p>

                    <p className="projects-roster__detail">
                      <span className="projects-roster__detail-label">Role</span>
                      <span>{project.role}</span>
                    </p>

                    <p className="projects-roster__detail">
                      <span className="projects-roster__detail-label">Tech</span>
                      <span>{project.technologies.join(", ")}</span>
                    </p>

                    {project.links ? (
                      <div className="projects-roster__links">
                        {project.links.map((link) => (
                          <a
                            className="projects-roster__link"
                            href={link.href}
                            key={link.label}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="projects-tabs" aria-label="Projects tabs">
            {projectTabs.map((tab, index) => (
              <article
                className={
                  index === 3 ? "project-tab project-tab--active" : "project-tab"
                }
                key={tab.title}
              >
                <strong>{tab.title}</strong>
                <span>{tab.caption}</span>
              </article>
            ))}
          </div>
        </section>

        <aside className="projects-panel projects-sidebar">
          <p className="projects-sidebar__title">
            <span>Active Quest</span>
            <span aria-hidden="true">◁</span>
          </p>
          <p className="projects-sidebar__subtitle">Selected Frontend Work</p>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Quest Name</p>
            <p className="projects-sidebar__name">{activeProject.title}</p>
          </div>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Domain</p>
            <p className="projects-sidebar__text">{activeProject.domain}</p>
          </div>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Project Summary</p>
            <p className="projects-sidebar__goal">{activeProject.description}</p>
          </div>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Role</p>
            <p className="projects-sidebar__text">{activeProject.role}</p>
          </div>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Tech Stack</p>
            <p className="projects-sidebar__text">
              {activeProject.technologies.join(", ")}
            </p>
          </div>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Team Size</p>
            <p className="projects-sidebar__text">{activeProject.team}</p>
          </div>

          <div className="projects-sidebar__group">
            <p className="projects-sidebar__label">Rewards</p>
            <div className="projects-sidebar__rewards">
              {projectRewards.map((reward) => (
                <div className="reward-card" key={reward.label}>
                  <div className="reward-card__icon" aria-hidden="true" />
                  <span className="reward-card__value">{reward.value}</span>
                  <span className="reward-card__label">{reward.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-sidebar__controls">
            {projectControls.map((control) => (
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
