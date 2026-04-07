"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_CLOSE_DELAY_MS = 1600;
const INTRO_REDUCED_MOTION_CLOSE_DELAY_MS = 140;
const INTRO_PAGE_REVEAL_MS = 1820;

type IntroProps = {
  ctaLabel?: string;
};

export function Intro({ ctaLabel = "Access portfolio" }: IntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMainRevealed, setIsMainRevealed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasRevealedMainRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (isDismissed) {
      return;
    }

    document.body.dataset.introPage = "hidden";
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) {
      return;
    }

    hasRevealedMainRef.current = false;

    const timeoutId = window.setTimeout(() => {
      hasRevealedMainRef.current = true;
      document.body.dataset.introPage = "revealed";
      setIsMainRevealed(true);
    }, INTRO_PAGE_REVEAL_MS);

    return () => {
      window.clearTimeout(timeoutId);

      if (!hasRevealedMainRef.current) {
        document.body.removeAttribute("data-intro-page");
      }
    };
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isDismissed]);

  useEffect(() => {
    if (!isClosing) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDismissed(true);
    }, prefersReducedMotion ? INTRO_REDUCED_MOTION_CLOSE_DELAY_MS : INTRO_CLOSE_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isClosing, prefersReducedMotion]);

  if (isDismissed) {
    return null;
  }

  const handleDismiss = () => {
    if (isClosing) {
      return;
    }

    if (!hasRevealedMainRef.current) {
      hasRevealedMainRef.current = true;
      document.body.dataset.introPage = "revealed";
      setIsMainRevealed(true);
    }

    setIsClosing(true);
  };

  return (
    <section
      aria-labelledby="intro-title"
      aria-modal="true"
      className={`fixed inset-0 z-50 ${isClosing ? "pointer-events-none" : ""}`}
      role="dialog"
    >
      <div
        className={`intro-overlay__backdrop pointer-events-none absolute inset-0 transition-[background-color,opacity] duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMainRevealed ? "bg-[rgba(1,1,3,0.66)]" : "bg-[rgba(1,1,3,0.9)]"
        } ${isMainRevealed ? "backdrop-blur-sm" : "backdrop-blur-md"} ${
          isClosing ? "intro-overlay__backdrop--closing" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`intro-overlay__doors absolute inset-0 z-[70] ${
          isClosing ? "intro-overlay__doors--active" : ""
        }`}
      >
        <div className={`intro-door intro-door--left ${isClosing ? "intro-door--left-open" : ""}`} />
        <div className={`intro-door intro-door--right ${isClosing ? "intro-door--right-open" : ""}`} />
        <div className={`intro-door__seam ${isClosing ? "intro-door__seam--active" : ""}`} />
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-[-15%] left-[-20%] w-[45%] ${
          isClosing ? "intro-overlay__ornament--closing" : "opacity-100"
        }`}
      >
        <div className="intro-overlay__beam h-full w-full" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[52vw] w-[52vw] min-h-[420px] min-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className={`intro-overlay__flare h-full w-full rounded-full ${isClosing ? "intro-overlay__flare--closing" : ""}`} />
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[72vw] w-[72vw] min-h-[680px] min-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isClosing ? "intro-overlay__ornament--closing" : "opacity-100"
        }`}
      >
        <div
          className={`intro-overlay__aura h-full w-full rounded-full ${
            isClosing ? "intro-overlay__aura--closing" : ""
          }`}
        />
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[46vw] w-[46vw] min-h-[360px] min-w-[360px] -translate-x-1/2 -translate-y-1/2 ${
          isClosing ? "intro-overlay__ornament--closing" : "opacity-100"
        }`}
      >
        <div className="intro-overlay__ring h-full w-full rounded-full border border-[rgba(255,90,90,0.18)]" />
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[58vw] w-[58vw] min-h-[460px] min-w-[460px] -translate-x-1/2 -translate-y-1/2 ${
          isClosing ? "intro-overlay__ornament--closing" : "opacity-100"
        }`}
      >
        <div className="intro-overlay__ring intro-overlay__ring--delayed h-full w-full rounded-full border border-[rgba(255,255,255,0.08)]" />
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 ${
          isClosing ? "intro-overlay__horizon--closing" : "opacity-100"
        }`}
      >
        <div className="intro-overlay__horizon h-full w-full">
          <div className="intro-overlay__horizon-line intro-overlay__horizon-line--base" />
          <div
            className={`intro-overlay__horizon-core ${
              isClosing ? "intro-overlay__horizon-core--closing" : ""
            }`}
          />
          <div
            className={`intro-overlay__horizon-line intro-overlay__horizon-line--left ${
              isClosing ? "intro-overlay__horizon-line--closing" : ""
            }`}
          />
          <div
            className={`intro-overlay__horizon-line intro-overlay__horizon-line--right ${
              isClosing ? "intro-overlay__horizon-line--closing" : ""
            }`}
          />
        </div>
      </div>

      <div
        className={`intro-overlay__stage relative z-40 isolate h-full overflow-hidden border border-[rgba(255,68,86,0.18)] bg-[linear-gradient(180deg,rgba(2,2,2,0.92),rgba(2,2,2,0.98))] shadow-[0_0_0_1px_rgba(255,62,81,0.18),0_0_30px_rgba(255,0,102,0.08)] transition-[transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "scale-100 opacity-100" : "scale-[1.08] opacity-0"
        } ${isClosing ? "intro-overlay__stage--closing" : ""}`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(180,0,0,0.28),transparent_18%),radial-gradient(circle_at_98%_2%,rgba(255,0,0,0.14),transparent_12%)] transition-opacity duration-[900ms] ${
            isClosing ? "intro-overlay__effect--closing" : "opacity-100"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,0,85,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,85,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-15 mix-blend-screen transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isClosing ? "intro-overlay__effect--closing" : "translate-y-0 opacity-15"
          }`}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_36%)] transition duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isClosing ? "intro-overlay__effect--closing" : "scale-100 opacity-100"
          }`}
        />

        <div
          className={`intro-overlay__content relative mx-auto w-full max-w-[1200px] transition-[transform,opacity,filter] duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100 blur-0"
              : "translate-y-14 scale-[0.94] opacity-0 blur-md"
          } ${isClosing ? "intro-overlay__content--closing" : ""}`}
        >
          <div
            className={`intro-overlay__shell grid min-h-[100svh] grid-cols-1 items-center gap-7 px-6 py-12 sm:px-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-[88px] lg:px-10 lg:py-16 ${
              isClosing ? "intro-overlay__shell--closing" : ""
            }`}
          >
            <div
              aria-hidden="true"
              className={`transition-[transform,opacity,filter] duration-[1350ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "translate-y-10 scale-[0.72] opacity-0 blur-xl"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              <div
                className="select-none text-[clamp(150px,34vw,380px)] font-black leading-[0.78] text-[var(--red)] uppercase drop-shadow-[0_0_26px_rgba(255,72,72,0.32)] transition-[letter-spacing,transform] duration-[1350ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:text-[clamp(180px,24vw,380px)]"
                style={{
                  fontFamily: "var(--font-big-shoulders), sans-serif",
                  letterSpacing: isVisible ? "-6px" : "18px",
                  transform: "scaleY(1.08)",
                }}
              >
                HI!
              </div>
            </div>

            <div
              className={`max-w-[640px] pt-0 transition-[transform,opacity,filter] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:pt-[18px] ${
                isVisible
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-16 opacity-0 blur-md"
              }`}
              style={{ transitionDelay: "260ms" }}
            >

              <h2
                className={`mb-4 font-display text-[clamp(20px,1.45vw,28px)] font-bold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.95)] transition-[transform,opacity,letter-spacing] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:mb-12 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                id="intro-title"
                style={{
                  letterSpacing: "0.16em",
                  transitionDelay: "360ms",
                }}
              >
                Dinh Vo / Frontend Developer Portfolio
              </h2>

              <p
                className={`mb-2 max-w-[720px] font-sans text-[clamp(13px,0.95vw,16px)] leading-[1.9] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.88)] transition-[transform,opacity] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "460ms" }}
              >
                This portfolio is presented like a sci-fi command interface and
                documents my work across polished web UI, Web3 products, and
                product-focused frontend engineering with React, Next.js, React
                Native, and related tools.
              </p>

              <p
                className={`mb-4 max-w-[720px] font-sans text-[clamp(13px,0.95vw,16px)] leading-[1.9] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.88)] transition-[transform,opacity] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:mb-[46px] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "560ms" }}
              >
                Inside you can review my experience timeline, selected builds such
                as exchange frontends, DApps, and mobile products, then open a
                direct channel if you are hiring or building something that needs
                sharp frontend execution.
              </p>

              <div
                className={`flex flex-wrap items-center gap-4 transition-[transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "660ms" }}
              >
                <button
                  className="cursor-pointer inline-flex h-16 min-w-[260px] items-center justify-center border-[1.5px] border-[var(--red)] bg-transparent px-7 font-display text-sm font-bold uppercase tracking-[0.16em] text-[var(--red)] shadow-[0_0_0_1px_rgba(255,68,86,0.1)] transition duration-300 ease-out hover:-translate-y-1 hover:bg-[rgba(234,74,74,0.08)] hover:shadow-[0_0_28px_rgba(234,74,74,0.32)]"
                  onClick={handleDismiss}
                  type="button"
                >
                  {ctaLabel}
                </button>

                <span className="font-sans text-[11px] uppercase tracking-[0.36em] text-[rgba(255,255,255,0.48)]">
                  Experience / Projects / Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
