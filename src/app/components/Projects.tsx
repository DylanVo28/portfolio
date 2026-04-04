"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

type CarouselDirection = "next" | "prev";
type CarouselSlot =
  | "hidden-left"
  | "left"
  | "center"
  | "right"
  | "hidden-right";
type CarouselTransition =
  | {
      direction: CarouselDirection;
      phase: "prep" | "animate";
    }
  | null;

const projects: Project[] = [
  {
    title: "What.swap",
    image: "/images/what-swap.png",
    category: "Web3 Trading / Multi-chain App",
    domain:
      "Multi-chain token discovery, analytics, and swap execution across EVM, Solana, Sui, and TON",
    published: "What team · 10 members",
    description:
      "What.swap is a multi-chain Web3 application built to help users discover, analyze, and trade crypto tokens across multiple ecosystems with OKX Web3 APIs as the core market and trading data layer.",
    role:
      "Integrated OKX Web3 APIs, multi-chain wallet and transaction flows, secure server-side proxy routes, TradingView charting, and the full swap execution flow from quote retrieval to transaction broadcasting.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack React Query",
      "Zustand",
      "Privy",
      "Wagmi",
      "viem",
      "ethers",
      "Solana Web3.js",
      "Sui dApp Kit",
      "TON Connect",
      "OKX Web3 APIs",
      "OKX WebSocket",
      "TradingView Charting Library",
    ],
    team: "10 members (What team)",
    menuLeft: "Search · Ranking · Charts · Swap",
    menuRight: "Wallet · Quote · Broadcast",
    heroLabel: "WHAT.SWAP",
    sideMenu: "Trade · Search · Charts · Tokens",
    sideHeadingLines: ["What", "Swap"],
    sideHeadlineLines: ["Multi-chain", "token trading"],
  },
  {
    title: "What Exchange",
    image: "/images/what-exchange.png",
    category: "Web3 Exchange / Hyperliquid Frontend",
    domain:
      "Decentralized trading frontend for perpetual, spot, and RWA market workflows on Hyperliquid",
    published: "What team · 10 members",
    description:
      "What Exchange is a decentralized trading platform frontend integrated with Hyperliquid, focused on real-time perpetual, spot, and RWA market data, order placement, portfolio tracking, token swap, referral and points programs, funding-rate comparison, and API wallet management.",
    role:
      "Integrated Hyperliquid REST and WebSocket market flows, portfolio and account features, API wallet creation with typed-signature approvals, and perp trading workflows with leverage, TP/SL, slippage, margin actions, and close-position handling.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack React Query",
      "Zustand",
      "Privy",
      "Wagmi",
      "viem",
      "ethers",
      "Hyperliquid API",
      "WebSocket",
      "TradingView Charting Library",
    ],
    team: "10 members (What team)",
    menuLeft: "Perps · Spot · RWA · Portfolio",
    menuRight: "Orders · Wallet · Funding",
    heroLabel: "WHAT.EX",
    sideMenu: "Perps · Spot · API Wallet · Charts",
    sideHeadingLines: ["What", "Exchange"],
    sideHeadlineLines: ["Hyperliquid", "trading desk"],
  },
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
  {
    title: "Blog Website",
    image: "/images/blog-website.png",
    category: "Personal Project / Full-stack Blogging Platform",
    domain:
      "Full-stack blogging platform with paid questions, internal wallet, author monetization, and AI-assisted workflows",
    published: "Personal project · solo build",
    description:
      "Blog Website is a full-stack blogging platform that lets authors publish articles, engage readers through free comments and paid questions, and track earnings with an internal wallet and author dashboard.",
    role:
      "Designed the monetization flow, QR-based deposits, internal wallet handling, real-time notifications, background jobs, vector-powered AI context lookup, and environment-aware backend deployment workflows.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack React Query",
      "Zustand",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "JWT",
      "Passport",
      "Docker",
      "Docker Compose",
    ],
    team: "1 member (personal project)",
    menuLeft: "Posts · Wallet · Questions · Authors",
    menuRight: "AI · Deposits · Dashboard",
    heroLabel: "BLOG.OS",
    sideMenu: "Posts · Paid Q&A · Wallet · Realtime",
    sideHeadingLines: ["Blog", "Website"],
    sideHeadlineLines: ["Monetized", "author platform"],
  },
];

const projectTabs = [
  { title: "Trading", caption: "What.swap with OKX-powered multi-chain swap flows." },
  { title: "Exchange", caption: "What Exchange with Hyperliquid market and perp flows." },
  { title: "Launchpad", caption: "Starship token-claiming flows for Web3 fundraising." },
  { title: "Identity", caption: "OneID profile and KYC work on Viction." },
  { title: "Mobile", caption: "3 Tốt app for shrimp-farming operations." },
  { title: "Commerce", caption: "Mobifone SSR storefront with dynamic SEO." },
  { title: "Blog", caption: "Blog platform with wallet, AI jobs, and realtime flows." },
];

const CAROUSEL_TRANSITION_MS = 460;

function getWrappedIndex(index: number) {
  return (index + projects.length) % projects.length;
}

