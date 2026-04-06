"use client";

import { useEffect, useState } from "react";

const INTRO_CLOSE_DELAY_MS = 320;

type IntroProps = {
  ctaLabel?: string;
};

export function Intro({ ctaLabel = "Enter the system" }: IntroProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDismissed]);

  useEffect(() => {
    if (!isClosing) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDismissed(true);
    }, INTRO_CLOSE_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isClosing]);

  if (isDismissed) {
    return null;
  }

  return (
    <section
      aria-labelledby="intro-title"
      aria-modal="true"
      className={`fixed inset-0 z-50 transition duration-300 ease-out ${
        isClosing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
    >
      <div className="absolute inset-0 bg-[rgba(1,1,3,0.8)] backdrop-blur-md" />

      <div className="relative isolate h-full overflow-hidden border border-[rgba(255,68,86,0.18)] bg-[linear-gradient(180deg,rgba(2,2,2,0.92),rgba(2,2,2,0.98))] shadow-[0_0_0_1px_rgba(255,62,81,0.18),0_0_30px_rgba(255,0,102,0.08)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(180,0,0,0.28),transparent_18%),radial-gradient(circle_at_98%_2%,rgba(255,0,0,0.14),transparent_12%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,0,85,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,85,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-15 mix-blend-screen"
        />

        <div
          className={`relative mx-auto grid min-h-[100svh] w-full max-w-[1200px] grid-cols-1 items-center gap-7 px-6 py-12 transition duration-300 ease-out sm:px-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-[88px] lg:px-10 lg:py-16 ${
            isClosing ? "scale-[1.02] opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="select-none font-display text-[clamp(150px,34vw,380px)] font-black leading-[0.82] tracking-[-0.12em] text-[var(--red)] uppercase [transform:scaleY(1.08)] lg:text-[clamp(180px,24vw,380px)]"
            style={{ fontFamily: "var(--font-big-shoulders), sans-serif", letterSpacing: '-6px' }}
          >
            HI!
          </div>

          <div className="max-w-[640px] pt-0 lg:pt-[18px]">
            <h2
              className="mb-7 font-display text-[clamp(20px,1.45vw,28px)] font-bold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.95)] lg:mb-12"
              id="intro-title"
            >
              Welcome to my personal website.
            </h2>

            <p className="mb-6 max-w-[720px] font-sans text-[clamp(13px,0.95vw,16px)] leading-[1.9] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.88)]">
              I created this website to feel like a game and sci-fi interface. The
              text throughout the experience follows that same direction.
            </p>

            <p className="mb-10 max-w-[720px] font-sans text-[clamp(13px,0.95vw,16px)] leading-[1.9] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.88)] lg:mb-[46px]">
              You will find achievements and quests that map the progress of my
              professional life and the work I am focused on right now.
            </p>

            <button
              className="cursor-pointer inline-flex h-16 min-w-[260px] items-center justify-center border-[1.5px] border-[var(--red)] bg-transparent px-7 font-display text-sm font-bold uppercase tracking-[0.16em] text-[var(--red)] transition duration-200 ease-out hover:-translate-y-px hover:bg-[rgba(234,74,74,0.08)] hover:shadow-[0_0_22px_rgba(234,74,74,0.2)]"
              onClick={() => setIsClosing(true)}
              type="button"
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
