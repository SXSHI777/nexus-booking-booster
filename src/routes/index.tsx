import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/hooks/use-reveal";
import nexusLogo from "@/assets/nexus-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nexus Media Agency — Email Marketing for Coaches & Consultants",
      },
      {
        name: "description",
        content:
          "We build the email systems that welcome new leads, build trust, and get them on your calendar ready to buy. For coaches, consultants, and agency owners.",
      },
      {
        property: "og:title",
        content: "Nexus Media Agency — Turn your email list into booked calls",
      },
      {
        property: "og:description",
        content:
          "Email systems that welcome new leads, build trust, and fill your calendar. Built for coaches, consultants, and agency owners.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Nexus Media Agency — Email Marketing" },
      {
        name: "twitter:description",
        content:
          "Email systems that welcome new leads, build trust, and fill your calendar.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const CALENDLY_URL = "https://calendly.com/sufyaan-nexusmedia-agency/30min";
const EMAIL = "sufyaan@nexusmedia-agency.co.za";
const LINKEDIN_URL = "https://www.linkedin.com/in/sufyaan-booley-639b8b347/";

/* ---------- Shared building blocks ---------- */

function BookCallButton({
  className = "",
  children = "Book a call",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-primary/40 ${className}`}
    >
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="section-kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Page sections ---------- */

function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center">
          <img
            src={nexusLogo}
            alt="Nexus Media Agency"
            className="h-6 w-auto sm:h-7"
          />
        </a>
        <BookCallButton className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      {/* Warm glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Email marketing for coaches, consultants & agency owners
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-foreground sm:text-6xl">
            Turn your email list into{" "}
            <span className="text-primary">booked calls.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build the email systems that welcome new leads, build trust, and get
            them on your calendar ready to buy. For coaches, consultants, and agency
            owners.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookCallButton className="px-8 py-3.5 text-base" />
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Get a free email breakdown
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PAIN_POINTS = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
    title: "Leads sign up, then go quiet",
    body: "Someone opts in, pokes around, and disappears — because nothing arrives to keep the conversation going.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l-2.5 2.5" />
      </svg>
    ),
    title: "Booked calls don't show up",
    body: "Prospects book, then no-show — because they arrive at the call cold, unconvinced, and easy to postpone.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
    title: "Emails sound generic",
    body: "Template copy that could have come from anyone — so readers skim it, ignore it, and forget who sent it.",
  },
];

function WhyLeadsGoCold() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="The problem"
          title="Why leads go cold"
          intro="You're doing the hard part — getting people interested. But interest fades fast without the right emails behind it."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  {point.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    title: "Email audit",
    body: "We review your current emails and list setup, then show you exactly where leads are slipping away and what to fix first.",
  },
  {
    title: "Sequences written for you",
    body: "Welcome, nurture, and re-engagement sequences written in your voice — so every new lead gets the same well-rehearsed conversation.",
  },
  {
    title: "Setup and optimization",
    body: "We load everything into your email platform, connect it to your booking link, and keep refining based on how your list actually behaves.",
  },
];

function WhatWeDo() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="What we do"
          title="An email system, built end to end"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <span className="font-heading text-5xl font-bold text-primary/20 transition-colors group-hover:text-primary/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: "Book a discovery call",
    body: "A free 30-minute call to understand your business, your leads, and where your email marketing stands today.",
  },
  {
    title: "We audit your current setup",
    body: "We dig into your list, existing emails, and booking flow, and map out exactly what's missing and what's possible.",
  },
  {
    title: "We write your sequences",
    body: "Welcome, nurture, and follow-up emails drafted in your voice and shared with you for review and approval.",
  },
  {
    title: "We launch and optimize",
    body: "Everything goes live, connected to your calendar — then we monitor results and keep tightening the system.",
  },
];

function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="How it works"
          title="From first call to a system that sells"
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative space-y-0">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <li className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[21px] top-12 h-[calc(100%-3rem)] w-px bg-border"
                    />
                  )}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-heading text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SampleWork() {
  return (
    <section id="sample" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Sample work"
          title="The same lead, two very different emails"
          intro="A before-and-after example of the kind of rewrite we do. This is a sample for illustration — not a client's email."
        />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Before — typical email
                </span>
              </div>
              <div className="mt-5 space-y-3 border-b border-border pb-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Subject:</span> Just
                  checking in
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">From:</span> you@yourbusiness.com
                </p>
              </div>
              <div className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Hi [Name],</p>
                <p>
                  I wanted to reach out and see if you had any questions about working
                  together. I'd love to hop on a call sometime and chat about how we can
                  help you grow.
                </p>
                <p>Let me know if you're interested!</p>
                <p>Thanks,</p>
                <p>[Your name]</p>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-xs italic text-muted-foreground">
                No reason to reply, no value delivered, easy to ignore.
              </p>
            </article>
          </Reveal>

          <div className="flex items-center justify-center">
            <span
              aria-hidden="true"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-base font-bold text-primary-foreground lg:flex"
            >
              →
            </span>
            <span className="my-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-base font-bold text-primary-foreground lg:hidden">
              ↓
            </span>
          </div>

          <Reveal delay={140}>
            <article className="flex h-full flex-col rounded-2xl border border-primary/40 bg-card p-6 shadow-xl shadow-primary/10 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  After — Nexus email
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Example
                </span>
              </div>
              <div className="mt-5 space-y-3 border-b border-border pb-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Subject:</span> The 3
                  questions I ask before hiring anyone
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">From:</span> you@yourbusiness.com
                </p>
              </div>
              <div className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Hi [Name],</p>
                <p>
                  Before anyone hires me, I ask them the same three questions. Most
                  people get them wrong — and it's costing them clients.
                </p>
                <p>
                  1. Where did your last five leads come from?
                  <br />
                  2. What do they say "no" to?
                  <br />
                  3. What happens after they say "yes"?
                </p>
                <p>
                  If you want, hit reply and I'll tell you how you scored. Or grab a
                  time on my calendar and we'll go through it together.
                </p>
                <p>[Your name]</p>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-xs italic text-muted-foreground">
                Delivers value, starts a conversation, points straight at the calendar.
              </p>
            </article>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Sample emails shown for illustration only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const AUDIENCES = [
  {
    title: "Coaches",
    body: "You sell transformation, and that takes trust. Your emails do the trust-building between the opt-in and the call.",
  },
  {
    title: "Consultants",
    body: "Your expertise is the product. We turn your thinking into emails that prove it before anyone gets on a call.",
  },
  {
    title: "Agency owners",
    body: "You don't have hours to write emails. We run the system so every lead you generate gets followed up — without you.",
  },
];

function WhoItsFor() {
  return (
    <section id="audience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Who it's for"
          title="Built for people who sell expertise"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                <h3 className="text-lg font-semibold text-primary">{audience.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {audience.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free email breakdown request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="section-kicker">Get started</span>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Ready to turn your list into booked calls?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Book a free 30-minute call, or send us a note and we'll give you a
                free breakdown of what your emails should be doing — no strings
                attached.
              </p>
              <div className="mt-8">
                <BookCallButton className="px-8 py-3.5 text-base" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Get a free email breakdown
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell us a little about your business.
              </p>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-medium text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-website"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Website
                  </label>
                  <input
                    id="contact-website"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What are you trying to fix with your emails?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-accent"
              >
                Send message
              </button>
              {sent && (
                <p className="mt-4 text-center text-sm text-primary">
                  Your email app should be opening with your message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center">
          <img
            src={nexusLogo}
            alt="Nexus Media Agency"
            className="h-6 w-auto opacity-90"
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="transition-colors hover:text-primary"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main>
        <Hero />
        <WhyLeadsGoCold />
        <WhatWeDo />
        <HowItWorks />
        <SampleWork />
        <WhoItsFor />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
