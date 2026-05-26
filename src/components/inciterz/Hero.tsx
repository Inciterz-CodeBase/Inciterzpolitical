import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-rally.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Political campaign rally"
          width={1920}
          height={1024}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-grid opacity-[0.25] animate-grid-pan" />
      </div>

      {/* Aurora glows */}
      <div className="aurora" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-vibrant)] opacity-25 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-magenta/30 blur-3xl animate-float" style={{ background: "var(--magenta)" }} />
      <div className="pointer-events-none absolute top-1/3 left-0 h-64 w-64 rounded-full blur-3xl animate-float" style={{ background: "var(--cyan)", opacity: 0.25, animationDelay: "2s" }} />

      <div className="container relative mx-auto px-4 sm:px-6 text-center">
        <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full glass px-3 py-1.5 text-[10.5px] sm:px-4 sm:text-xs font-medium text-muted-foreground animate-fade-in">
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold animate-blink" />
          <span className="truncate sm:whitespace-normal">Election Strategy · Data Intelligence · Ground Command</span>
        </div>

        <h1 className="mx-auto mt-6 max-w-5xl font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl animate-fade-up">
          Smart Strategies for{" "}
          <span className="text-gradient">Winning Political Campaigns</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          We consult, curate, and communicate data-driven political success -
          from booth-level intelligence to a 24×7 war room that keeps your
          campaign moving forward.
        </p>

        <div
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[image:var(--gradient-vibrant)] px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-primary-foreground shadow-royal transition-all hover:scale-[1.05] hover:shadow-magenta"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Book Strategy Call
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            <PlayCircle size={16} />
            Explore Services
          </a>
        </div>

        {/* Trust strip */}
        <div
          className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 animate-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          {[
            ["120+", "Campaigns Run"],
            ["18M+", "Voters Reached"],
            ["95%", "Win Rate"],
            ["24/7", "War Room Ops"],
          ].map(([k, v]) => (
            <div key={v} className="gradient-border hover-lift glass rounded-xl px-3 py-4 sm:px-4 sm:py-5">
              <div className="font-display text-xl sm:text-2xl font-bold text-gradient md:text-3xl">
                {k}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
