import { ArrowRight, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-royal)] opacity-30 blur-3xl" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-[0.2]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
              Let's Talk
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-2xl font-bold sm:text-3xl md:text-6xl">
              Ready to <span className="text-gradient">Win Your Campaign?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base text-muted-foreground">
              Book a confidential strategy call with our senior consultants — or
              download the INCITERZ playbook to see how we operate.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-royal)] px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-primary-foreground shadow-royal transition-transform hover:scale-[1.04]"
              >
                Book Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/Inciterz_Deck.pdf"
                download="Inciterz_Deck.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Download size={16} />
                Download Strategy Deck
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