export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [carouselTransition, setCarouselTransition] =
    useState<CarouselTransition>(null);

  const activeProject = projects[activeProjectIndex];
  const leftProject = projects[getWrappedIndex(activeProjectIndex - 1)];
  const rightProject = projects[getWrappedIndex(activeProjectIndex + 1)];
  const progressWidth = `${((activeProjectIndex + 1) / projects.length) * 100}%`;
  const isCarouselAnimating = carouselTransition !== null;

  useEffect(() => {
    if (carouselTransition?.phase !== "prep") {
      return undefined;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      setCarouselTransition((currentTransition) =>
        currentTransition
          ? { direction: currentTransition.direction, phase: "animate" }
          : null,
      );
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [carouselTransition]);

  useEffect(() => {
    if (carouselTransition?.phase !== "animate") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveProjectIndex((currentIndex) =>
        carouselTransition.direction === "next"
          ? getWrappedIndex(currentIndex + 1)
          : getWrappedIndex(currentIndex - 1),
      );
      setCarouselTransition(null);
    }, CAROUSEL_TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [carouselTransition]);

  const showPreviousProject = () => {
    if (isCarouselAnimating) {
      return;
    }

    setCarouselTransition({ direction: "prev", phase: "prep" });
  };

  const showNextProject = () => {
    if (isCarouselAnimating) {
      return;
    }

    setCarouselTransition({ direction: "next", phase: "prep" });
  };

  const getCarouselCards = () => {
    const beforeLeftProject = projects[getWrappedIndex(activeProjectIndex - 2)];
    const afterRightProject = projects[getWrappedIndex(activeProjectIndex + 2)];

    if (!carouselTransition) {
      return [
        { project: leftProject, slot: "left" as CarouselSlot },
        { project: activeProject, slot: "center" as CarouselSlot },
        { project: rightProject, slot: "right" as CarouselSlot },
      ];
    }

    if (carouselTransition.direction === "next") {
      if (carouselTransition.phase === "prep") {
        return [
          { project: leftProject, slot: "left" as CarouselSlot },
          { project: activeProject, slot: "center" as CarouselSlot },
          { project: rightProject, slot: "right" as CarouselSlot },
          { project: afterRightProject, slot: "hidden-right" as CarouselSlot },
        ];
      }

      return [
        { project: leftProject, slot: "hidden-left" as CarouselSlot },
        { project: activeProject, slot: "left" as CarouselSlot },
        { project: rightProject, slot: "center" as CarouselSlot },
        { project: afterRightProject, slot: "right" as CarouselSlot },
      ];
    }

    if (carouselTransition.phase === "prep") {
      return [
        { project: beforeLeftProject, slot: "hidden-left" as CarouselSlot },
        { project: leftProject, slot: "left" as CarouselSlot },
        { project: activeProject, slot: "center" as CarouselSlot },
        { project: rightProject, slot: "right" as CarouselSlot },
      ];
    }

    return [
      { project: beforeLeftProject, slot: "left" as CarouselSlot },
      { project: leftProject, slot: "center" as CarouselSlot },
      { project: activeProject, slot: "right" as CarouselSlot },
      { project: rightProject, slot: "hidden-right" as CarouselSlot },
    ];
  };

  const renderCarouselCard = (project: Project, slot: CarouselSlot) => {
    const sideLines = project.sideHeadingLines ?? project.sideHeadlineLines ?? [];

    return (
      <article
        className={`project-card-3d project-card-3d--slot-${slot}`}
        key={project.title}
      >
        <p className="project-card__published-label">{project.published}</p>

        <div className="project-card__media-frame">
          <Image
            alt={`${project.title} preview`}
            className="project-card__image"
            fill
            priority={slot === "center" && activeProjectIndex === 0}
            sizes="(max-width: 820px) 100vw, 370px"
            src={project.image}
          />
          <div className="project-card__image-overlay" aria-hidden="true" />

          <div className="project-card__top-menu">
            <span>{project.menuLeft}</span>
            <span>{project.menuRight}</span>
          </div>

          {/*<p className="project-card__headline">{project.heroLabel}</p>*/}
          <p className="project-card__side-menu">{project.sideMenu}</p>

          <p className="project-card__side-title">
            {sideLines.map((line) => (
              <span key={`${project.title}-${line}`}>{line}</span>
            ))}
          </p>

          {/*<div className="project-card__bottom-strip" aria-hidden="true">*/}
          {/*  <div className="project-card__strip project-card__strip--route" />*/}
          {/*  <div className="project-card__strip project-card__strip--surface" />*/}
          {/*  <div className="project-card__strip project-card__strip--accent" />*/}
          {/*  <div className="project-card__strip project-card__strip--light" />*/}
          {/*</div>*/}
        </div>

        <p className="project-card__action">Case File</p>

        <p className="project-card__caption">
          {project.title}
          <small>{project.category}</small>
        </p>
      </article>
    );
  };

  const carouselCards = getCarouselCards();

  return (
    <section
      className="projects-dossier portfolio-section-anchor"
      id="projects-section"
      aria-labelledby="projects-dossier-title"
    >
      <div className="projects-dossier__scanline" aria-hidden="true" />
      <div className="projects-dossier__layout">
        <section className="projects-main" aria-labelledby="projects-dossier-title">
          <div className="projects-main__inner">
            <p className="projects-main__page-title">Projects</p>

            <div className="projects-carousel" aria-label="Selected project previews">
              <button
                className="projects-carousel__arrow projects-carousel__arrow--left"
                aria-label="Show previous project"
                disabled={isCarouselAnimating}
                onClick={showPreviousProject}
                type="button"
              >
                ‹
              </button>

              {carouselCards.map(({ project, slot }) => renderCarouselCard(project, slot))}

              <button
                className="projects-carousel__arrow projects-carousel__arrow--right"
                aria-label="Show next project"
                disabled={isCarouselAnimating}
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

          {/*<div className="projects-tabs" aria-label="Projects tabs">*/}
          {/*  {projectTabs.map((tab, index) => (*/}
          {/*    <article*/}
          {/*      className={*/}
          {/*        index === 0 ? "project-tab project-tab--active" : "project-tab"*/}
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
