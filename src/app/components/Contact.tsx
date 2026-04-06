import { HeroShowcase } from "./HeroShowcase";

const contactHudItems = [
  "STATUS: OPEN TO WORK",
  "TIME ZONE: GMT+7",
  "FOCUS: REACT / NEXT.JS",
];

const contactControls = [
  { label: "Response window", state: "24H" },
  { label: "Remote workflow", state: "✓" },
  { label: "Visual settings", state: "⚙" },
];

const contactLinks = [
  {
    label: "Phone",
    links: [{ href: "tel:+84392857487", text: "+84 392 857 487" }],
  },
  {
    label: "Email",
    links: [{ href: "mailto:kedinhvo2000@gmail.com", text: "kedinhvo2000@gmail.com" }],
  },
  {
    label: "LinkedIn",
    links: [
      {
        href: "https://www.linkedin.com/in/dinh-vo-a81835139/",
        text: "linkedin.com/in/dinh-vo-a81835139",
      },
    ],
  },
  {
    label: "GitHub",
    links: [
      { href: "https://github.com/dinhvdk", text: "github.com/dinhvdk" },
      { href: "https://github.com/DylanVo28", text: "github.com/DylanVo28" },
    ],
  },
  {
    label: "My Website",
    links: [{ href: "https://dinhvdk.vercel.app/about", text: "dinhvdk.vercel.app/about" }],
  },
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

            <div className="contact-terminal__direct-links" aria-label="Direct contact links">
              {contactLinks.map((item) => (
                <div className="contact-terminal__link-group" key={item.label}>
                  <p className="contact-terminal__link-label">{item.label}</p>

                  <div className="contact-terminal__link-stack">
                    {item.links.map((link) => (
                      <a
                        className="contact-terminal__link-anchor"
                        href={link.href}
                        key={link.href}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*<form className="contact-form-panel" aria-label="Contact form">*/}
          {/*  <div className="contact-form-panel__field">*/}
          {/*    <label className="contact-form-panel__label" htmlFor="contact-name">*/}
          {/*      HOW SHOULD I CALL YOU?*/}
          {/*    </label>*/}
          {/*    <input*/}
          {/*      autoComplete="name"*/}
          {/*      className="contact-form-panel__input"*/}
          {/*      id="contact-name"*/}
          {/*      name="name"*/}
          {/*      placeholder="YOUR NAME"*/}
          {/*      type="text"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="contact-form-panel__field">*/}
          {/*    <label className="contact-form-panel__label" htmlFor="contact-email">*/}
          {/*      SENDING FROM*/}
          {/*    </label>*/}
          {/*    <input*/}
          {/*      autoComplete="email"*/}
          {/*      className="contact-form-panel__input"*/}
          {/*      id="contact-email"*/}
          {/*      name="email"*/}
          {/*      placeholder="YOUR.NAME@EXAMPLE.COM"*/}
          {/*      type="email"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="contact-form-panel__field contact-form-panel__field--message">*/}
          {/*    <label className="contact-form-panel__label" htmlFor="contact-message">*/}
          {/*      TRANSMITTED DATA*/}
          {/*    </label>*/}
          {/*    <textarea*/}
          {/*      className="contact-form-panel__textarea"*/}
          {/*      id="contact-message"*/}
          {/*      name="message"*/}
          {/*      placeholder="HI, I WRITE TO YOU ABOUT..."*/}
          {/*      rows={8}*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="contact-form-panel__actions">*/}
          {/*    <button*/}
          {/*      className="contact-form-panel__button contact-form-panel__button--primary"*/}
          {/*      type="button"*/}
          {/*    >*/}
          {/*      SEND MESSAGE [ENTER]*/}
          {/*    </button>*/}
          {/*    <button*/}
          {/*      className="contact-form-panel__button contact-form-panel__button--secondary"*/}
          {/*      type="reset"*/}
          {/*    >*/}
          {/*      DISCARD [ESC]*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</form>*/}

          <section className="contact-viewer" aria-label="Angled banner preview">
            <div className="contact-viewer__frame">
              <HeroShowcase activeHref="#contact-section" className="contact-viewer__hero" />
            </div>
          </section>

          {/*<div className="contact-terminal__controls">*/}
          {/*  {contactControls.map((control) => (*/}
          {/*    <div className="contact-terminal__control-row" key={control.label}>*/}
          {/*      <span>{control.label}</span>*/}
          {/*      <span className="contact-terminal__control-pill">{control.state}</span>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
