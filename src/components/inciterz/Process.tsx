import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Research & Data Collection",
    desc: "Constituency mapping, sentiment baselining, opposition intel.",
  },
  {
    n: "02",
    title: "Base Building",
    desc: "Cadre recruitment, booth-agent networks, infrastructure setup.",
  },
  {
    n: "03",
    title: "Momentum Creation",
    desc: "Narrative push, digital saturation, high-visibility events.",
  },
  {
    n: "04",
    title: "Final Push & GOTV",
    desc: "Voter slip drops, transport ops, turnout maximization.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
            Campaign Journey
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
            From data to victory - a four-phase playbook
          </h2>
        </Reveal>

        <div className="relative mt-10 sm:mt-16">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-royal/60 to-transparent md:block" />

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 flex h-12 items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-royal)] font-display font-bold text-primary-foreground shadow-royal animate-pulse-glow">
                      {i + 1}
                    </div>
                  </div>
                  <div className="mt-6 glass rounded-xl p-5">
                    <div className="text-xs font-medium uppercase tracking-wider text-royal-glow">
                      Phase {s.n}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
